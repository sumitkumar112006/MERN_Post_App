const imageKit = require('@imagekit/nodejs')

const imagekit = new imageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
})

async function uploadFile(buffer) {
    const result = await imagekit.files.upload({
        file: buffer.toString("base64"), // =>required to use this
        fileName:"image.png"
    })
    return result;
}

module.exports = uploadFile;