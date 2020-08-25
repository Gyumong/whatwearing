import React,{useState,useEffect} from 'react';
import { Input,Button } from 'antd';

function GoogleMap() {

    const [addressName, setAddressName] = useState();
    const [searchAddr, setSearchAddr] = useState('');
    const [xposition,setXposition]= useState('');
    const [yposition,setYposition]= useState('');
    const onChangeAddr= e => setSearchAddr(e.target.value);
    const onClick= ()=>{
        alert(searchAddr);
    };

    const onKeyPress= e=>{
        if(e.key==='Enter'){
            onClick();
        }
    }

    const { kakao } = window; 
    const geocoder = new kakao.maps.services.Geocoder();

    const callback = function(result, status) {
        if (status === kakao.maps.services.Status.OK) {
            setAddressName(result[0].address.address_name);
            setXposition(result[0].address.x);
            setYposition(result[0].address.y);
            console.log(result[0].address);
            console.log(addressName)
            console.log(xposition);
            console.log(yposition);
        }
    };
    
     geocoder.addressSearch(`${searchAddr}`, callback);   
  
    
    return (
        <>

           <p><Input type="text" placeholder="주소를 적어주세요"
           onChange={onChangeAddr}
            value={searchAddr}
           ></Input></p>
           <p><Button type="submit"
            onKeyPress={onKeyPress}
            onClick={onClick}
           >
               확인
           </Button>
           </p>
           <p>
               {addressName && `${addressName}의 날씨는?`}
               
           </p>

      </>
    )
}

export default GoogleMap;