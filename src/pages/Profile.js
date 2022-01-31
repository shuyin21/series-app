import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Profile = () => {

    const user = useSelector((state) => state.user.value);
    return (



        <ProfileWrapper>

            <h1>Profile Page</h1>
            <p>Name: {user.name} </p>
            <p>Age: {user.age} </p>
            <p>Email: {user.email}</p>
        </ProfileWrapper>);
};

export default Profile;


const ProfileWrapper = styled.div`
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;

`;