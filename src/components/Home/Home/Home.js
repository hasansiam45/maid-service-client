import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import ChooseUs from '../ChooseUs/ChooseUs';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar' 
import Review from '../Review/Review';
import Services from '../Services/Services';
const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            
            <Services></Services>
            
            <AboutUs></AboutUs>
            <ChooseUs></ChooseUs>
            <Review></Review>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
}

export default Home;
