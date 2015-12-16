var express           = require('express'),
    app               = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/client/views/index.html');
});

app.get('/residence', function (req, res) {
  res.sendFile(__dirname + '/client/views/residenceView.html');
});

app.get('/residence.html', function (req, res) {
  res.sendFile(__dirname + '/walkthroughs/residence/residence.html');
});

app.get('/office', function (req, res) {
  res.sendFile(__dirname + '/client/views/officeView.html');
});

app.get('/office.html', function (req, res) {
  res.sendFile(__dirname + '/walkthroughs/office/office.html');
});

app.use("/json2.js", express.static(__dirname + "/walkthroughs/residence/json2.js"));
app.use("/jStorage.js", express.static(__dirname + "/walkthroughs/residence/jStorage.js"));
app.use("/moz_binarystring.js", express.static(__dirname + "/walkthroughs/residence/moz_binarystring.js"));
app.use("/U_Sample_TH_Web.data", express.static(__dirname + "/walkthroughs/residence/U_Sample_TH_Web.data"));
app.use("/U_Sample_TH_Web.data.js", express.static(__dirname + "/walkthroughs/residence/U_Sample_TH_Web.data.js"));
app.use("/UE4Game-HTML5-Shipping.js", express.static(__dirname + "/walkthroughs/residence/UE4Game-HTML5-Shipping.js"));
app.use("/UE4Game-HTML5-Shipping.js.mem", express.static(__dirname + "/walkthroughs/residence/UE4Game-HTML5-Shipping.js.mem"));
app.use("/UE4Game-HTML5-Shipping.js.symbols", express.static(__dirname + "/walkthroughs/residence/UE4Game-HTML5-Shipping.js.symbols"));

app.use("/json2.js", express.static(__dirname + "/walkthroughs/office/json2.js"));
app.use("/jStorage.js", express.static(__dirname + "/walkthroughs/office/jStorage.js"));
app.use("/moz_binarystring.js", express.static(__dirname + "/walkthroughs/office/moz_binarystring.js"));
app.use("/SBG_NewOffice_Web.data", express.static(__dirname + "/walkthroughs/office/SBG_NewOffice_Web.data"));
app.use("/SBG_NewOffice_Web.data.js", express.static(__dirname + "/walkthroughs/office/SBG_NewOffice_Web.data.js"));
app.use("/UE4Game-HTML5-Shipping.js", express.static(__dirname + "/walkthroughs/office/UE4Game-HTML5-Shipping.js"));
app.use("/UE4Game-HTML5-Shipping.js.mem", express.static(__dirname + "/walkthroughs/office/UE4Game-HTML5-Shipping.js.mem"));
app.use("/UE4Game-HTML5-Shipping.js.symbols", express.static(__dirname + "/walkthroughs/office/UE4Game-HTML5-Shipping.js.symbols"));

app.listen(3001, function() {
  console.log('I\'m Listening...');
})