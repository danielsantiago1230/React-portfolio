import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

const Public = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    {/* <Route exact path="/services">
                        <h2>SERVICES</h2>
                    </Route>
                    <Route exact path="/work">
                        <h2>WORK</h2>
                    </Route>
                    <Route exact path="/contact">
                        <h2>CONTACT</h2>
                    </Route> */}
                </Routes>
            </Router>
        </>
    )
}
export default Public