import React, { useState, useEffect } from 'react';
import { movies$ } from './utils/movies';
import Card from './components/card/Card';
import FilterCategory from './components/filter/FilterCategory';

export const App = () => {
	const [movies, setMovies] = useState([]); // state for movies copy
	const [categories, setCategories] = useState([]);

	// make a copy from movies api
	const fetchMovies = () => {
		movies$
			.then((data) => {
				setMovies(data);
			})
			.then(() => {
				getCategories();
			})
			.catch((err) => console.error(err));
	};

	// fetch all categories name return from movies list
	const getCategories = () => {
		const uniqueCategories = [...new Set(movies.map((movieMap) => movieMap.category))];
		setCategories(
			uniqueCategories.map((el) => ({
				name: el,
				isSelected: true
			}))
		);
	};

	// select one or more category
	const handleCategorySelected = (event) => {
		setCategories((prevState) =>
			prevState.map((el) => ({
				...el,
				isSelected: el.name === event.target.name ? !el.isSelected : el.isSelected
			}))
		);
	};

	useEffect(() => {
		fetchMovies();
	}, [movies]);

	return (
		<>
			<header>
				<h1 className='app-title'>Card App</h1>
				<div className='container'>
					<nav className='navbar'>
						<div className='filter-container'>
							{categories &&
								categories.map((category, idx) => (
									<FilterCategory
										key={idx + category}
										name={category.name}
										handleCategorySelected={handleCategorySelected}
									/>
								))}
						</div>
						<ul className='nav-list'>
							<li className='nav-item'>
								<button>Showing Btn</button>
							</li>
							<li className='nav-item'>
								<button>Prev Btn</button>
							</li>
							<li className='nav-item'>
								<button>Next Btn</button>
							</li>
						</ul>
					</nav>
				</div>
			</header>
			<main>
				<div className='container card-grid'>
					{movies &&
						movies
							.filter((movie) =>
								categories
									.filter((category) => category.isSelected)
									.map((c) => c.name)
									.includes(movie.category)
							)
							.map((movie, idx) => <Card key={idx} movie={movie} />)}
				</div>
			</main>
		</>
	);
};

export default App;
