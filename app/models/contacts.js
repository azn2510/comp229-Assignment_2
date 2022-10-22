import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    name: String, 
    phone: String, 
    email: String,
}, {
    timestamps: true,
    collection: 'contact'
});

export default mongoose.model('Contact', ContactSchema);