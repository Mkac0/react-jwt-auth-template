const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/users`;

const index = async () => {
    try {       // try...catch block to handle any errors that occur during the request
        const res = await fetch(BASE_URL, { // fetch() API to make the request
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        const data = await res.json();      // BASE_URL variable to build the URL for the request

        if (data.err) {     // If there is an err property on the data returned from the server
            throw new Error(data.err);
        }
                    // If there isn’t an err property, we’ll assume the request was successful
        return data     // Return the data from the function
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
}

export {
    index,          // Export the function
}