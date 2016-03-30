var api_key = "7b055a1cadade1ea49b7984ebefb140b"
var city = "Miami"
var city2 = "Caracas"
var temp = [];
var temp_max;
var temp_min;
var temp2 = [];
var temp_max2;
var temp_min2;

function setup (){
  createCanvas (800, 800);
  
  var url = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=imperial&APPID="+api_key;
  loadJSON (url, gotWeather);
  
  var url2 = "http://api.openweathermap.org/data/2.5/weather?q="+city2+"&units=imperial&APPID="+api_key;
  loadJSON (url2, gotWeather2);
}

function draw (){ 
  
  fill (255, 204, 0);
  ellipse (600, 200,temp_max*5, temp_min*5);
  textSize (20);
  fill (0);
  text ("MIAMI",600,200);
  textAlign(CENTER, CENTER);
  if (temp) {
    text (temp,600,250);
  }
  
  fill(255, 102, 204);
  ellipse (250, 200, temp_max2*5, temp_min2*5);
  textSize (20);
  fill (0);
  text ("CARACAS", 250,200);
  textAlign(CENTER, CENTER);
  if(temp2) {
    text (temp2, 250, 300);
  }
}

function gotWeather (weather) {
  console.log (weather);
  temp = weather.main.temp;
  temp_min = weather.main.temp_min;
  temp_max = weather.main.temp_max;
}

function gotWeather2 (weather2){
  console.log (weather2);
  temp2 = weather2.main.temp;
  temp_min2 = weather2.main.temp_min;
  temp_max2 = weather2.main.temp_max;
}
