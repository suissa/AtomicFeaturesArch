
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import Schedule from './features/Schedule/pages/SchedulePage';
import ButtonDemo from './shared/atoms/Button/examples';
import UserProfilePage from './features/UserProfile/pages/UserProfilePage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/products" element={<Products />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/button/demo" element={<ButtonDemo />} />
        <Route path="/user/profile" element={<UserProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;