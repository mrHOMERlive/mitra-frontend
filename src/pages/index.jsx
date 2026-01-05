import Layout from "./Layout.jsx";

import Brands from "./Brands";

import Compliance from "./Compliance";

import Contact from "./Contact";

import Distribution from "./Distribution";

import Home from "./Home";

import Industries from "./Industries";

import Privacy from "./Privacy";

import Terms from "./Terms";

import NDAForm from "./NDAForm";

import NDAForm_ENG from "./NDAForm_ENG";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    Brands: Brands,
    
    Compliance: Compliance,
    
    Contact: Contact,
    
    Distribution: Distribution,
    
    Home: Home,
    
    Industries: Industries,
    
    Privacy: Privacy,
    
    Terms: Terms,
    
    NDAForm: NDAForm,
    
    NDAForm_ENG: NDAForm_ENG,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                
                    <Route path="/" element={<Brands />} />
                
                
                <Route path="/Brands" element={<Brands />} />
                
                <Route path="/Compliance" element={<Compliance />} />
                
                <Route path="/Contact" element={<Contact />} />
                
                <Route path="/Distribution" element={<Distribution />} />
                
                <Route path="/Home" element={<Home />} />
                
                <Route path="/Industries" element={<Industries />} />
                
                <Route path="/Privacy" element={<Privacy />} />
                
                <Route path="/Terms" element={<Terms />} />
                
                <Route path="/NDAForm" element={<NDAForm />} />
                
                <Route path="/NDAForm_ENG" element={<NDAForm_ENG />} />
                
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}