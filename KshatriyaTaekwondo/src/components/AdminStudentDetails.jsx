import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminStudentDetails.css";
import { mapStudentDetailsList } from '../models/StudentDetailsDto.js';
import { GetStudentDetails, SaveStudentDetails } from '../services/AdminActionsService.js';
import {useDispatch,useSelector} from 'react-redux';
import {JwtActions} from '../store/slices/JwtSlice.js';
import {AuthActions} from '../store/slices/AuthSlice.js';

export function AdminStudentDetails() {
    const navigate = useNavigate();
    const [students, setStudents] = useState([]);
    const [pendingChanges, setPendingChanges] = useState({});
    const [filter, setFilter] = useState('All');
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [actionStatus, setActionStatus] = useState('');
    const pageSize = 25;

    //fetch store values/states
    const jwtToken = useSelector(state=>state.jwt.jwtToken);
    const userName = useSelector(state=>state.auth.username); 
    const dispatch = useDispatch();
    
    const extractPagedData = (response) => {
        const items = Array.isArray(response?.Data)
            ? response.Data
            : Array.isArray(response?.data)
                ? response.data
                : [];

        const totalCountRaw = response?.TotalRecordsCount ?? response?.totalRecordsCount;
        const totalCount = Number.isFinite(Number(totalCountRaw)) ? Number(totalCountRaw) : null;

        return { items, totalCount };
    };

    useEffect(() => {
        async function loadStudents(){
            try {
                const studentDetails = await GetStudentDetails(currentPage, pageSize,jwtToken);
                const { items, totalCount } = extractPagedData(studentDetails);

                if (items.length === 0 && currentPage > 1) {
                    setTotalPages(currentPage - 1);
                    setCurrentPage(currentPage - 1);
                    return;
                }

                const mappedStudents = mapStudentDetailsList(items).map((student) => ({
                    EnquiryId: student.enquiryId,
                    Name: student.name,
                    Email: student.email,
                    Phone: student.phone,
                    Message: student.message,
                    AdminComments: student.adminComments,
                    Fullfilled: student.fullfilled,
                    IsChanged: false,
                    registrationDate: student.registrationDate,
                    admincomments: student.adminComments
                }));

                const mergedStudents = mappedStudents.map((student) => {
                    const pending = pendingChanges[student.EnquiryId];
                    if (!pending) return student;

                    return {
                        ...student,
                        Fullfilled: pending.Fullfilled,
                        AdminComments: pending.AdminComments,
                        admincomments: pending.AdminComments,
                        IsChanged: true
                    };
                });

                setStudents(mergedStudents);

                const resolvedTotalPages = totalCount !== null
                    ? Math.max(1, Math.ceil(totalCount / pageSize))
                    : 1;
                setTotalPages(resolvedTotalPages);
            } catch (error) {
                console.error('Failed to load student details:', error);
                setStudents([]);
                setTotalPages(1);
            }
        };

        loadStudents();
    }, [currentPage]);

    const handleLogout = () => {        
        dispatch(JwtActions.clearJwtToken());
        dispatch(AuthActions.clearUserAuthDetails());

        navigate('/Home');
    };

    async function handleSaveActions () {
        const changedStudents = Object.values(pendingChanges)
            .filter((student) => student.IsChanged)
            .map((student) => ({
                EnquiryId: student.EnquiryId,
                AdminComments: student.AdminComments ?? null,
                Fullfilled: !!student.Fullfilled,
                IsChanged: true
            }));

        if (!changedStudents.length) {
            setActionStatus('No changes to save.');
            return;
        }

        try {
           var response = await SaveStudentDetails(changedStudents,jwtToken);
            setStudents((prev) => prev.map((student) => ({
                ...student,
                IsChanged: false
            })));
            setPendingChanges({});
            setActionStatus('Admin actions saved.');
            alert(response.message)
        } catch (error) {
            console.error('Failed to save student details:', error);
            setActionStatus(error?.message || 'Failed to save changes.');
        }
    };

    const handleClearActions = () => {
        setStudents((prev) => prev.map((student) => ({
            ...student,
            Fullfilled: false
        })));
        setActionStatus('Admin actions cleared.');
    };

    const parseDate = (str) => {
        if (!str) return new Date('');

        const raw = String(str).trim();

        if (raw.includes('T') || /^\d{4}-\d{2}-\d{2}/.test(raw)) {
            return new Date(raw);
        }

        const [d, m, y] = raw.split('-');
        if (!d || !m || !y) return new Date('');
        return new Date(`${y}-${m}-${d}`);
    };

    const formatRegistrationDate = (value) => {
        const date = parseDate(value);
        if (Number.isNaN(date.getTime())) return value || '-';

        const pad = (num) => String(num).padStart(2, '0');
        const yyyy = date.getFullYear();
        const mm = pad(date.getMonth() + 1);
        const dd = pad(date.getDate());
        const hh = pad(date.getHours());
        const min = pad(date.getMinutes());
        const sec = pad(date.getSeconds());

        return `${yyyy}-${mm}-${dd} ${hh}:${min}:${sec}`;
    };

    const applyFilter = (student) => {
        let ok = true;
        const today = new Date();
        const regDate = parseDate(student.registrationDate);

        if (search) {
            const s = search.toLowerCase();
            ok = student.Email.toLowerCase().includes(s) || student.Phone.includes(s);
        }
        if (ok && filter !== 'All') {
            const diffDays = Math.floor((today - regDate) / (1000 * 60 * 60 * 24));
            switch (filter) {
                case 'today':
                    ok = regDate.toDateString() === today.toDateString();
                    break;
                case 'yesterday':
                    const yesterday = new Date(today);
                    yesterday.setDate(today.getDate() - 1);
                    ok = regDate.toDateString() === yesterday.toDateString();
                    break;
                case '7days':
                    ok = diffDays < 7;
                    break;
                case '1month':
                    ok = diffDays < 30;
                    break;
                case '6months':
                    ok = diffDays < 183;
                    break;
                case '1year':
                    ok = diffDays < 365;
                    break;
                default:
                    break;
            }
        }
        return ok;
    };

    const filtered = students.filter(applyFilter);
    const paged = filtered;

    const changeFilter = (e) => {
        setFilter(e.target.value);
        setCurrentPage(1);
    };
    const changeSearch = (e) => {
        setSearch(e.target.value);
        setCurrentPage(1);
    };

    const prevPage = () => setCurrentPage(p => Math.max(1, p - 1));
    const nextPage = () => setCurrentPage(p => Math.min(totalPages, p + 1));
    const gotoPage = (n) => setCurrentPage(n);

    const handleFulfill = (enquiryId) => {
        const current = students.find((student) => student.EnquiryId === enquiryId);
        if (!current) return;

        const nextFullfilled = !current.Fullfilled;
        const nextAdminComments = current.AdminComments ?? current.admincomments ?? '';

        setStudents((prev) => prev.map((student) => {
            if (student.EnquiryId !== enquiryId) return student;
            return {
                ...student,
                Fullfilled: nextFullfilled,
                IsChanged: true
            };
        }));

        setPendingChanges((prev) => ({
            ...prev,
            [enquiryId]: {
                EnquiryId: enquiryId,
                AdminComments: nextAdminComments,
                Fullfilled: nextFullfilled,
                IsChanged: true
            }
        }));
    };

    const handleAdminCommentsChange = (enquiryId, value) => {
        setStudents((prev) => prev.map((student) => {
            if (student.EnquiryId !== enquiryId) return student;
            return {
                ...student,
                AdminComments: value,
                admincomments: value
            };
        }));

        setPendingChanges((prev) => {
            const existing = prev[enquiryId];
            if (!existing) return prev;

            return {
                ...prev,
                [enquiryId]: {
                    ...existing,
                    AdminComments: value
                }
            };
        });
    };

    useEffect(() => {
        if (currentPage > totalPages) {
            setCurrentPage(totalPages);
        }
    }, [currentPage, totalPages]);

    return (
        <div className="admin-bg">
            <span className="admin-greeting-text">Logged in as, {userName || 'Admin'}</span>
            <div className="admin-students-card">
                <button className="admin-logout-btn" onClick={handleLogout}>Logout</button>
                <h2 className="admin-title">Student Details</h2>
                <div className="filter-controls">
                    <select value={filter} onChange={changeFilter}>
                        <option value="All">All dates</option>
                        <option value="today">Today</option>
                        <option value="yesterday">Yesterday</option>
                        <option value="7days">Last 7 days</option>
                        <option value="1month">Last 1 month</option>
                        <option value="6months">Last 6 months</option>
                        <option value="1year">Last 1 year</option>
                    </select>
                    <input
                        type="text"
                        placeholder="Search email or phone"
                        value={search}
                        onChange={changeSearch}
                    />
                </div>
                <div className="admin-table-wrap">
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>Fullfilled</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Registration Date</th>
                                <th>Enquiry Message</th>
                                <th>Admin Comments</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paged.length ? (
                                paged.map((s, idx) => {
                                    const isFulfilled = !!s.Fullfilled;
                                    return (
                                        <tr key={idx} className={isFulfilled ? "row-fulfilled" : "row-unfulfilled"}>
                                            <td style={{textAlign:'center'}}>
                                                <input type="checkbox" checked={isFulfilled} onChange={() => handleFulfill(s.EnquiryId)} />
                                            </td>
                                            <td>{s.Name}</td>
                                            <td>{s.Email}</td>
                                            <td>{s.Phone}</td>
                                            <td>{formatRegistrationDate(s.registrationDate)}</td>
                                            <td>{s.Message || '-'}</td>
                                            <td>
                                                <textarea
                                                    value={s.AdminComments ?? s.admincomments ?? ''}
                                                    onChange={(event) => handleAdminCommentsChange(s.EnquiryId, event.target.value)}
                                                    disabled={isFulfilled}
                                                ></textarea>
                                            </td>
                                        </tr>
                                    );
                                })
                            ) : (
                                <tr>
                                    <td colSpan="7">No records found</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="student-pagination">
                    <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
                    {[...Array(totalPages)].map((_, i) => (
                        <button
                            key={i}
                            className={currentPage === i + 1 ? "active" : ""}
                            onClick={() => gotoPage(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))}
                    <button onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
                </div>
                <div className="admin-grid-actions">
                    <button className="admin-save-btn" onClick={handleSaveActions}>Save</button>
                    <button className="admin-clear-btn" onClick={handleClearActions}>Clear</button>
                </div>
                {actionStatus && <p className="admin-action-status">{actionStatus}</p>}
            </div>
        </div>
    );
}