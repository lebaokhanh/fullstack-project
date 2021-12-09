import React, {useState, useCallback} from "react";
import {useDispatch} from "react-redux";
import {Box, Button} from "@mui/material";

import {onLogIn} from "./redux";
import {LogInPayload} from "./types";
import Input from '../../components/Input';

export default () => {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState<LogInPayload>({
    username: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  }

  const onSubmit = useCallback((formValues: LogInPayload) => {
    dispatch(onLogIn(formValues));
  }, [])

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    onSubmit(formValues);
  }

  return (
    <>
      <Box sx={{width: '50%', height: '50%', margin: "0 auto"}}>
        <h1>Login</h1>
        <Input name='username' type={'text'} label={'Username'} value={formValues.username} onChange={handleChange} />
        <br />
        <Input name='password' type={'password'} label={'Password'} value={formValues.password} onChange={handleChange} />
        <br />
        <Button variant="contained" onClick={handleSubmit}>Log in</Button>
      </Box>
    </>
  )
}
