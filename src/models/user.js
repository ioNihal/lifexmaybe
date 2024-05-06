import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    // Other user-related fields (e.g., profile picture, role, etc.)
});

const User = model('User', userSchema);

export default User;