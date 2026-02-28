import {ServerAPIUrl} from '../constants/ApplicationConstants.js';

export async function LoginUser(userLoginDto)
{
    const response = await fetch(ServerAPIUrl+"api/auth/login",{
        method:"POST",
        body:JSON.stringify(userLoginDto),
        headers:{
            "content-type":"application/json"
        }
    });

    const rawBody = await response.text();
    let data = {};

    if (rawBody) {
        try {
            data = JSON.parse(rawBody);
        } catch {
            data = {};
        }
    }

    return {
        ...data,
        status: data.status ?? data.Status ?? response.ok,
        message: data.message ?? data.Message ?? (!response.ok ? 'Login failed' : '')
    };
}