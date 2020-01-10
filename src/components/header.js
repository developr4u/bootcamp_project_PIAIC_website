import { Link } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css';
import headerStyle from './header.module.scss';
import Logo from '../images/piaic_logo.svg'

import React, { useState } from 'react';
import {
  Collapse,Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';


const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div > 
      <Navbar className={headerStyle.Navbar} expand="md">
        <div className={headerStyle.pic}><NavbarBrand > <Link to='/'>  <img src={Logo}  /> </Link></NavbarBrand>
        <NavbarToggler onClick={toggle} /></div>    
        <Collapse isOpen={isOpen} className = {headerStyle.hello} navbar>
          <Nav  className = "nav-bar" navbar>
         
          <div className={headerStyle.ul}>
            <NavItem>
              <Link to='howitworks'> How It Works</Link>
            </NavItem>
                
            <NavItem>
            <Link to='howitworks'> Apply</Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret >
               Available Programs
              </DropdownToggle >
              <DropdownMenu className={headerStyle.ddm} >
                <DropdownItem>
                 <Link to='/artificial-intelligence'> Artifitial Intelligence </Link>
                </DropdownItem>
                <DropdownItem>
                <Link to='/cloud-native'> Cloud Native And Mobile Web Computing </Link>
                </DropdownItem>
                <DropdownItem>
                <Link to='/block-chain'> Block Chain </Link>
                </DropdownItem>
                <DropdownItem>
                <Link to='/iot'> Internet Of Things </Link>
                </DropdownItem>
               
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
             About
            </DropdownToggle>
            <DropdownMenu left  className={headerStyle.ddm}>
              <DropdownItem>
              <Link to='/president'> The President </Link>
              </DropdownItem>
              <DropdownItem>
                <Link to='/management'>Managemant Committee</Link>
              </DropdownItem>
              </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
            <Link to='wit' > WIT</Link>
            </NavItem>
            </div>
          </Nav>
          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
