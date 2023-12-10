import React from 'react';
import Button from './atoms/Button';
import Input from './atoms/Input';
import Label from './atoms/Label';

const LoginForm = ({ onSubmit }) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ username, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Label htmlFor="username">Username:</Label>
      <Input
        type="text"
        id="username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <Label htmlFor="password">Password:</Label>
      <Input
        type="password"
        id="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <Button type="submit">Log In</Button>
    </form>
  );
};

export default LoginForm;