import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">EFSS</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Question" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/beginner">초급</NavDropdown.Item>
              <NavDropdown.Item href="/intern">중급</NavDropdown.Item>
              <NavDropdown.Item href="/expert">고급</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/test">
                시험보기
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/function">함수별 문제</Nav.Link>
            <Nav.Link href="/dictionary">함수사전</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/signup">회원가입</Nav.Link>
            <Nav.Link href="/login">로그인</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
