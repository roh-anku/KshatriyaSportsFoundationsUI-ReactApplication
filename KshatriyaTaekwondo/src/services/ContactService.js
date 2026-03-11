import {ServerAPIUrl} from '../constants/ApplicationConstants.js';

export async function SendEnquiry(enquiryRequstDto)
{
    let response;

    try {
        response = await fetch("https://localhost:7002/"+"api/contact/SendEnquiry",{
            method:"POST",
            body:JSON.stringify(enquiryRequstDto),
            headers:{
                "content-type":"application/json"
            }
        });
    } catch {
        throw new Error('Unable to reach server. Please check your internet connection and try again.');
    }

    const rawBody = await response.text();
    let data = {};

    if (rawBody) {
        try {
            data = JSON.parse(rawBody);
        } catch {
            data = {};
        }
    }

    if (!response.ok) {
        const errorMessage = data.message
            ?? data.Message
            ?? `SendEnquiry failed with status ${response.status}`;
        throw new Error(errorMessage);
    }

    return {
        ...data,
        status: data.status ?? data.Status ?? response.ok,
        message: data.message ?? data.Message ?? 'Enquiry sent successfully.'
    };
}