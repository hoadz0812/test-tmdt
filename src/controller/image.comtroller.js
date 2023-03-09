
const path = require('path')

exports.getImage = (req, res) => {
    const uploadDir = path.join(__dirname, '../../', 'uploads/');
   
        
        res.sendFile(   uploadDir +  req.params.img);
    
}