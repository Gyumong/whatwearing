import React from 'react'
import styled from 'styled-components';
import Map from './Map';
import Test from './Test';
import KakaoMap from './KakaoMap';

import { Input } from 'antd';



function MainPage(props) {

    const MainPage= styled.div`
        display:flex;
        background:#3a68f9;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        width:100%;
        height:100vh;
        h1{
            margin-bottom:2rem;
        }
    `;
    return (
        <>
        <MainPage>
            <h1>
            What are you wearing today?    
            </h1>
            <KakaoMap Address={props.Address}/>
          {/* <Map/> */}
        </MainPage>
        </>
        
        )
    }

export default MainPage
