import React from 'react'
import styled from 'styled-components';
import sun from './assets/sun.jpg';
const GridCardBlock =styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    background:white;
    width:100%;
    height:20vh;
    text-align:center;
    transition-property: background-color,color;
  transition-duration: 5s;
  transition-timing-function: ease-out;
    ${props => props.rain && `
    background: yellow;
    color: black;
  `}
    ${props => props.sunny && `
    background: pink;
    color: black;
  `}
`;
const SunImage = styled.div`
    width:100px;
    height:100px;
    background-repeat:no-repeat;
    background-position:center,center;
    background-image: url(${sun});
    background-size:cover;
`;
function GridCard(props) {
    const {Weather} = props;

    switch(Weather.description){
      case "맑음":
        console.log("우산 챙기세요")
        return <GridCardBlock sunny><h1>덥다</h1>
        <SunImage/>
        </GridCardBlock>
        break;
      case "구름":
        return <GridCardBlock rain/>
        break;
        default:
          return <GridCardBlock/>
    }

    console.log(Weather.description)
    return (
        <GridCardBlock>
            <h1>default</h1>
        </GridCardBlock>
    )
}

export default GridCard

