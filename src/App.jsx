import { useState } from 'react';
import './App.css';
import MainBox from './components/MainBox/MainBox';
import SideBar from './components/SideBar/SideBar';
import Home from './routes/Home/Home';
import { BrowserRouter, Routes,Route } from 'react-router'
import Movies from './routes/Movies/Movies';
import TvShows from './routes/TvShows/TvShows';
import BookMarked from './routes/BookMarked/BookMarked';

function App() {
  const [count, setCount] = useState(0);

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
