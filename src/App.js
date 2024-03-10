import './App.css';
import { BrowserRouter  } from 'react-router-dom';
import Desktop from './components/Desktop';

function App() {
  return (
   <BrowserRouter>
    <Desktop />
  </BrowserRouter>
  );
}

export default App;
