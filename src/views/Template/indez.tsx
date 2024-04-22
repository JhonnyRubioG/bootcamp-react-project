import { Outlet } from "react-router-dom";
import HeaderGlobal from "../Header";

const TemplateGlobal = () => {

    return (
        <div>
            <HeaderGlobal />
            <Outlet />
        </div>
    );

};

export default TemplateGlobal;