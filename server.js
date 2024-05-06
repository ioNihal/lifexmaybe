// server.js
import express from 'express';
const app = express();
const port = process.env.PORT || 5500; // Use your desired port

// Redirect to Discord OAuth2 URL
function authenticateUser() {
app.get('/auth', (req, res) => {
    const clientId = '1237106563727101952'; // Replace with your actual client ID
    const redirectUri = 'http://localhost:3000/src/views/success.html'; // Your callback URL
    res.redirect(`https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=identify`);
});

// Callback route after user authorizes
app.get('/callback', (req, res) => {
    const code = req.query.code; // Authorization code received from Discord
    // Exchange the code for an access token (you'll need to implement this)
    // Once you have the access token, you can fetch user data from Discord API
    // and verify the user's identity.
    // Save the user's IP address and Discord username in your whitelist.
    // Redirect to a success page or wherever you want.
    res.send('Authentication successful!'); // Example response
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

app.set('trust proxy', true);
}