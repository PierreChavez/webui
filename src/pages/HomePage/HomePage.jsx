import React from 'react';
import Button from '../../components/atoms/Button/Button';
import Input from '../../components/atoms/Input/Input';
import ToggleSwitch from '../../components/atoms/ToggleSwitch/ToggleSwitch';
import Card from '../../components/organisms/Card/Card';
import PageTemplate from '../../components/templates/PageTemplate/PageTemplate';
import styles from './HomePage.module.css';
import Link from '../../components/atoms/Link/Link';
import Radio from '../../components/atoms/Radio/Radio';

const HomePage = ({ onSearchSubmit, children }) => (
  <div className={styles.homePage}>
    <PageTemplate onSearchSubmit={onSearchSubmit}>
      <h2>Welcome to our website!</h2>
      <p>This is the home page.</p>
      <Card title="Title">
        <p>Card Content</p>
        <Button>Click Me</Button>
        <Input placeholder='Search'/>
        <ToggleSwitch />
        <Link href="https://www.google.com">Google</Link>
        <Radio name="radio" value="radio1">Radio 1</Radio>
      </Card>
    </PageTemplate>
  </div>
);

export default HomePage;
