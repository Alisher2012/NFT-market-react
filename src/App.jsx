import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Marketplace from './pages/Marketplace';
import Rankings from './pages/Rankings';
import ConnectWallet from './pages/ConnectWallet';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Marketplace />} />
        <Route path="/rankings" element={<Rankings />} />
        <Route path="/connect-wallet" element={<ConnectWallet />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
