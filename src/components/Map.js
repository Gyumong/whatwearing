import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { API_URL } from './Config';
function Map() {
  const [Data,setData]= useState([]);
  useEffect((longitude,latitude) => {
    fetchlotaion();
    const URL =`https://api.openweathermap.org/data/2.5/onecall?lat=37.535744&lon=127.008768&
    exclude=hourly,daily&appid=c13cc1190412a125332e2bf4620fa404`;
    fetchData(URL);
  }, []);


  const fetchData = async(URL)=>{
    setData(null);
    const response = await axios.get(URL);
    const b =new Date();
    console.log(response.data.daily);
    console.log(response.data);
    console.log("현재온도 : "+ (response.data.current.temp-273.15) );
    console.log("현재시간 : "+ (b) );
    console.log("현재구름 : "+ (response.data.current.clouds) );
  }

  const fetchlotaion=()=>{
    if('geolocation' in navigator) {
      /* 위치정보 사용 가능 */
      navigator.geolocation.getCurrentPosition(function(pos) {
        const latitude = pos.coords.latitude;
        const longitude = pos.coords.longitude;
        alert("현재 위치는 : " + latitude + ", "+ longitude);
    });
    } else {
      /* 위치정보 사용 불가능 */
      alert('위치 못가져옴');
    }
  };

  return (
    <div>
      
    </div>
  )
}

export default Map
