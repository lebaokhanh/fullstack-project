import React, {useCallback, useState} from "react";

import {Link} from "react-router-dom";
import {onSignUp} from "./redux";
import {useDispatch} from "react-redux";
import {SignUpPayload} from "./types";

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
    console.log('onSubmit');
    dispatch(onSignUp(formValues));
  }, [dispatch]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('handleSubmit');
    onSubmit(formValues);
  }

  return (
    <>
      <div>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="username"
            type="text"
            name="username"
            value={formValues['username']}
            onChange={handleChange}
          />
          <input
            placeholder="email"
            type="text"
            name="email"
            value={formValues['email']}
            onChange={handleChange}
          />
          <input
            placeholder="password"
            type="password"
            name="password"
            value={formValues['password']}
            onChange={handleChange}
          />
          <input
            placeholder="password confirmation"
            type="password"
            name="password_confirmation"
            value={formValues['password_confirmation']}
            onChange={handleChange}
          />
          <button placeholder="submit" type="submit">
            Sign Up
          </button>
          <div>
            or <Link to='/login'>Log in</Link>
          </div>
        </form>
      </div>
    </>
  )
}
