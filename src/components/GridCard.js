import React from 'react'
import styled from 'styled-components';
const GridCardBlock =styled.div`
    background:white;
    width:100%;
    height:20vh;
    ${props => props.rain && `
    background: yellow;
    color: black;
  `}
`;
function GridCard(props) {
    const {Weather} = props;
    if(Weather.description ==="실 비"){
        console.log("우산 챙기세요")

    }else if (Weather.description ==="약간의 구름이 낀 하늘"){
        console.log("아따 비온다잉")
        return <GridCardBlock rain
        
        />
    }
    console.log(Weather.description)
    return (
        <GridCardBlock>
            
        </GridCardBlock>
    )
}

export default GridCard

