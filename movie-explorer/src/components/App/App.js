import React, { useState } from 'react';
import './App.css';
import Header from '../Header/Header';
import '../../vendor/normalize.css';
import '../../vendor/fonts/inter.css';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function App() {
  const [theme, setTheme] = useState('pink');

  return (
    <div className="root">
      <Header isAuth={false} theme={theme}/>
      <main>
        <Routes>
          <Route path="/" element={<Main/>}></Route>
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
