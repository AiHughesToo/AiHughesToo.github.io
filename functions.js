
    var city ="";
function google_Complete(gResult){
 console.log(gResult.results);
 var lat = (gResult.results[0].geometry.location.lat);
 var lng = (gResult.results[0].geometry.location.lng);
 console.log(lng);
 console.log(lat);
  city = (gResult.results[0].formatted_address);
 var result = {
        url: "https://api.darksky.net/forecast/4c175e0918482d7e59b0b9e748006844/" + lat + "," + lng,
        dataType: "jsonp",
        success: darksky_Complete
        };

       $.ajax(result);
};

function darksky_Complete(result) {
    console.log(result.currently.summary);
    console.log(result.currently.temperature);
    console.log(result.currently.precipProbability);
    console.log(result.daily.summary);
    console.log(city);
   // $("#mDhold").css({'background-image' : 'url(https://raw.githubusercontent.com/AiHughesToo/AiHughesToo.github.io/master/weather/25334-drops-845884.jpeg)'});
switch (result.currently.icon){
    case "clear-day":
    $("#mDhold").css({'background-image' : 'url(https://raw.githubusercontent.com/AiHughesToo/AiHughesToo.github.io/master/weather/1.jpg)'});
    break;
    case "clear-night":
    $("#mDhold").css({'background-image' : 'url(https://raw.githubusercontent.com/AiHughesToo/AiHughesToo.github.io/master/weather/140303123004-dark-sky---westhavelland-horizontal-large-gallery.jpg)'});
    break;
    case "rain":
    $("#mDhold").css({'background-image' : 'url(https://raw.githubusercontent.com/AiHughesToo/AiHughesToo.github.io/master/weather/25334-drops-845884.jpeg)'});
    break;
    case "snow":
    $("#mDhold").css({'background-image' : 'url(https://raw.githubusercontent.com/AiHughesToo/AiHughesToo.github.io/master/weather/1654840-bigthumbnail.jpg)'});
    break;
    case "sleet":
    $("#mDhold").css({'background-image' : 'url(https://raw.githubusercontent.com/AiHughesToo/AiHughesToo.github.io/master/weather/Falling_snowflakes_in_England.JPG)'});
    break;
     case "wind":
    $("#mDhold").css({'background-image' : 'url(https://raw.githubusercontent.com/AiHughesToo/AiHughesToo.github.io/master/weather/25334-drops-845884.jpeg)'});
    break;
     case "fog":
    $("#mDhold").css({'background-image' : 'url(https://raw.githubusercontent.com/AiHughesToo/AiHughesToo.github.io/master/weather/183917301.jpg)'});
    break;
     case "cloudy":
    $("#mDhold").css({'background-image' : 'url(https://raw.githubusercontent.com/AiHughesToo/AiHughesToo.github.io/master/weather/25334-drops-845884.jpeg)'});
    break;
     case "partly-cloudy-night":
    $("#mDhold").css({'background-image' : 'url(https://raw.githubusercontent.com/AiHughesToo/AiHughesToo.github.io/master/weather/25334-drops-845884.jpeg)'});
    break;
     case "partly-cloudy-day":
    $("#mDhold").css({'background-image' : 'url(https://raw.githubusercontent.com/AiHughesToo/AiHughesToo.github.io/master/weather/643700-partly-cloudy-best-wallpaper.jpg)'});
    break;
    default: 
    $("#mDhold").css("background: #000000");
    break;
}
var wInfo = (result);
    var mDisplay = genMainDisplay(result);
    $("#card").append(mDisplay);
    dayCards(result);
   
};
function dayCards (result) {
console.log("I made it to dayCards");
var wDisplay = genWCards(result);
$("#wCard").append(wDisplay);

}

