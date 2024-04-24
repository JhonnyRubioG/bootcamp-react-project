import { Outlet } from "react-router-dom";
import HeaderGlobal from "../Header";
import { Container } from "react-bootstrap";

const TemplateGlobal = () => {

    return (
        <div>
            <HeaderGlobal />
            <Outlet />
        </div>
    );

};

export default TemplateGlobal;