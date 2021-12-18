import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from './modules/mainLayout';
import { Statistics } from './modules/statistics';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Navigate replace to="statistics" />} />
        <Route path="statistics" element={<Statistics />} />
      </Route>
    </Routes>
  );
}

export default App;
