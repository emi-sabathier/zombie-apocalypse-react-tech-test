// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';
import './assets/styles/global.css';
import { UIHeader } from './components/UIHeader';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/views/Home';
import { NotFound } from './components/views/NotFound';
import { MateProfile } from './components/views/MateProfile';

function App() {
    return (
        <>
            <UIHeader />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mates/:id" element={<MateProfile />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;
