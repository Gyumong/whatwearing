import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { API_URL } from './Config';
import { Descriptions } from 'antd';
import styled from 'styled-components';

const Map=()=> {
  const [currentData,setCurrentData]= useState([]);
  const [Data, setData] = useState([]);
  const [weather,setWeather]=useState([]);
  const [time, setTime] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect((longitude,latitude) => {

    const fetchlotaion=()=>{
      if('geolocation' in navigator) {
        /* 위치정보 사용 가능 */
        navigator.geolocation.getCurrentPosition(function(pos) {
          const latitude = pos.coords.latitude;
          const longitude = pos.coords.longitude;
          alert("현재 위치는 : " + latitude + ", "+ longitude);
          const URL =`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&
          exclude=hourly,daily&appid=c13cc1190412a125332e2bf4620fa404`;
          fetchData(URL);

          
      });
      } else {
        /* 위치정보 사용 불가능 */
        alert('위치 못가져옴');
      }
    };

    
    
    fetchlotaion();
    
  }, []);
  
  const fetchData = async(URL)=>{
    try{
      setLoading(true);
      setData(null);
      setWeather(null);
      setCurrentData(null);
      const response = await axios.get(URL);
      setData(response.data);
      setCurrentData(response.data.current);
      setWeather(response.data.current.weather[0]);
      const b =new Date();
      setTime(b);
      console.log(response.data);
      console.log("현재온도 : "+ (response.data.current.temp-273.15) );
      console.log("현재시간 : "+ (b) );
      console.log(response.data.current.weather[0].main)
      console.log("현재구름 : "+ (response.data.current.clouds) );
    }catch(e){
      console.log(e);
    }
    setLoading(false);
  };
  if (loading) return <div>로딩중..</div>;

  return (
    <Descriptions  style={{
      width:"500px"
    }}title="User Info">
    <Descriptions.Item label="위치">{Data.timezone}</Descriptions.Item>
  <Descriptions.Item label="현재 온도">{Math.round(currentData.temp-273.15)}</Descriptions.Item>
    <Descriptions.Item label="날씨">{weather.main}</Descriptions.Item>
  <Descriptions.Item label="습도">{currentData.humidity}</Descriptions.Item>
    <Descriptions.Item label="강수량">
      No. 18, Wantang Road, Xihu District, China
    </Descriptions.Item>
  </Descriptions>
  )
};

export default Map;
