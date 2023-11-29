const weather =()=>{
    let city=sessionStorage.getItem("details");
console.log(city)
async function getData() {
const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=85bdc3279976a32366473f93bef1784b&units=metric`);
let result = response.json();

 result.then (jsonData=>document.getElementById("temp").innerHTML=jsonData.main.temp +"°C")
 result.then (jsonData=>document.getElementById("city").innerHTML=jsonData.name )
 result.then(jsonData=>document.getElementById("humidity").innerHTML=jsonData.main.humidity +"%")
 result.then(jsonData=>document.getElementById("wind").innerHTML=jsonData.wind.speed+"km/h")
 result.then(jsonData=>document.getElementById("text").innerHTML=jsonData.weather[0].main)


const weatherIcon= document.querySelector(".weather-icon")

result.then (jsonData=>{let hello =jsonData.weather[0].main ;
    console.log(hello)
    if(hello =="Clouds"){
        weatherIcon.src="./clouds.png";
        
        console.log("jjjjjjjjjjjjjjjjj")
        }
    
    else if(hello=="Clear"){
        weatherIcon.src="./clear.png";
    }
    else if(hello=="Rain"){
        weatherIcon.src="./rain.png";
    }
    else if(hello=="Drizzle"){
        weatherIcon.src="./drizzle.png";
    }
    else if(hello=="Mist"){
        weatherIcon.src="./mist.png";
    }
})
}
getData()
}
weather()

// banglore


 const  handleCity=async (cityname)=>{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=85bdc3279976a32366473f93bef1784b&units=metric`);
    let result = response.json();

   console.log(result)
   result.then (jsonData=>document.getElementById("temperature").innerHTML=jsonData.main.temp+"°C")
   result.then (jsonData=>document.getElementById("description").innerHTML=jsonData.weather[0].description)
   const imgba= document.querySelector(".imgb")

   result.then (jsonData=>{let getb =jsonData.weather[0].main ;
    console.log(getb)
    if(getb =="Clouds"){
        imgba.src="./clouds.png";
        
        
        }
    
    else if(getb=="Clear"){
        imgba.src="./clear.png";
    }
    else if(getb=="Rain"){
        imgba.src="./rain.png";
    }
    else if(getb=="Drizzle"){
        imgba.src="./drizzle.png";
    }
    else if(getb=="Mist"){
        imgba.src="./mist.png";
    }
})

}
handleCity("bengaluru")
// mysore
const  handlemysuru=async (cityname)=>{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=85bdc3279976a32366473f93bef1784b&units=metric`);
    let result = response.json();
   console.log(result)
   result.then (jsonData=>document.getElementById("temperaturem").innerHTML=jsonData.main.temp+"°C")
   result.then (jsonData=>document.getElementById("descriptionm").innerHTML=jsonData.weather[0].description)
   const imgmy= document.querySelector(".imgm")

   result.then (jsonData=>{let getm =jsonData.weather[0].main ;
    console.log(getm)
    if(getm =="Clouds"){
        imgmy.src="./clouds.png";
        
        
        }
    
    else if(getm=="Clear"){
        imgmy.src="./clear.png";
    }
    else if(getm=="Rain"){
        imgmy.src="./rain.png";
    }
    else if(getm=="Drizzle"){
        imgmy.src="./drizzle.png";
    }
    else if(getm=="Mist"){
        imgmy.src="./mist.png";
    }
})

}
handlemysuru("mysuru")

// manglore
const  handlemanglore=async (cityname)=>{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=85bdc3279976a32366473f93bef1784b&units=metric`);
    let result = response.json();
   console.log(result)
   result.then (jsonData=>document.getElementById("temperaturema").innerHTML=jsonData.main.temp+"°C")
   result.then (jsonData=>document.getElementById("descriptionma").innerHTML=jsonData.weather[0].description)
   const imgma= document.querySelector(".imgmn")

   result.then (jsonData=>{let getma=jsonData.weather[0].main ;
    console.log(getma)
    if(getma=="Clouds"){
        imgma.src="./clouds.png";
    }
    
    else if(getma=="Clear"){
        imgma.src="./clear.png";
    }
    else if(getma=="Rain"){
        imgma.src="./rain.png";
    }
    else if(getma=="Drizzle"){
        imgma.src="./drizzle.png";
    }
    else if(getma=="Mist"){
        imgma.src="./mist.png";
    }
})

}
handlemanglore("Mangalore")
// tumakuru
const  handletumakuru=async (cityname)=>{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=85bdc3279976a32366473f93bef1784b&units=metric`);
    let result = response.json();
   console.log(result)
   result.then (jsonData=>document.getElementById("temperaturet").innerHTML=jsonData.main.temp+"°C")
   result.then (jsonData=>document.getElementById("descriptiont").innerHTML=jsonData.weather[0].description)
   const imgtu= document.querySelector(".imgt")

   result.then (jsonData=>{let gett=jsonData.weather[0].main ;
    console.log(gett)
    if(gett=="Clouds"){
        imgtu.src="./clouds.png";
    }
    
    else if(gett=="Clear"){
        imgtu.src="./clear.png";
    }
    else if(gett=="Rain"){
        imgtu.src="./rain.png";
    }
    else if(gett=="Drizzle"){
        imgtu.src="./drizzle.png";
    }
    else if(gett=="Mist"){
        imgtu.src="./mist.png";
    }
})
}
handletumakuru("tumakuru");
// hampi
const  handlehampi=async (cityname)=>{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=85bdc3279976a32366473f93bef1784b&units=metric`);
    let result = response.json();
   console.log(result)
   result.then (jsonData=>document.getElementById("temperatureh").innerHTML=jsonData.main.temp+"°C")
   result.then (jsonData=>document.getElementById("descriptionh").innerHTML=jsonData.weather[0].description)
   const imgha= document.querySelector(".imgh")

   result.then (jsonData=>{let geth=jsonData.weather[0].main ;
    console.log(geth)
    if(geth=="Clouds"){
        imgha.src="./clouds.png";
    }
    
    else if(geth=="Clear"){
        imgha.src="./clear.png";
    }
    else if(geth=="Rain"){
        imgha.src="./rain.png";
    }
    else if(geth=="Drizzle"){
        imgha.src="./drizzle.png";
    }
    else if(geth=="Mist"){
        imgha.src="./mist.png";
    }
})
}
handlehampi("hampi")
// chikmangalur
const  handleChikmagalur=async (cityname)=>{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=85bdc3279976a32366473f93bef1784b&units=metric`);
    let result = response.json();
   console.log(result)
   result.then (jsonData=>document.getElementById("temperaturec").innerHTML=jsonData.main.temp+"°C")
   result.then (jsonData=>document.getElementById("descriptionc").innerHTML=jsonData.weather[0].description)
   const imgcm= document.querySelector(".imgc")

   result.then (jsonData=>{let getc=jsonData.weather[0].main ;
    console.log(getc)
    if(getc=="Clouds"){
        imgcm.src="./clouds.png";
    }
    
    else if(getc=="Clear"){
        imgcm.src="./clear.png";
    }
    else if(getc=="Rain"){
        imgcm.src="./rain.png";
    }
    else if(getc=="Drizzle"){
        imgcm.src="./drizzle.png";
    }
    else if(getc=="Mist"){
        imgcm.src="./mist.png";
    }
})

}
handleChikmagalur("Chikmagalur")

// search
let hello=document.getElementById("hello");
let FormSubmit = () =>{
    console.log(hello.value)

    let save=sessionStorage.setItem("details",hello.value);
    window.location.href="./weather.html";


}

let getCity=(cityname)=>{
    console.log(cityname)
  sessionStorage.setItem("details",cityname)
  window.location.href="./weather.html";
  weather();
  



}

const handleSubmit=()=>{
    let valid = document.getElementById("valid");
    if (hello.length >2 && hello.length <50) {  
        valid.removeAttribute("disabled", " ") 
    }
    else {    
        valid.setAttribute("disabled", " ")
      }
}

const  handleCit=async (city)=>{
    window.location.href="./search.html";
    
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=85bdc3279976a32366473f93bef1784b&units=metric`);
        let result = response.json();
        
         result.then (jsonData=>document.getElementById("temp").innerHTML=jsonData.main.temp +"°C")
         result.then (jsonData=>document.getElementById("city").innerHTML=jsonData.name )
         result.then(jsonData=>document.getElementById("humidity").innerHTML=jsonData.main.humidity +"%")
         result.then(jsonData=>document.getElementById("wind").innerHTML=jsonData.wind.speed+"km/h")
         result.then(jsonData=>document.getElementById("text").innerHTML=jsonData.weather[0].main)
        
        
        const weatherIcon= document.querySelector(".weather-icon")
        
        result.then (jsonData=>{let hello =jsonData.weather[0].main ;
            console.log(hello)
            if(hello =="Clouds"){
                weatherIcon.src="./clouds.png";
                
                console.log("jjjjjjjjjjjjjjjjj")
                }
            
            else if(hello=="Clear"){
                weatherIcon.src="./clear.png";
            }
            else if(hello=="Rain"){
                weatherIcon.src="./rain.png";
            }
            else if(hello=="Drizzle"){
                weatherIcon.src="./drizzle.png";
            }
            else if(hello=="Mist"){
                weatherIcon.src="./mist.png";
            }
        })
        }











const d = new Date();
console.log(d)
document.getElementById("date").innerHTML=new Date();