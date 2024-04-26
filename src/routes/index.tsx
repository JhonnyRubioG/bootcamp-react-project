import { Routes, Route } from "react-router-dom";
import Homepage from "../views/Homepage";
import History from "../views/History";
import About from "../views/AboutUs";
import TemplateGlobal from "../views/Template";


const Redirection = () => {

    return (
        <Routes>
            <Route path="/" element={<TemplateGlobal />}>
                <Route index element={<Homepage />} />
                <Route path="/about" element={<About />} />
                <Route path="/History" element={<History />} />
            </Route>
        </Routes>
    );
};

export default Redirection;