function genWCards(result){
console.log(result.daily.summary);
var day1 = result.daily.data[0]
var date1 = new Date(day1.time * 1000);
var date1a = date1.toString();
date1a = date1a.substr(0,16);
var day2 = result.daily.data[1]
var date2 = new Date(day2.time * 1000);
var date2a =date2.toString();
date2a = date2a.substr(0,16);
var day3 = result.daily.data[2]
var date3 = new Date(day3.time * 1000);
var date3a =date3.toString();
date3a = date3a.substr(0,16);
var day4 = result.daily.data[3]
var date4 = new Date(day4.time * 1000);
var date4a =date4.toString();
date4a = date4a.substr(0,16);
var day5 = result.daily.data[4]
var date5 = new Date(day5.time * 1000);
var date5a =date5.toString();
date5a = date5a.substr(0,16);
var day6 = result.daily.data[5]
var date6 = new Date(day6.time * 1000);
var date6a =date6.toString();
date6a = date6a.substr(0,16);
var wDisplay = $("#wDisplay").html();
wDisplay = wDisplay.replace("@@weeksum@@", result.daily.summary);
wDisplay = wDisplay.replace("@@date1@@", date1a);
wDisplay = wDisplay.replace("@@hi1@@",result.daily.data[0].temperatureMax);
wDisplay = wDisplay.replace("@@low1@@",result.daily.data[0].temperatureMin);
wDisplay = wDisplay.replace("@@sum1@@",result.daily.data[0].summary);
wDisplay = wDisplay.replace("@@rain1@@",result.daily.data[0].precipProbability);
wDisplay = wDisplay.replace("@@weeksum@@", result.daily.summary);
wDisplay = wDisplay.replace("@@date2@@", date2a);
wDisplay = wDisplay.replace("@@hi2@@",result.daily.data[1].temperatureMax);
wDisplay = wDisplay.replace("@@low2@@",result.daily.data[1].temperatureMin);
wDisplay = wDisplay.replace("@@sum2@@",result.daily.data[1].summary);
wDisplay = wDisplay.replace("@@rain2@@",result.daily.data[1].precipProbability);
wDisplay = wDisplay.replace("@@date3@@", date3a);
wDisplay = wDisplay.replace("@@hi3@@",result.daily.data[2].temperatureMax);
wDisplay = wDisplay.replace("@@low3@@",result.daily.data[2].temperatureMin);
wDisplay = wDisplay.replace("@@sum3@@",result.daily.data[2].summary);
wDisplay = wDisplay.replace("@@rain3@@",result.daily.data[2].precipProbability);
wDisplay = wDisplay.replace("@@date4@@", date4a);
wDisplay = wDisplay.replace("@@hi4@@",result.daily.data[3].temperatureMax);
wDisplay = wDisplay.replace("@@low4@@",result.daily.data[3].temperatureMin);
wDisplay = wDisplay.replace("@@sum4@@",result.daily.data[3].summary);
wDisplay = wDisplay.replace("@@rain4@@",result.daily.data[3].precipProbability);
wDisplay = wDisplay.replace("@@date5@@", date5a);
wDisplay = wDisplay.replace("@@hi5@@",result.daily.data[4].temperatureMax);
wDisplay = wDisplay.replace("@@low5@@",result.daily.data[4].temperatureMin);
wDisplay = wDisplay.replace("@@sum5@@",result.daily.data[4].summary);
wDisplay = wDisplay.replace("@@rain5@@",result.daily.data[4].precipProbability);
wDisplay = wDisplay.replace("@@date6@@", date6a);
wDisplay = wDisplay.replace("@@hi6@@",result.daily.data[5].temperatureMax);
wDisplay = wDisplay.replace("@@low6@@",result.daily.data[5].temperatureMin);
wDisplay = wDisplay.replace("@@sum6@@",result.daily.data[5].summary);
wDisplay = wDisplay.replace("@@rain6@@",result.daily.data[5].precipProbability);

return wDisplay;
}

function startItOff(userInput){
 $("#welcome").hide();
  var zip = userInput;
    if (zip != 0){
  var gResult = {
        url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + zip + "&key=AIzaSyDo5sAWg49d2_TnmNXSLWcH4FyurjforJg",
        dataType: "json",
        success: google_Complete
    };
    $.ajax(gResult);
    
    } else {
        alert("I need a zip code or city and state to find the weather.");
    }
};

function genMainDisplay(result){
    
    var mDtemplate = $("#mainDisplay").html();
    mDtemplate = mDtemplate.replace("@@Temp@@", result.currently.temperature);
    mDtemplate = mDtemplate.replace("@@rain@@", result.currently.precipProbability);
    mDtemplate = mDtemplate.replace("@@hi@@", result.currently.humidity);
    mDtemplate = mDtemplate.replace("@@low@@", result.currently.summary);
    mDtemplate = mDtemplate.replace("@@city@@", city);

return mDtemplate;

}




