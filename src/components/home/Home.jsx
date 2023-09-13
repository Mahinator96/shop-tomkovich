import React from "react";
import { useSelector } from "react-redux";
import Banner from "../banner/Banner";
import Categories from "../categories/Categories";
import Poster from "../poster/Poster";
import Products from "../product/Product";

const Home = () => {
	const { products, categories } = useSelector((state) => state);

	return (
		<>
			<Poster />
			<Products products={products.list} amount={5} title='Trending' />
			<Categories products={categories.list} amount={5} title='Worth seeing' />
			<Banner />
		</>
	)
};

export default Home;