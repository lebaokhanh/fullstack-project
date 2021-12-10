import React from 'react';
import {InputLabel, Select, SelectChangeEvent} from "@mui/material";
import {FormControlWrapper} from "./styles";

interface SelectComponent {
  label: string;
  name: string;
  onChange: (e: SelectChangeEvent<string>) => void;
  value: string | number;
  children: React.ReactNode;
}

export default ({ label, name, onChange, value, children }: SelectComponent) => {
  return (
    <div>
      <FormControlWrapper>
        <InputLabel id={name}>{label}</InputLabel>
        <Select
          labelId={name}
          name={name}
          label={label}
          value={value.toString()}
          onChange={onChange}
        >
          {children}
        </Select>
      </FormControlWrapper>
    </div>
  )
}
