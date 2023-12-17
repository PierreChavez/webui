import React from 'react';
import ThemeSwitcher from '../../../themes/ThemeSwitcher';
import Aside from '../../molecules/Aside/Aside';
import Breadcrumb from '../../molecules/Breadcrumb/Breadcrumb';
import Footer from '../../molecules/Footer/Footer';
import Header from '../../molecules/Header/Header';
import Main from '../../molecules/Main/Main';
import Container from '../../organisms/Container/Container';

const PageTemplate = ({ title, children }) => (
  <Container>
    <Header title={title}>
    <Breadcrumb separator='/' items={[{ text: 'Home', href: '/' }, { text: 'Page', href: '/page' }, { text: 'About', href: '/about' }]} />
    </Header>
    <Aside width='250px'>      <ThemeSwitcher />
    </Aside>
    <Main>{children}</Main>
    <Footer>footer</Footer>
  </Container>
);

export default PageTemplate;