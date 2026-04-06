const ImageKit = require("@imagekit/nodejs")

const imagekit = new ImageKit({
    privateKey : process.env.Imgae_Private_Key
})

async function uploadFile(buffer) {
    const result = await imagekit.files.upload({
        file: buffer.toString("base64"),
        fileName: "image.png"
    })
    return result;
    
}
module.exports = uploadFile;