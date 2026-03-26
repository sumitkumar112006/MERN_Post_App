const express = require('express');
const multer = require('multer');
const uploadFile = require('./services/storage.service')
const postModel = require('./models/post.model')
const cors = require('cors')
 
const app = express();
app.use(express.json());

const allowedOrigins = [
    'http://localhost:5173',
    'https://sumitkumar112006.github.io'
]

app.use(cors({
    origin: (origin, cb) => {
        if (!origin || allowedOrigins.includes(origin)) return cb(null, true)
        return cb(new Error('Not allowed by CORS'))
    } 
}))



const upload = multer({ storage: multer.memoryStorage() })

const createPost = async (req, res) => {
    if (!req.file) {
        return res.status(400).json({
            message: 'Image file is required.'
        })
    }

    const result = await uploadFile(req.file.buffer)

    const post = await postModel.create({
        image: result.url,
        caption: req.body.caption
    })

    return res.status(201).json({
        message: "Post created",
        post
    })
}

app.post('/create-post', upload.single("image"), createPost)
app.post('/posts', upload.single("image"), createPost)

app.get('/posts',async (req, res) => {
    const post = await postModel.find()

    res.status(200).json({
        message: 'Data successfully recieved.',
        post
    })
})


module.exports = app;
