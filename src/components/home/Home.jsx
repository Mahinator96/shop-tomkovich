import React from "react";
import { useSelector } from "react-redux";
import Poster from "../poster/Poster";
import Products from "../product/Product";

const Home = () => {
	const { list } = useSelector(({ products }) => products);

	return (
		<>
			<Poster />
			<Products products={list} amount={5} title='Trending'/>
		</>
	)
};

export default Home;