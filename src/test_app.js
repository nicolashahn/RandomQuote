/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var http = require('http');
var https = require('https');

/*
main.on('click', 'up', function(e) {
  var menu = new UI.Menu({
    sections: [{
      items: [{
        title: 'Pebble.js',
        icon: 'images/menu_icon.png',
        subtitle: 'Can do Menus'
      }, {
        title: 'Second Item',
        subtitle: 'Subtitle Text'
      }, {
        title: 'Third Item',
      }, {
        title: 'Fourth Item',
      }]
    }]
  });
  menu.on('select', function(e) {
    console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
    console.log('The item is titled "' + e.item.title + '"');
  });
  menu.show();
});
*/

function getQuote(e) {
  var options = {
    host: 'andruxnet-random-famous-quotes.p.mashape.com',
    // port: 80,
    path: '/?cat=movies',
    method: 'POST',
    headers: {
      "X-Mashape-Key": "d3efyiXfa1mshirwLZ34ztyor1JVp11jpGxjsnuIyAs4n8SHp5",
      "Content-Type": "application/x-www-form-urlencoded",
      "Accept": "application/json"
    }
  };

  var req = https.get(options, function(res) {
	console.log('STATUS: ' + res.statusCode);
	console.log('HEADERS: ' + JSON.stringify(res.headers));

	// Buffer the body entirely for processing as a whole.
	var bodyChunks = [];
	res.on('data', function(chunk) {
	  // You can process streamed parts here...
	  bodyChunks.push(chunk);
	}).on('end', function() {
	  var body = Buffer.concat(bodyChunks);
	  console.log('BODY: ' + body);
	  // ...and/or process the entire body here.
	})
  });

  req.on('error', function(e) {
	console.log('ERROR: ' + e.message);
  });


  /*
  unirest.post("https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies")
  .header("X-Mashape-Key", "d3efyiXfa1mshirwLZ34ztyor1JVp11jpGxjsnuIyAs4n8SHp5")
  .header("Content-Type", "application/x-www-form-urlencoded")
  .header("Accept", "application/json")
  .end(function (result) {
    console.log(result.status, result.headers, result.body);
    var quotePage = new UI.Card({
      title: 'Random Quote',
      body: result.quote + '\n -' + result.author,
      scrollable: true
    });
    quotePage.show();
  });
  */
  /*
  var wind = new UI.Window({
    backgroundColor: 'black'
  });
  var radial = new UI.Radial({
    size: new Vector2(140, 140),
    angle: 0,
    angle2: 300,
    radius: 20,
    backgroundColor: 'cyan',
    borderColor: 'celeste',
    borderWidth: 1,
  });
  var textfield = new UI.Text({
    size: new Vector2(140, 60),
    font: 'gothic-24-bold',
    text: 'Dynamic\nWindow',
    textAlign: 'center'
  });
  var windSize = wind.size();
  // Center the radial in the window
  var radialPos = radial.position()
      .addSelf(windSize)
      .subSelf(radial.size())
      .multiplyScalar(0.5);
  radial.position(radialPos);
  // Center the textfield in the window
  var textfieldPos = textfield.position()
      .addSelf(windSize)
      .subSelf(textfield.size())
      .multiplyScalar(0.5);
  textfield.position(textfieldPos);
  wind.add(radial);
  wind.add(textfield);
  wind.show();
  */
}

// for testing
getQuote(null);

