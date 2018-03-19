//requires
let express = require('express');
let app = express();
let bodyParser = require('body-parser');

//uses
app.use(bodyParser.urlencoded({ extended: true }));
//look in server/public first
app.use(express.static('server/public'));

//variables
let PORT = 4567

app.listen(PORT, function() {
    console.log("server is running on port: ", PORT);
}) //end spin up server