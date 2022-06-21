import './App.css';
import ConnectButton from './components/ConnectButton/ConnectButton';
import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layouts/Layout';
const Home = React.lazy(() => import('./pages/Home'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </Suspense>
  );
}

export default App;
