import React from 'react'
import { Navbar, NavbarBrand, Nav, NavItem, Card, Container, Row, Col } from 'reactstrap'
import { useRouter } from 'next/router'
import { capitalizeFirstLetter } from 'helper'

interface Props {
    children: React.ReactNode,
}

const Layout: React.FC<Props> = ({ children }) => {
    const router = useRouter()
    const route = capitalizeFirstLetter(router.route.replace('/',''))

    return <>
        <Navbar>
            <NavbarBrand href='/'>Test Project</NavbarBrand>
            <Nav className="me-auto" navbar>
                <NavItem>
                    {route ? route : 'Home'}
                </NavItem>
            </Nav>
        </Navbar>
        <Container className='pageContainer'>
            <Row>
                <Col>
                    {children}
                </Col>
            </Row>
        </Container>
    </>
}

export default Layout