const mongoose = require("mongoose");

const publicationSchema = new mongoose.Schema({
    direction: String,
    course: String,
    semester: String,
    subject: String,
    typeP: {
        type: String,
        lowercase: true
    },
    date: Date,
    rating: {
        scale: {
            type: Number,
            default: 0
        },
        changes: {
            type: Array,
            default: []
        }
    },
    idUser: String,
    path: String,

});

exports.PublicationModel = mongoose.model("Publication", publicationSchema);
