const ImageKit = require("@imagekit/nodejs")

const imagekit = new ImageKit({
    privateKey : "private_KOSOkR/M04NBbE/F9wPzab4fAr0="
})

async function uploadFile(buffer) {
    const result = await imagekit.files.upload({
        file: buffer.toString("base64"),
        fileName: "image.png"
    })
    
}
module.exports = uploadFile;