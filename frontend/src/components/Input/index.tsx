import React, {useState} from 'react';
import _isEqual from 'lodash/isEqual';
import {FormControl, IconButton, Input, InputAdornment, InputLabel} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";

const PASSWORD = 'password';
const TEXT = 'text';

interface PasswordComponent {
  type: typeof TEXT | typeof PASSWORD;
  label: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export default ({ type, label, name, onChange, value }: PasswordComponent) => {
  const isPassword = _isEqual(type, PASSWORD);
  const [showPassword, setShowPassword] = useState(!isPassword);

  return (
    <div>
      <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
        <InputLabel htmlFor={name}>{label}</InputLabel>
        <Input
          id={name}
          name={name}
          type={isPassword ? (showPassword ? TEXT : PASSWORD) : TEXT}
          value={value}
          onChange={onChange}
          endAdornment={
            isPassword &&
            <InputAdornment position="end">
              <IconButton
                onClick={() => setShowPassword(!showPassword)}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </div>
  )
}
