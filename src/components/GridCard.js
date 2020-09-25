import React from "react";
import styled from "styled-components";
import {Col} from "antd";

const CardBlock = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    border:1px solid black;
    box-sizing: border-box;
    overflow: hidden;
    height: auto;
    margin: 0;
    padding-top:30px;
    .testbox{
      margin:0;
      width:150px;
      height:150px;
      background:#0066ff;
    }
`;

function GridCard(props) {
  const currentData = props.currentData;
  return (
          <Col lg={6} md={8} sm={12} xs={24} >
            <CardBlock>
              <div className="testbox"></div>
              <h2>더미 타이틀</h2>
              <h4>더미 컨텐츠</h4>
            </CardBlock>
          </Col>
  )
}

export default GridCard;
