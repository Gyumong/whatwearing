import React,{useState,useEffect} from 'react';
import { Input,Button,Descriptions  } from 'antd';
import axios from 'axios';

function GoogleMap() {

    const [addressName, setAddressName] = useState('');
    const [searchAddr, setSearchAddr] = useState('');
    const [xposition,setXposition]= useState('');
    const [yposition,setYposition]= useState('');
    const [weather,setWeather] = useState('');
    const [KakaoData,setKakaoData] =useState([]);
    const [search,setSearch]= useState('');
    const onChangeAddr= e => setSearchAddr(e.target.value);
    const onClick= ()=>{
        setSearch(KakaoData)
    };

    const onKeyPress= e=>{
        if(e.key==='Enter'){
            onClick();
        }
    }

    const { kakao } = window; 
    const geocoder = new kakao.maps.services.Geocoder();
    useEffect(() => {
        
    const callback = function(result, status) {
        if (status === kakao.maps.services.Status.OK) {
            setAddressName(result[0].address.address_name);
            setXposition(result[0].address.x);
            setYposition(result[0].address.y);
            console.log(result[0].address);
            console.log(addressName)
            console.log(xposition);
            console.log(yposition);
            const fetchAddress=async ()=>{
                    const AddressURL= `https://api.openweathermap.org/data/2.5/onecall?lat=${yposition}&lon=${xposition}&lang=kr&
                    exclude=hourly,daily&appid=c13cc1190412a125332e2bf4620fa404`;
                    const UserResponse= await axios.get(AddressURL);
                    setKakaoData(UserResponse.data.current)
                    setWeather(UserResponse.data.current.weather[0])
                    console.log(UserResponse.data.current);
            }
            {xposition && yposition &&
            fetchAddress();
            }
        }
    };
    geocoder.addressSearch(`${searchAddr}`, callback);   
}, [searchAddr,addressName,xposition,yposition])
    
  
    
    return (
        <>

           <p><Input type="text" placeholder="주소를 적어주세요"
            onChange={onChangeAddr}
            value={searchAddr}
            ></Input></p>
           <p><Button type="button"
            onKeyPress={onKeyPress}
            onClick={onClick}
           >
               확인
           </Button>
           </p>
           <p>
               {addressName && `${addressName}의 날씨는?`}
               
           </p>
        { KakaoData && 
        <Descriptions  style={{
                width:"500px"
        }}>
            <Descriptions.Item label="위치">{addressName}</Descriptions.Item>
            <Descriptions.Item label="현재 온도">{Math.round(KakaoData.temp-273.15)}</Descriptions.Item>
            <Descriptions.Item label="날씨">{weather.description}</Descriptions.Item>
            <Descriptions.Item label="습도">{KakaoData.humidity}</Descriptions.Item>
        </Descriptions>
        }
      </>
    )
}

export default GoogleMap;