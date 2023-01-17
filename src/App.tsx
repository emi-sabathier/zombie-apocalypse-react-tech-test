import React from 'react';
import './assets/styles/global.css';
import { UIHeader } from './components/navigation/UIHeader';
import { Route, Routes } from 'react-router-dom';
import { HomeView } from './components/views/HomeView';
import { NotFoundView } from './components/views/NotFoundView';
import { MateProfileView } from './components/views/MateProfileView';

function App() {
    return (
        <>
            <UIHeader />
            <Routes>
                <Route path="/" element={<HomeView />} />
                <Route path="/mates/:id" element={<MateProfileView />} />
                <Route path="*" element={<NotFoundView />} />
            </Routes>
        </>
    );
}

export default App;
