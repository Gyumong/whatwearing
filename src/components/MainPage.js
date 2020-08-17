import React from 'react'
import styled from 'styled-components';
import Map from './Map';
function MainPage() {

    const MainPage= styled.div`
        display:flex;
        justify-content:center;
        align-items:center;
        width:100%;
        height:100vh;
        background-color:#FFFF99;
    `;
    return (
        <>
        <Map/>
        <MainPage>
            <h1>
            What are you wearing today?    
            </h1>
        </MainPage>
        </>
    )
}

export default MainPage
