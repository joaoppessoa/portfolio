import React, { useState } from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import './style.css';

export default function Header(){
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
      <section className='header'>
          <Navbar fixed='top' style={{background: 'rgb(100 148 75)'}} light expand='md' >
            <NavbarBrand id='logo' href='/'>Dr. Iran Pessoa</NavbarBrand>
            <NavbarToggler onClick={toggle} style={{border: 'none', color: '#fff'}}/>
            <Collapse isOpen={isOpen} navbar>
              <Nav className='ml-auto' id='nav_links'>
                <NavItem>
                  <NavLink href='/' >Página Inicial</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href='#'>Serviços</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href='#'>Especialidades</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href='#'>Minha Abordagem</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href='#'>Contate-me</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
      </section>
    );
}