
// Import the necessary modules
import { appendFile } from 'fs';
import { join } from 'path';

// Create a logging function
function log(message) {
    const logFilePath = join(__dirname, 'logs', 'app.log'); // Change the path as needed
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;

    // Append the log message to the log file
    appendFile(logFilePath, logMessage, (err) => {
        if (err) {
            console.error('Error writing to log file:', err);
        }
    });
}

// Example usage
log('Application started');
log('User authenticated');

// Export the log function
export default log;
