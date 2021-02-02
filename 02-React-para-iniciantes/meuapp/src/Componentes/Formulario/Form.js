import React from 'react';
import Button  from './Button';
import Input from './Input';

const Form = () => {
  return (
    <div>
      <Input id="email" label="email" required />
      <Input id="password" label="password" type="password" required />
      <Button />
    </div>
  )
}


export default Form;