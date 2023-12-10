import React from 'react';

const Input = ({ type, id, onChange, value }) => (
  <input type={type} id={id} onChange={onChange} value={value} />
);
export default Input;