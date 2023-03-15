import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GuestPage from './page/guest/GuestPage';
import UserPage from './page/user/UserPage';

import styles from './App.module.scss';
import { Lk } from './page/user/lk';

const token=''
function App() {
  return (
    <div className={styles.App}>
        <Routes>
          <Route path='/' element={<GuestPage/>}/>
          <Route path='/user/lk' element={<UserPage/>}/>
          
        </Routes>
    </div>
  );
}

export default App;
