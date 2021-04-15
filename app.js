// document.getElementById("card_322")
var months    = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var now = new Date();
console.log(months[now.getMonth()])
var date_txt = `${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;

var w = document.querySelectorAll("#card_2 div div div p small")[0];
var x = document.querySelector("#card_2 div div div h1");
var y = document.querySelectorAll("#card_2 div div div p small")[1];
var z = document.querySelector("#card_2 div div div h1 i");
var weather_description = document.querySelectorAll("#card_2 div div div p small")[3];
var icn = "";

w.innerHTML = date_txt;

const api_key = "";

fetch(`http://api.openweathermap.org/data/2.5/weather?id=3488020&appid=${api_key}`)
    .then(res => res.json())
    .then(res_json => {
        var temp = res_json["main"]["temp"] - 273;
        temp = temp.toFixed(0);
        var temp_fl =res_json["main"]["feels_like"] - 273;
        temp_fl = temp_fl.toFixed(0);

        var weather = res_json["weather"][0]["id"]
        
        x.innerHTML = `${temp} &#8451`;
        y.innerHTML = `Feels like ${temp_fl} &#8451`;
        weather_description.innerHTML = `${res_json["weather"][0]["description"]}`

        switch(weather){
            case 500:
                icn = "bi-cloud-rain";
            break;
            case 501:
                icn = "bi-cloud-rain";
            break;
            case 502:
                icn = "bi-cloud-rain-heavy";
            break;
            case 503:
                icn = "bi-cloud-rain-heavy-fill";
            break;
            case 504:
                icn = "bi-cloud-rain-heavy-fill";
            break;
            case 800:
                icn = "bi-sun";
            break;
            case 801:
                icn = "bi-cloud-sun";
            break;
            case 802:
                icn = "bi-clouds";
            break;
            case 803:
                icn = "bi-clouds-fill";
            break;
            default:
                icn = "bi-emoji-neutral";
        }
        z.className = `bi ${icn}`;
        console.log(res_json);
    });

    // z.className = "bi bi-sun";

// console.log(x)
// 77be55a810a45d9b2d92b649d85cb836
//"id":3488020