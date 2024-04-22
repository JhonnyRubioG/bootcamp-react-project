import { Outlet } from "react-router-dom";
import HeaderGlobal from "../Header";
import { Container } from "react-bootstrap";

const TemplateGlobal = () => {

    return (
        <div>
            <HeaderGlobal />
            <Container>
                <Outlet />
            </Container>
        </div>
    );

};

export default TemplateGlobal;