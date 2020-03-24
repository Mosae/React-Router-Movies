import React, { useState } from 'react';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import SavedList from './Movies/SavedList';
import { Route, Link } from 'react-router-dom';

const App = () => {
	const [savedList, setSavedList] = useState([]);

	const addToSavedList = movie => {
		setSavedList([...savedList, movie]);
	};

	return (
		<div>
			<SavedList list={savedList} />

			<Route exact path="/movies/:moviesID">
				<Movie />
			</Route>

			<Route exact path="/">
				<Link to={`/movies/${savedList}`}>
					<MovieList movie={savedList} />
				</Link>
			</Route>
		</div>
	);
};

export default App;
