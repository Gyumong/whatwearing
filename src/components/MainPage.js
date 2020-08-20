import React from 'react'
import styled from 'styled-components';
import Map from './Map';
import Test from './Test';
import { Input } from 'antd';



function MainPage() {

    const MainPage= styled.div`
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        width:100%;
        height:100vh;
    `;
    return (
        <>
        <MainPage>
            <h1>
            What are you wearing today?    
            </h1>
            <Input style={{
                width:"200px",
                margin:"2rem"
            }} placeholder="Basic usage" />
         
            <Map/>
        </MainPage>
        </>
        
        )
    }

export default MainPage
