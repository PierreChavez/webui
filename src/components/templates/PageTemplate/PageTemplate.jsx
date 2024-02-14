import React from 'react';
import ThemeSwitcher from '../../../themes/ThemeSwitcher';
import MenuItem from '../../atoms/MenuItem/MenuItem';
import Aside from '../../molecules/Aside/Aside';
import Footer from '../../molecules/Footer/Footer';
import Header from '../../molecules/Header/Header';
import Main from '../../molecules/Main/Main';
import Menu from '../../molecules/Menu/Menu';
import Container from '../../organisms/Container/Container';

const PageTemplate = ({ title, children }) => (
  <Container>
    <Header>
      <Menu mode="horizontal"><MenuItem>Home</MenuItem><MenuItem>About</MenuItem></Menu>
    </Header>
    <Aside width='200px'>
      <Menu mode="vertical">
        <ThemeSwitcher />
        <MenuItem>Home</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>Home</MenuItem>
      </Menu>
    </Aside>
    <Main>
      {children}

    </Main>
    <Footer>
      <p>© 2022 Your Company. All rights reserved.</p>
      <p>© 2022 Your Company. All rights reserved.</p>
    </Footer>
  </Container>
);

export default PageTemplate;