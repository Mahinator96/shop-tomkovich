import React from "react";
import { Link } from "react-router-dom";

import styles from '../../styles/Categories.module.css';

const Categories = ({ title, products = [], amount}) => {
	const list = products.filter(( item, i ) => i < amount);

	return (
		<section className={styles.section}>
			<h2>{title}</h2>

			<div className={styles.list}>
				{list.map(({ id, name, image}) => {
					return (
						<Link className={styles.item} key={id} to={`/categories/${id}`}>
							<div className={styles.image} style={{ backgroundImage: `url(${image})`}} />
							<h3 className={styles.title}>{name}</h3>
						</Link>
					)
				})}
			</div>
		</section>
	);
};

export default Categories;