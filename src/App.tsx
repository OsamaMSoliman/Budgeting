import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import CardsListPage from './pages/CardsListPage';
import Page404 from "./pages/Page404";

export default () => (
  <BrowserRouter>
    <Routes>
      <Route path="/sign_in" element={<></>} />
      <Route path="/sign_up" element={<></>} />
      <Route element={<AppLayout />}>
        <Route path="/items" element={<></>} />
        <Route path="/cards" element={<CardsListPage />} />
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  </BrowserRouter>
);
