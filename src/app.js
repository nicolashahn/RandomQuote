/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var Vector2 = require('vector2');
var unirest = require('unirest');

var main = new UI.Card({
  title: 'Random Quote',
  icon: 'images/menu_icon.png',
  // subtitle: ...
  body: 'Press any button to get a new quote.',
  subtitleColor: 'indigo', // Named colors
  bodyColor: '#9a0036' // Hex colors
});

main.show();
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
});

main.on('click', 'select', getQuote);
main.on('click', 'up', getQuote);
main.on('click', 'down', getQuote);

main.on('click', 'back', function(e) {
  main.show();
});
