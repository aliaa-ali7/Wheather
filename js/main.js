let search = document.getElementById('search');

var allItem=[]

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let myDate=new Date()

 search.addEventListener('keyup',searchdisplay )
 async function getGeneral(location){
    var apiResponse= await fetch(`https://api.weatherapi.com/v1/forecast.json?key=db189c712aba471e9c1180421232702&q=${location}&days=3&aqi=no&alerts=no`)
    var finalResault =await apiResponse.json()
    console.log(finalResault)
    allItem=finalResault
    displayItem();
}  
getGeneral('cairo')
function searchdisplay(){
    getGeneral(search.value)
}




function displayItem() {
    var cartoona=``
   
        cartoona += `
        <div class="div1">
                <div class="day">
                    <p>${days[myDate.getDay()]}</p>
                    
                    <p>${myDate.getDate()+ monthNames[myDate.getMonth()]}</p>
                </div>
                <span class="">${allItem.location.name}</span>
                <div class="cloud d-flex justify-content-evenly">
                    <p class="degree">${allItem.forecast.forecastday[0].day.avgtemp_c}°C</p>
                <img src='https:${allItem.current.condition.icon}' alt="" class="h-50 w-25 py-3">
                </div>
                
                <p class=" px-4 blue">${allItem.forecast.forecastday[0].day.condition.text}</p>
                <div class="footer d-flex justify-content-evenly py-3  mx-auto">
                    <div class="one ">
                        <img src="./images/images4.png" alt="" >
                        <span>20%</span>
                    </div>
                    <div class="two">
                        <img src="./images/images5.png" alt="">
                        <span>18km/hr</span>
                    </div>
                    <div class="one">
                        <img src="./images/images6.png" alt="">
                        <span>East</span>
                    </div>
                    
                  
                </div>
            </div>

            <div class="div2 text-center">
                <div class="next-day text-center">
                    <p>${days[myDate.getDay()]}</p>
                </div>

                <img src="https:${allItem.forecast.forecastday[1].day.condition.icon}" alt="" class="pt-5">
                <p class="text-white fs-3 fw-bold">${allItem.forecast.forecastday[1].day.avgtemp_c}°C</p>
                <p class="text-white">${allItem.forecast.forecastday[1].day.mintemp_c}°C</p>
                <div class="blue">
                    <p>${allItem.forecast.forecastday[1].day.condition.text}</p>
                </div>
            </div>

            <div class="div3 text-center">
                <div class="next-next text-center">
                    <p>${days[myDate.getDay()]}</p>
                </div>
                <img src="https:${allItem.forecast.forecastday[2].day.condition.icon}" alt="" class="pt-5">
                <p class="text-white fs-3 fw-bold">${allItem.forecast.forecastday[2].day.avgtemp_c}°C</p>
                <p class="text-white">${allItem.forecast.forecastday[2].day.mintemp_c}°C</p>
                <div class="blue">
                    <p>${allItem.forecast.forecastday[2].day.condition.text}</p>

            </div>
        </div>
        `
        
    
    document.getElementById('dataShow').innerHTML =cartoona;
}







