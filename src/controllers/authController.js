// authController.js

import fetch from 'node-fetch';

const clientId = '1237106563727101952';
const clientSecret = 'cOXwMUjNe3pyyDFwMdTc8GPoiLkRJ1HU';

const exchangeCodeForToken = async (code) => {
    const tokenUrl = 'https://discord.com/api/v9/oauth2/token';
    const params = new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: 'http://localhost:3000/callback', // Your redirect URI
        scope: 'identify', // Request basic user information
    });

    const response = await fetch(tokenUrl, {
        method: 'POST',
        body: params,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    });

    if (!response.ok) {
        throw new Error(`Error status code: ${response.status}`);
    }

    const data = await response.json();
    return data.access_token;
};

export default { exchangeCodeForToken }; // Export the function


const fetchUser = async (accessToken) => {
    const userUrl = 'https://discord.com/api/v9/users/@me'; // Fetch the authenticated user's info
    const response = await fetch(userUrl, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    if (!response.ok) {
        throw new Error(`Error status code: ${response.status}`);
    }

    const userData = await response.json();
    return userData;
};

// Usage example
try {
    const user = await fetchUser(accessToken);
    console.log('User data:', user);
} catch (error) {
    console.error('Error fetching user data:', error.message);
}
