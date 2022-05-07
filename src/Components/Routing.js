import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import About from './Product';
import Contact from './Contact';
import Navbar from './Navbar';
import Product from './Product';
import Services from './Services';
import CardData from './CardData'
import ProductDetails from './ProductDetails';
import Todo from './Todo';

export default function Rou() {
    return (

        <Router>
            <div>
               
<Navbar/>
                {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Routes>
                <Route path="/product/" element={<Product />} />
                <Route path="/contact" element={<Contact />} />
                     <Route path="/Services" element={<Services />} />
                     <Route path="/product/:id/" element={<ProductDetails />} />
                     <Route path="/" element={<Todo/>} />
                </Routes>
            </div>
        </Router>

        // <Router>
        //     <div>
        //         <Routes>
        //             <Route path="/about" element={<About />} />
        //             <Route path="/contact" element={<Contact />} />
        //             <Route path="/Services" element={<Services />} />
        //             <Route path="/products" element={<Products />} />
        //             <Route path="/" element={<App />} />
        //         </Routes>
        //     </div>
        // </Router>

    );
}
