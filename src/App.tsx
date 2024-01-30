import { CssBaseline, Fab } from '@mui/material';
import BottomNavigationBar from './components/BottomNavigationBar';
import { Add } from '@mui/icons-material';
import { useState } from 'react';
import { Home } from './pages/Home';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <CssBaseline />
      <Home />
      <BottomNavigationBar />
      <Fab color="secondary" sx={{ position: "fixed", bottom: 60, right: 10 }} onClick={() => setOpen(true)}>
        <Add />
      </Fab >
    </>
  )
}

export default App;
