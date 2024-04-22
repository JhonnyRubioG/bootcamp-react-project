import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


const HeaderGlobal = () => {

    return (
        <Container>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand >
                        <Link to="/">Home</Link>
                    </Navbar.Brand>
                    <Navbar.Brand >
                        <Link to="/about">About us</Link>
                    </Navbar.Brand>
                    <Navbar.Brand >
                        <Link to="/contact">Contact</Link>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </Container>
    );

};

export default HeaderGlobal;