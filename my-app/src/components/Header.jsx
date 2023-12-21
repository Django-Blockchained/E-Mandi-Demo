import React from 'react'
import { Badge, Navbar, Nav, Container} from 'react-bootstrap'
import {FaShoppingCart, FaUser } from 'react-icons/fa'
import { LinkContainer } from 'react-router-bootstrap'
import logo from '../assets/logo.png'
import {useSelector} from 'react-redux';

const Header = () => {
  const {cartItems} = useSelector((state) => state.cart);
   
  return (
    <header>
        <Navbar bg="primary" variant="dark" expand="md" collapseOnSelect>
            <Container>
                <LinkContainer to='/'>
                   <Navbar.Brand className='flex'>
                    <img src={logo} alt='E-Mandi' className='px-2'/>
                      E-Mandi
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='ms-auto'>
                <LinkContainer to='/cart'>
                    <Nav.Link>
                    <div style={{display: 'flex', gap: '3px'}}>
                        <FaShoppingCart style={{marginTop: '3px'}}/> Cart 
                        {
                            cartItems.length > 0 && (
                                <Badge pill bg='secondary' style={{marginLeft: '5px'}}>
                                    {cartItems.reduce((a, c)=> a + c.qty, 0) }
                                </Badge>
                            )
                        }
                    </div>
                    </Nav.Link>
                </LinkContainer>
                <LinkContainer to='/login'>
                    <Nav.Link>
                    <div style={{display: 'flex', gap: '3px'}}>
                        <FaUser style={{marginTop: '3px'}}/> Sign In 
                    </div>
                    </Nav.Link>
                </LinkContainer>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>   
    </header>
  )
}

export default Header