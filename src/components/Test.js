import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Descriptions } from 'antd';
const Test=()=> {
    const [Data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const URL =`https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&
        exclude=hourly,daily&appid=c13cc1190412a125332e2bf4620fa404`;
        fetchData(URL);

    }, []);

    const fetchData = async(URL)=>{
        try{
          setLoading(true);
          setData(null);
          const response = await axios.get(URL);
          setData(response.data.current);
          const b =new Date();
          console.log(response.data);
          console.log("현재온도 : "+ (response.data.current.temp-273.15) );
          console.log("현재시간 : "+ (b) );
          console.log("현재구름 : "+ (response.data.current.clouds) );
        }catch(e){
          console.log(e);
        }
        setLoading(false);
      };

      if (loading) return <div>로딩중..</div>;

    return (
        <>
                <Descriptions  style={{
      width:"500px"
    }}title="User Info">
    <Descriptions.Item label="위치">Zhou Maomao</Descriptions.Item>
<Descriptions.Item label="현재 온도">{Data.temp-273.15}</Descriptions.Item>
    <Descriptions.Item label="습도">Hangzhou</Descriptions.Item>
    <Descriptions.Item label="강수 확률">empty</Descriptions.Item>
    <Descriptions.Item label="강수량">
      No. 18, Wantang Road, Xihu District, China
    </Descriptions.Item>
  </Descriptions>
        </>
    )
}


export default Test;
