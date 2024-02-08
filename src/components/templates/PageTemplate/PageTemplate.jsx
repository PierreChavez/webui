import React from 'react';
import ThemeSwitcher from '../../../themes/ThemeSwitcher';
import BreadcrumbItem from '../../atoms/BreadcrumbItem/BreadcrumbItem';
import MenuItem from '../../atoms/MenuItem/MenuItem';
import Aside from '../../molecules/Aside/Aside';
import Breadcrumb from '../../molecules/Breadcrumb/Breadcrumb';
import Footer from '../../molecules/Footer/Footer';
import Header from '../../molecules/Header/Header';
import Main from '../../molecules/Main/Main';
import Menu from '../../molecules/Menu/Menu';
import Container from '../../organisms/Container/Container';

const PageTemplate = ({ title, children }) => (
  <Container>
    <Header title={title}>
      <Breadcrumb separator='/'>
        <BreadcrumbItem href='/'>Home</BreadcrumbItem>
        <BreadcrumbItem href='/about'>About</BreadcrumbItem>
      </Breadcrumb>
      <Menu mode="horizontal"><MenuItem>Home</MenuItem><MenuItem>About</MenuItem></Menu>
    </Header>
    <Aside width='250px'>
      <Menu mode="vertical">
        <ThemeSwitcher />
        <MenuItem>Home</MenuItem><MenuItem>About</MenuItem>
        </Menu>
    </Aside>
    <Main>{children}</Main>
    <Footer>footer</Footer>
  </Container>
);

export default PageTemplate;