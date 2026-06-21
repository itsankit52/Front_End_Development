
const userSchema = mongoose.Schema({
    username: String,
    name: String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    age: Number,
    password: {
        type: String,
        required: true
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId, ref: "post"
    }]
})

module.exports = mongoose.model('user', userSchema);