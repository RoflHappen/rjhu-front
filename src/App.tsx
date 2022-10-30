import React from 'react';
import {
  Button,
  Col,
  Collapse, 
  Container,
  Dropdown, 
  DropdownItem, 
  Form,
  FormGroup,
  Input,
  Label,
  Nav,
  NavItem,
  NavLink, 
  Navbar, 
  NavbarBrand, 
  NavbarToggler, 
  Row,
} from 'reactstrap';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  document.title = 'Yoba Land';
  const arr = ['Home', 'Blog', 'Auth', 'Download Game', 'About us'];


  const arrNavs = arr.map(i => 
    (
      <NavItem>
        <NavLink href='#'>
          {i}
        </NavLink>
      </NavItem>
    )) ;

  const [isOpen, setIsOpen] = React.useState(false);
  const menu = (
    <div>
      <Navbar color="light" expand='lg'>
        <NavbarBrand>
          <b>YOBA LAND</b>
        </NavbarBrand>
        <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
       
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto " navbar>
            {arrNavs}
          </Nav>
        </Collapse>
        <Container>
          <img width={32} src='https://cdn-icons-png.flaticon.com/512/149/149071.png'/>
        </Container>
      </Navbar>
    </div>
  );

  const text = (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  );
  const footer = (
    <Container className='text-white' >
      <Row>
        <Col xs='6'>
          {text}
        </Col>
        <Col xs='3'>
          {text}
        </Col>
        <Col xs='3'>
          {text}
        </Col>
      </Row>
    </Container>
  );

  const yobaRoll = (
    <div>
      <img src={'https://stickerboom.ru/files/2014/11/13/1735x03a8-300x300.png'} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
  

  const items = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

  const YobaRolls = items.map
  (
    i => 
    (
      <Col xs='4'>
        {yobaRoll}
      </Col>
    )
  );

  return (
    <div className=''>
      <header>
        {menu}
      </header>
      <Row>
        {YobaRolls}
      </Row>
      <footer className='bg-dark'>
        {footer}
      </footer>
    </div>
  );
}

export default App;
