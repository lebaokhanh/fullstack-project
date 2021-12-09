import React, {useCallback, useState} from "react";
import {useDispatch} from "react-redux";
import {Box, Button} from "@mui/material";

import {onSignUp} from "./redux";
import {SignUpPayload} from "./types";
import Input from "../../components/Input";

export default () => {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState<SignUpPayload>({
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  }

  const onSubmit = useCallback((formValues) => {
    dispatch(onSignUp(formValues));
  }, [dispatch]);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    onSubmit(formValues);
  }

  return (
      <Box sx={{width: '50%', height: '50%', margin: "0 auto"}}>
        <h1>Signup</h1>
        <Input name='username' type={'text'} label={'Username'} value={formValues.username} onChange={handleChange} />
        <Input name='email' type={'text'} label={'Email'} value={formValues.email} onChange={handleChange} />
        <Input name='password' type={'password'} label={'Password'} value={formValues.password} onChange={handleChange} />
        <Input name='password_confirmation' type={'password'} label={'Password Confirmation'} value={formValues.password_confirmation} onChange={handleChange} />
        <Button variant="contained" onClick={handleSubmit}>Submit</Button>
      </Box>
  )
}
