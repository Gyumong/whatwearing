import React from 'react'
import styled from 'styled-components';
import Map from './Map';
import Test from './Test';
import KakaoMap from './KakaoMap';
import {useParams} from 'react-router-dom';
import { Input } from 'antd';



function MainPage(props) {
    const params =useParams();
    const MainPage= styled.div`
        margin:0 auto;
        display:flex;
        flex-direction:column;
    `;
    return (
        <>
        <MainPage>
            {/* <KakaoMap Address={params.Address}/> */}
          <Map/>
        </MainPage>
        </>
        
        )
    }

export default MainPage
