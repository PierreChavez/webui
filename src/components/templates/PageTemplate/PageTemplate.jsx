import React from 'react';
import ThemeSwitcher from '../../../themes/ThemeSwitcher';
import Aside from '../../molecules/Aside/Aside';
import Footer from '../../molecules/Footer/Footer';
import Header from '../../molecules/Header/Header';
import Main from '../../molecules/Main/Main';
import Container from '../../organisms/Container/Container';

const PageTemplate = ({ title, children }) => (
  <Container>
    <Header title={title}>
    </Header>
    <Aside width='250px'>      <ThemeSwitcher />
    </Aside>
    <Main>{children}</Main>
    <Footer>footer</Footer>
  </Container>
);

export default PageTemplate;