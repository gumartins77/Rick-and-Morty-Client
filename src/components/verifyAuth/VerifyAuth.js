import React from "react";
import verifyAuth from '../../scripts/verifyAuth';
import { useNavigate } from 'react-router-dom';

export default function VerifyAuth(props){
    const navigate = useNavigate();
 return (
    <>
        {verifyAuth?props.children:navigate('/')}
    </>
 );
}