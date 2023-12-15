import React from 'react';
import Aside from '../../molecules/Aside/Aside';
import Footer from '../../molecules/Footer/Footer';
import Header from '../../molecules/Header/Header';
import Main from '../../molecules/Main/Main';
import Container from '../../organisms/Container/Container';

const PageTemplate = ({ title, children }) => (
  <Container>
    <Header title={title} />
    <Aside width='250px'>aside</Aside>
    <Main>{children}</Main>
    <Footer>footer</Footer>
  </Container>
);

export default PageTemplate;