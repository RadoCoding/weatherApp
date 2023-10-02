const weather = document.querySelector('.weather')
const temperature = document.querySelector('.temperature')
const wind =document.querySelector('.wind')
const input = document.querySelector('.city')
const btn = document.querySelector('.btn')
const cityName = document.querySelector('.cityName')
const image = document.querySelector('.image')
const warning = document.querySelector('.warning')




const API_LINK = 'https://api.openweathermap.org/data/2.5/weather?q='
const API_KEY = '&appid=325eb9dab993fdce27df8d8d70f6769c'
const API_UNITS = '&units=metric'


const showWeather = ()=>{
    const city = input.value || 'Warszawa'
    const URL = API_LINK + city + API_KEY + API_UNITS
    axios
    .get(URL)
    .then(res => {
        console.log(res.data);
        const weatherCity = res.data.weather[0].main
        const temp = res.data.main.temp

        const windSpeed = res.data.wind.speed * 3.60
        weather.innerHTML = weatherCity
        temperature.innerHTML = Math.floor(temp) + ' ' + '℃'
        wind.innerHTML = Math.floor(windSpeed) +  ' ' +'km/h'
        cityName.innerHTML = `City:  ${res.data.name}`
        warning.innerHTML = ' '
        console.log(res.data.weather[0]);
        if(res.data.weather[0].id >= 200 && res.data.weather[0].id <= 232){
            image.setAttribute('src','./img/11d.png')
        } else if(res.data.weather[0].id >= 300 && res.data.weather[0].id <= 321){
            image.setAttribute('src','./img/09d.png')

        }else if(res.data.weather[0].id >= 500 && res.data.weather[0].id <= 504){
            image.setAttribute('src','./img/10d.png')

        }else if(res.data.weather[0].id >= 511 && res.data.weather[0].id <= 511){
            image.setAttribute('src','./img/13d.png')

        }else if(res.data.weather[0].id >= 520 && res.data.weather[0].id <= 531){
            image.setAttribute('src','./img/09d.png')

        }else if(res.data.weather[0].id >= 600 && res.data.weather[0].id <= 622){
            image.setAttribute('src','./img/13d.png')

        }else if(res.data.weather[0].id >= 701 && res.data.weather[0].id <= 781){
            image.setAttribute('src','./img/50d.png')

        }else if(res.data.weather[0].id >= 800 && res.data.weather[0].id <= 800){
            image.setAttribute('src','./img/01d.png')

        }else if(res.data.weather[0].id >= 801 && res.data.weather[0].id <= 801){
            image.setAttribute('src','./img/02d.png')

        }else if(res.data.weather[0].id >= 802 && res.data.weather[0].id <= 802){
            image.setAttribute('src','./img/03d.png')

        }else if(res.data.weather[0].id >= 803 && res.data.weather[0].id <= 804){
            image.setAttribute('src','./img/04d.png')

        }else{
            image.setAttribute('src','./img/deafult.png')
        }



    })
    .catch(err => warning.textContent = 'Błąd w nazwie miasta ')
   
}
const showWeatherOnEnter = (e)=>{
    if(e.key === 'Enter'){
        showWeather()
    }

}
input.addEventListener('keyup', showWeatherOnEnter)
btn.addEventListener('click', showWeather)

