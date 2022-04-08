import React from 'react';
import Button from '../../components/button/Button';
import Fieldset from '../../components/fieldset/Fieldset';
import Form from '../../components/form/Form';
import Input from '../../components/input/Input';
import { useNavigate } from 'react-router-dom';
import './Register.css';

export default function Register(){
    const navigate = useNavigate();
    return (
        <section className='page login'>
            <Form>
                <img src='/assets/logo-blue-croped.gif' alt='logo blueEdtech'></img>
                <Fieldset>
                    <Input type={"name"} name={"inputName"} description={"Name"} />
                    <Input type={"email"} name={"inputEmail"} description={"Email"} />
                    <Input type={"password"} name={"inputPassword"} description={"Password"}/>
                    <Button description={"Register"} />
                    <Button description={"Cancel"} className="btn-red"  onClick={(event)=>{event.preventDefault(); navigate('/')}}/>
                </Fieldset>
            </Form>
        </section >
    );
}