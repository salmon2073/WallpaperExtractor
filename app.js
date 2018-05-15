const config = require('./config.json')
const dir = config.dir
const outputPath = config.output

const fs = require('fs')
const jimp = require('jimp')

fs.readdir(dir, (err, files) => {
    if (err) throw err
    files.forEach((file) => {
        imagePath = dir + '\\' + file
        jimp.read(imagePath)
            .then((image) => {
                if (image.bitmap.width < 500 && image.bitmap.height < 500) return
                image.write(outputPath + '\\' + file + '.' + image.getExtension())
            })
    })
});