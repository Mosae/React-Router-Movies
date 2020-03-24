import React, { useState } from 'react';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import SavedList from './Movies/SavedList';
import { Route } from 'react-router-dom';

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
				<MovieList />
			</Route>
		</div>
	);
};

export default App;
