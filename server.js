const express = require('express'),
      multer = require('multer');

const app = express();
const upload = multer();

app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', (req, res) => res.sendFile(process.cwd() + '/views/index.html'));

app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  if(!req.file) {
    return res.send('No file was chosen');
  } else {
    res.json({
      "name": req.file.originalname,
      "type": req.file.mimetype,
      "size": req.file.size
    });
  }
});

app.listen(3000, () => console.log('App is listening on port 3000'));