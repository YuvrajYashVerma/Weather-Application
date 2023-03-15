import axios from 'axios';

const API_KEY = 'caae8e515a8320f787d51d56087550ff';
const API_URL = 'http://api.openweathermap.org/data/2.5/weather';


export const getWeather = async (city, country) =>{
    try{
        let response = await axios.get(`${API_URL}?q=${city},${country}&appid=${API_KEY}&units=metric`);
        return response.data;
    }catch(error){
        console.log('Error whille calling the api ', error.message);
        return error.response;
    }
}