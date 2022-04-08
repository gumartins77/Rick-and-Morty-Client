import React from "react";
import Button from "../../components/button/Button";
import Fieldset from "../../components/fieldset/Fieldset";
import Form from "../../components/form/Form";
import Input from "../../components/input/Input";
import { useNavigate } from "react-router-dom";
import "./Register.css";

export default function Register() {
  const navigate = useNavigate();

  const register = (event)=>{
    event.preventDefault();
    const preload = {
        name:event.target.inputName.value,
        email:event.target.inputEmail.value,
        password:event.target.inputPassword.value
    }
    console.log(preload);
  }

  return (
    <section className="page login">
      <Form onSubmit={register}>
        <img src="/assets/logo-blue-croped.gif" alt="logo blueEdtech"></img>
        <Fieldset>
          <Input type={"name"} name={"inputName"} description={"Name"} />
          <Input type={"email"} name={"inputEmail"} description={"Email"} />
          <Input
            type={"password"}
            name={"inputPassword"}
            description={"Password"}
          />
          <Button description={"Quero Me Registrar"} />
          <Button
            description={"Quero Me Logar"}
            className="btn-red"
            onClick={(event) => {
              event.preventDefault();
              navigate("/");
            }}
          />
        </Fieldset>
      </Form>
    </section>
  );
}
