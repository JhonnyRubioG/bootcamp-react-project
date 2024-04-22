import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const HeaderGlobal = () => {

    return (
        <Container>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/">Navbar</Navbar.Brand>
                    <Navbar.Brand href="/about">About us</Navbar.Brand>
                    <Navbar.Brand href="/contact">Contact us</Navbar.Brand>
                </Container>
            </Navbar>
        </Container>
    );

};

export default HeaderGlobal;