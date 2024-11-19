import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AdminProvider } from './contexts/AdminContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import SubmitPage from './pages/SubmitPage';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AdminProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/submit" element={<SubmitPage />} />
            </Routes>
          </Layout>
        </AdminProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;