var request = new XMLHttpRequest();

request.open('GET','https://json.geoiplookup.io/',true);

request.onload = function () {
  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    console.log(data['country_name']);
  } else {
    console.log('ERROR BOI');
  }
}

request.send();
