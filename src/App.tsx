import { CssBaseline } from '@mui/material';
import BottomNavigationBar from './components/BottomNavigationBar';
import CardsListPage from "./pages/CardsListPage";

function App() {

  return (
    <>
      <CssBaseline />
      <CardsListPage />
      <BottomNavigationBar />
    </>
  )
}

export default App;
