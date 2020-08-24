import React,{useState,useEffect} from 'react'

function GoogleMap() {

    const [addressName, setAddressName] = useState();
    const [test, setTest] = useState('');
    const onChangeAddr= e => setTest(e.target.value);
    const onClick= ()=>{
        alert(test);
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
            setAddressName(result[0].address.addressName);
            console.log(result[0].address);
            console.log(addressName)
        }
    };
    
     geocoder.addressSearch(`${test}`, callback);   
  
    
    return (
        <>

           <p><input type="text" placeholder="주소를 적어주세요"
           onChange={onChangeAddr}
            value={test}
           ></input></p>
           <p><input type="submit"
            onKeyPress={onKeyPress}
            onClick={onClick}
           />
           </p>
           <p>{test}</p>

      </>
    )
}

export default GoogleMap;