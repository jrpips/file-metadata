'use strict';

var express = require('express');
var cors = require('cors');
const multer=require('multer');

// require and use "multer"...

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

const upload = multer({ storage: multer.memoryStorage() })

app.post('/api/fileanalyse', upload.single('upfile'), [
  // validation ...
], (req, res) => {
  if(!req.file) res.send("Error");

  else{
      res.json({"name":req.file.originalname,"size":req.file.size})
  }
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
