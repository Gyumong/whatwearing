import React from "react";
import styled from "styled-components";


function GridCard(props) {
  const currentData = props.currentData;
  return (
    <div>
      {currentData.uvi>3 ? <div>오우</div>  :null}

    </div>
  )
}

export default GridCard;
