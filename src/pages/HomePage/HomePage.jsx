import React from 'react';
import Stack from '../../components/molecules/Stack/Stack';
import Card from '../../components/organisms/Card/Card';
import PageTemplate from '../../components/templates/PageTemplate/PageTemplate';
import styles from './HomePage.module.css';

const HomePage = ({ onSearchSubmit, children }) => (
  <div className={styles.homePage}>
    <PageTemplate onSearchSubmit={onSearchSubmit}>
      <Stack gap="1rem" wrap alignItems='center'>
        <Card title="Card">
          <p>Card Content</p>
        </Card>
        <Card title="Card 2">
          <p>Card Content</p>
        </Card>
        <Card title="Card 3">
          <p>Card Content</p>
        </Card>
        <Card title="Card 3">
          <p>Card Content</p>
        </Card>
        <Card title="Card 3">
          <p>Card Content</p>
        </Card>
        <Card title="Card 3">
          <p>Card Content</p>
        </Card>
        <Card title="Card 3">
          <p>Card Content</p>
        </Card>
        <Card title="Card 3">
          <p>Card Content</p>
        </Card>
        <Card title="Card 3">
          <p>Card Content</p>
        </Card>
        <Card title="Card 3">
          <p>Card Content</p>
        </Card>
        <Card title="Card 3">
          <p>Card Content</p>
        </Card>
      </Stack>
    </PageTemplate>
  </div>
);

export default HomePage;
