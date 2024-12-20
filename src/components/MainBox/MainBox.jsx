import { MainBoxContainer } from './MainBoxStyles';
import Home from "../../routes/Home/Home"
import { Outlet, Routes } from 'react-router';
import { Route } from 'lucide-react';


const MainBox = () => {
  return (
    <MainBoxContainer>
        <Outlet/>
    </MainBoxContainer>
  );
};

export default MainBox;
