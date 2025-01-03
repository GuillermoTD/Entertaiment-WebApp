import { useState } from 'react';
import './App.css';
import MainBox from './components/MainBox/MainBox';
import SideBar from './components/SideBar/SideBar';
import Home from './routes/Home/Home';
import { BrowserRouter, Routes,Route } from 'react-router'
import Movies from './routes/Movies/Movies';
import TvShows from './routes/TvShows/TvShows';
import BookMarked from './routes/BookMarked/BookMarked';
import useHttpFetcher from './hooks/useHttpFetcher';

function App() {
  const apikey = import.meta.env.VITE_API_KEY
  const baseurl = import.meta.env.VITE_BASE_URL
  // const url = `${baseurl}search/?apiKey=${apikey}&type=movie,tv_series&page=2&search_field=name&search_value=Ed%20Wood'`
  const url = "https://api.themoviedb.org/3/discover/movie?api_key=f1e28524b94cb93db1eb770d2075b5ac&language=es-ES&sort_by=popularity.desc&page=1"

  const { data, error, loading } = useHttpFetcher(url);

  console.log(data)
  console.log(url)
  return (
    <div style={{ display: 'flex' }}>
      <SideBar />
      <Routes>
          <Route path="/" element={<MainBox />}>
            <Route index element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/tvshows" element={<TvShows>Hola, soy tvshows</TvShows>} />
            <Route path="/bookmarked" element={<BookMarked>Hola soy bookmarked</BookMarked>} />
          </Route>
      </Routes>
    </div>
  );
}

export default App;
