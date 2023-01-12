import React from 'react';
import './assets/styles/global.css';
import { UIHeader } from './components/shared/UIHeader/UIHeader';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/views/Home';
import { NotFound } from './components/views/NotFound';

function App() {
    return (
        <>
            <UIHeader />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;
