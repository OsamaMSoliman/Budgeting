import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import CardsListPage from "./pages/CardsListPage";
import Page404 from "./pages/Page404";
import ItemsPage from "./pages/ItemsPage";
import ExportImportPage from "./pages/ExportImportPage";

export default () => (
  <BrowserRouter>
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<ItemsPage/>} />
        <Route path="/export" element={<ExportImportPage/>} />
        <Route path="/import" element={<ExportImportPage/>} />
        <Route path="/cards" element={<CardsListPage />} />
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  </BrowserRouter>
);
