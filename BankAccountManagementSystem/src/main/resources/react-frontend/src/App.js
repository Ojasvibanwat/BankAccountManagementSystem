import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListClientComponent from './components/ListClientComponent';
import CreateClientComponent from './components/CreateClientComponent';
import ClientDeposit from './components/ClientDeposit';
import ClientWithdraw from './components/ClientWithdraw';
import ClientViewDetails from './components/ClientViewDetails';
import Home from './components/Home';
import ClientHome from './components/ClientHome';
import About from './components/About';

function App() {
  return (
    <div >
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/clients" element={<ListClientComponent />}></Route>
            <Route path="/createClient" element={<CreateClientComponent />}></Route>
            <Route path="/updateClient/:id" element={<CreateClientComponent />}></Route>
            <Route path="deposit/:id" element={<ClientDeposit />}></Route>
            <Route path="withdraw/:id" element={<ClientWithdraw />}></Route>
            <Route path="/viewDetails/:id" element={<ClientViewDetails />}></Route>
            <Route path="/clientHome" element={<ClientHome />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;