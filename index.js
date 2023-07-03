// Init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}))

app.get("/api/:date?", (req, res) => {
  let inputDate = req.params.date;
  if (!isNaN(inputDate)) inputDate = Number(inputDate); // When receiving unix timestamp

  let dateObj;
  if (inputDate === undefined) {
    dateObj = new Date()
  } else {
    dateObj = new Date(inputDate);
  }

  if(isNaN(dateObj.getTime())) { // Invalid date
    res.json({
      error: "Invalid Date",
    })
  } else { // Valid date
    let unixTime = dateObj.getTime();
    let utcTime = dateObj.toUTCString();
    res.json({
      unix: unixTime,
      utc: utcTime,
    })
  }
})



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
