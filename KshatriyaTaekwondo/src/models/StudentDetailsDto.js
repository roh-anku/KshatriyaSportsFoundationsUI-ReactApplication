export class StudentDetails {
    constructor(enquiryId, name, email, phone, location, message, adminComments, fullfilled,registrationDate) {
        this.enquiryId = enquiryId;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.location = location;
        this.message = message;
        this.adminComments = adminComments;
        this.fullfilled = fullfilled;
        this.registrationDate = registrationDate
    }

    static fromApi(dto = {}) {
        const phoneValue = dto.Phone ?? dto.phone ?? '';

        return new StudentDetails(
            dto.EnquiryId ?? dto.enquiryId ?? '',
            dto.Name ?? dto.name ?? '',
            dto.Email ?? dto.email ?? '',
            phoneValue !== '' ? String(phoneValue) : '',
            dto.Location ?? dto.location ?? '',
            dto.Message ?? dto.message ?? '',
            dto.AdminComments ?? dto.adminComments ?? '',
            Boolean(dto.Fullfilled ?? dto.fullfilled),
            dto.RegistrationDate ?? dto.registrationDate ?? '-'
        );
    }
}

export const mapStudentDetailsList = (items = []) => items.map((item) => StudentDetails.fromApi(item));
