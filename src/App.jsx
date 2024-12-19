import { useState } from 'react';
import './App.css';
import MainBox from './components/MainBox/MainBox';
import SideBar from './components/SideBar/SideBar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ display: 'flex' }}>
      <SideBar />
      <MainBox />
    </div>
  );
}

export default App;
