import {  Routes, Route, Navigate} from 'react-router-dom';

import GuestPage from './page/guest/GuestPage';
import MainInfoPage from './page/mainInfoPage/MainInfoPage';
import SecurityPage from './page/securityPage/SecurityPage';
import StylePage from './page/stylePage/StylePage';
import HistoryPage from './page/historyPage/HistoryPage';
import RatePage from './page/ratePage/RatePage';
import PatternPage from './page/patternPage/PatternPage';

import styles from './App.module.scss';
import Chat from './page/guest/Chat';

function App() {
  return (
    <div className={styles.App}>
        <Routes>
          <Route path='/' element={<GuestPage/>}/>
            <Route path='lk'>
              <Route path='info' element={<MainInfoPage />}/>
              <Route path='security' element={<SecurityPage />}/>
              <Route path='style' element={<StylePage />}/>
              <Route path='rate' element={<RatePage />}/>
              <Route path="*" element={<Navigate to="info" replace />} />
            </Route>
          <Route path='request-history' element={<HistoryPage/>}/>
          <Route path='pattern' element={<PatternPage/>}/>
          <Route path='chat' element={<Chat/>}/>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    </div>
  );
}

export default App;
