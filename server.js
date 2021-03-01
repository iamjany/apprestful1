// membuat variabel untuk memanggil package yang sudah diinstall.
const  express = require('express');
const bodyParser= require('body-parser');
// app adlah variabel/ cara memanggil express secara global
const app = express();

// parse application/json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Memangil
app.listen(3000, () => {
    console.log(`Server started on port`);
});

// mmembuat progra

