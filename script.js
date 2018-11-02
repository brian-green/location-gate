var request = new XMLHttpRequest();

request.open('GET','https://json.geoiplookup.io/',true);

request.onload = function () {
  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    var location = data['country_name'];

    if (location != 'United States') {
      window.location = "https://booking.com";
    } else {
      console.log("It's the USA");
    }

  } else {
    console.log('NETWORK ERROR BOI');
  }
}

request.send();
