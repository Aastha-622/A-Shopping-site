import React from 'react'
import Navbar from '../Components/Navbar'
import Know from '../Components/Know';
import Slider from '../Components/Slider';
import Categories from '../Components/Catogories';
import Products from '../Components/Products';
import NewsLetter from '../Components/NewsLetter';
import Footer from '../Components/Footer';


const Home = () => {
	return (
		<div>

<Know/>
		<Navbar/>	
		<Slider/>
		<Categories/>
		<Products/>
		<NewsLetter/>
		<Footer/>
		</div>
	)
}

export default Home
