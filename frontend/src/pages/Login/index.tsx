import React, {useState, useCallback} from "react";
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux";
import {onLogIn} from "./redux";
import {LogInPayload} from "./types";

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

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit(formValues);
  }

  return (
    <>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="username"
          type="text"
          name="username"
          value={formValues['username']}
          onChange={handleChange}
        />
        <input
          placeholder="password"
          type="password"
          name="password"
          value={formValues['password']}
          onChange={handleChange}
        />
        <button placeholder="submit" type="submit">
          Log In
        </button>
        <div>
          or <Link to='/signup'>sign up</Link>
        </div>
      </form>
    </>
  )
}
