import { Routes, Route } from "react-router-dom";
import Homepage from "../views/Homepage";
import Contact from "../views/Contact";
import About from "../views/AboutUs";
import TemplateGlobal from "../views/Template";


const Redirection = () => {

    return (
        <Routes>
            <Route path="/" element={<TemplateGlobal />}>
                <Route index element={<Homepage />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
            </Route>
        </Routes>
    );
};

export default Redirection;
