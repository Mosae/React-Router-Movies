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
			<Route path="/movies/:moviesID" component={Movie}></Route>
			<SavedList list={savedList} />

			<Route path="/">
				<Link to="/">
					{' '}
					<MovieList />
				</Link>
			</Route>
		</div>
	);
};

export default App;
