import React from 'react';
import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import { login } from '../features/users';

function Login() {

    const dispatch = useDispatch();
    return (



        <LoginWrapper>


            <Button onClick={() => { dispatch(login({ name: 'Gyula', age: 36, email: 'shuyin21@gmail.com' })) }}>Login</Button>
        </LoginWrapper>);
}

export default Login;


const LoginWrapper = styled.div`
display: flex;
justify-content: center;
margin-top:100px;

`;

const Button = styled.button`
width: 150px;
height:40px;
font-size: 18px;
background: #333;
color:#fff;
cursor: pointer;
font-weight: bold;
&:hover{
    color:#000;
    background: #fff;

}

`;