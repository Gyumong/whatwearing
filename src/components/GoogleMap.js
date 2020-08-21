import React,{useState,useEffect} from 'react'
import axios from 'axios';
function GoogleMap() {

    const [addr, setAddr] = useState();

    const onChange=(e)=>{
        const { value, name } = e.target; 
        
    }

    const { kakao } = window; 
    const geocoder = new kakao.maps.services.Geocoder();

    const callback = function(result, status) {
        if (status === kakao.maps.services.Status.OK) {
            setAddr(result[0].address.address_name);
            console.log(result);
        }
    };
    
     geocoder.addressSearch('서울시 송파구 문정동', callback);   
  
    
    return (
        <>
             <form id="addPlayerFrm" onSubmit={function (event) {
           event.preventDefault();
           console.log(event.target.name.value);
       }}>
           <p><input type="text" name="name" placeholder="full name"></input></p>
           <p><input type="submit" value="제출"></input></p>
           <p>{addr}</p>
       </form>
      </>
    )
}

export default GoogleMap;