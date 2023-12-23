import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';

import Home from './components/pages/Home/HomePage';
import NotFound from './components/pages/NotFound/NotFoundPage';

import CatchAllRoute from './Builderio';
import ButtonsPage from './components/pages/ButtonsPage/ButtonsPage';

const App = () => {
  
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/buttons' element={<ButtonsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <CatchAllRoute />
    </MainLayout>
  );
};

export default App;
