module.exports = router => {
    const imageController = require('../controller/image.comtroller')
    const multer = require('multer');
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'uploads')
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname)
        }
    });
    const upload = multer({ storage: storage });

    router.get('/api/image/:img', imageController.getImage)

    router.post('/api/upload', upload.single('image'), (req, res) => {
        res.send("Upload image success")
    })
}