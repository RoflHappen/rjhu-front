import React, { Component } from 'react';
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

import "./Categories/Home"; 

import {Link, Route, Routes} from "react-router-dom"

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Categories/Home';
import Blog from './Categories/Blog';


const GetBlog = () => <Blog URL='#'></Blog> 


class Layout extends Component {

    state : boolean = false;

    render() {

        document.title = 'Yoba Land';


        const MenuList = [(
        <NavItem>
            <NavLink href='/'>
            <b>Home</b>
            </NavLink>
        </NavItem>
        ),
        (
        <NavItem>
            <NavLink href='/Blog'>
            <b>Blog</b>
            </NavLink>
        </NavItem>
        )
    ];

        const menu = (
            <div>
            <Navbar color="light" expand='lg'>
                <NavbarBrand>
                    <NavLink>
                        <Link to="/">
                            <b>YOBA LAND</b>
                        </Link>
                    </NavLink>
                </NavbarBrand>
                <NavbarToggler onClick={() => {this.state = !this.state}} />
            
                <Collapse isOpen={this.state} navbar>
                <Nav className="me-auto " navbar>
                    {MenuList}
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

        ///Footer contents

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


        ///Fill routes here
        
        const routes = 
        (
        <Routes>
            <Route path='/' element={<Home/>}>
                
            </Route>
            <Route path='/Blog' element={<GetBlog/>}>
            </Route>
        </Routes>
        )
        return (
            <div className=''>
                <header>
                    {menu}
                </header>
                    {routes}
               
                <footer className='bg-dark'>
                    {footer}
                </footer>


            </div>
        );
    }
}

export default Layout;