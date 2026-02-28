import {ServerAPIUrl} from '../constants/ApplicationConstants.js';

export async function GetStudentDetails(pageNo = 1, pageSize = 25, jwtToken = "")
{
    const query = new URLSearchParams({
        pageNo: String(pageNo),
        pageSize: String(pageSize)
    });

    const response = await fetch(`${ServerAPIUrl}api/student/StudentDetails?${query.toString()}` ,{
        method:"GET",
        headers:{
            "content-type":"application/json",
            "Authorization":"bearer "+jwtToken
        }
    });
    const result = await response.json();
    return result;
}

export async function SaveStudentDetails(studentDetailsList,jwtToken)
{
    const response = await fetch(ServerAPIUrl+"api/student/SaveStudentDetails", {
        method: "PUT",
        headers: {
            "content-type": "application/json",
            "Authorization":"bearer "+jwtToken
        },
        body: JSON.stringify(studentDetailsList)
    });

    if (response.status === 403) {
        throw new Error("Insuffucient privileges, please contact an Administrator");
    }

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || `SaveStudentDetails failed with status ${response.status}`);
    }

    const contentType = response.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
        return await response.json();
    }

    return null;
}