import React from 'react';
import Button from '../../atoms/Button/Button';
import Input from '../../atoms/Input/Input';
import Label from '../../atoms/Label/Label';
import styles from './SearchForm.module.css';


const SearchForm = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchForm} style={{ color: 'var(--primary-color)', backgroundColor: 'var(--background-color)' }}>
      <Label htmlFor="search">Search:</Label>
      <Input
        type="text"
        id="search"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default SearchForm;