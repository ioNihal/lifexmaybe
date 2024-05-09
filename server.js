import express from 'express';
import axios from 'axios';
import qs from 'querystring';
import ejs from 'ejs';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url'; // Import fileURLToPath from the 'url' module
const __dirname = path.dirname(fileURLToPath(import.meta.url)); // Get the directory name using import.meta.url

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

let username;
let ipAddress;

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views')); // Set the views directory
app.set('view engine', 'ejs'); // Set EJS as the view engine

app.get('/launch', (req,res) => {
    res.redirect('/index.html');
});

// Redirect to Discord OAuth2 authorization URL
app.get('/authorize', (req, res) => {
    const clientId = CLIENT_ID;
    const redirectUri = 'http://localhost:3000/callback';
    res.redirect(`https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=identify`);
});

// Handle OAuth2 callback
app.get('/callback', async (req, res) => {
    try {
        const code = req.query.code;
        const clientId = CLIENT_ID;
        const clientSecret = CLIENT_SECRET;
        const redirectUri = 'http://localhost:3000/callback'; // Make sure this matches your Discord app settings

        // Exchange authorization code for access token
        const response = await axios.post('https://discord.com/api/oauth2/token', qs.stringify({
            client_id: clientId,
            client_secret: clientSecret,
            grant_type: 'authorization_code',
            code,
            redirect_uri: redirectUri,
        }), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });

        const accessToken = response.data.access_token;

        // Example: Get user information
        const userResponse = await axios.get('https://discord.com/api/users/@me', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        username = userResponse.data.username;
        ipAddress = req.ip.toString();
        
        res.render('index', { username, ipAddress }); // Render the index.ejs file with data
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).send('An error occurred.');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Exporting variables outside of the route handler
export { app, PORT , username , ipAddress}; 
