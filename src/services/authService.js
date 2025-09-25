// Use the `VITE_BACK_END_SERVER_URL` environment variable to set the base URL.
// Note the `/auth` path added to the server URL that forms the base URL for
// all the requests in this service.
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/auth`;

const signUp = async (FormData) => {
    try {
        const res = await fetch(`${BASE_URL}/sign-up`, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(FormData),
        });
        const data = await res.json();

        if (data.err) {
            throw new Error(data.err);
        }

        if (data.token) {       // Store the token (data.token) in local storage with the key token
            localStorage.setItem('token', data.token);
            return JSON.parse(atob(data.token.split('.')[1])).payload; // Split the token into three parts using the . character
        }       // atob() - Decode this part of the token from base64 (an encoded - not encrypted - string) into human readable text
    // JSON.parse().payload - Parse the decoded payload into a JavaScript object and get the specific data we attached in the back-end - the user payload data

        throw new Error('Invalid responde from server');
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
}

export {
    signUp,
}