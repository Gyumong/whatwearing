import React,{useState} from 'react';
import styled from 'styled-components';
import {useHistory,useParams} from 'react-router-dom';
import { connect } from 'react-redux';
import MainPage from './MainPage';
import {Route,Link,Switch} from 'react-router-dom';

const LoadingBlock = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    background:#0066ff;
`;

const TextBar = styled.div`
    h1{
        font-size:30px;
        margin-bottom:20px;
        color:white;
        font-weight:900;
        animation-name:move-font;
        animation-duration:3s;
        animation-fill-mode: forwards;

        @keyframes move-font{
            from{
                opacity:1;
            }
            to{
                opacity:0;
            }
        }
    }
    h2{
        font-size:30px;
        margin-bottom:20px;
        color:white;
        font-weight:900;
        animation-name:moved-font;
        animation-delay:3s;
        animation-duration:3s;
        animation-fill-mode: backwards;

        @keyframes moved-font{
            from{
                opacity:0;
            }
            to{
                opacity:1;
            }
        }

    }
    input{
        color:black;
        border:none;
        outline:none;
    }
    button{
        border:none;
        outline:none;
        color:black;
        &:hover{
            cursor:pointer;
        }
    }
    
`;
function Loading(props) {
    const [on, seton] = useState(false);
    const history = useHistory();
    const Address=props.Address;
    const setAddress=()=>{
        const {setAddress} = this.props;
        setAddress(ChangeAddress);
    }
    const [ChangeAddress, setChangeAddress] = useState(Address);
    const onKeyPress= e=>{
        if(e.key==='Enter'){
            setChangeAddress(e.target.value)
            setAddress(ChangeAddress);
            console.log(ChangeAddress)
            console.log(Address);
        }
    }

    const onClick = e =>{
        setChangeAddress(e.target.value)
        console.log(Address);
    }
    return (
        <>
        <LoadingBlock>
            <TextBar>
                <h1>안녕하세요 !</h1>
                <h1>오늘 뭐 입지? 입니다.</h1>
                <h2>주소와 성별을 입력해주세요^^</h2>
                <h2>    
                주소: <input type="name" placeholder="ex) 잠실" onChange={(e)=>{
                    setChangeAddress(e.target.value)
                }} onKeyPress={onKeyPress}/>
                <Link to="/main">
                <button onClick={onClick } >확인</button>
                </Link>
                </h2>
            </TextBar>
        </LoadingBlock>
        </>
    )
}

export default Loading;