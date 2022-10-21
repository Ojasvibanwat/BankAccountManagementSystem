import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
    import Home from './pages';
    import About from './pages/about';
    import Blogs from './pages/blogs';
    import SignUp from './pages/signup';
    import Contact from './pages/contact';
    import Deposit from './components/client/Deposit';  
    import Withdraw from './components/client/Withdraw';
    import Login from './components/Login';
    import  AdminLogin  from './components';
    import AdminHome from './components/admin/AdminHome';
    import Add from './components/admin/Add';
    import DeleteC from './components/admin/DeleteC';
    import Retrieve from './components/admin/Retrieve';
    import View from './components/admin/View';

    function App() {
    return (
        <Router>
        <Navbar />
        <Routes>
            <Route exact path='/' exact_1 element={<Home />} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/blogs' element={<Blogs/>} />
            <Route path='/sign-up' element={<SignUp/>} />
            <Route path='/Deposit' element={<Deposit/>} />
            <Route path='/Withdraw' element={<Withdraw/>} />
            <Route path='/Login' element={<Login/>} />
            <Route path='/AdminLogin' element={<AdminLogin/>} />
            <Route path='/AdminHome' element={<AdminHome/>} />
            <Route path="/Add" element={<Add/>}/>
            <Route path="/DeleteC" element={<DeleteC/>}/>
            <Route path="/Retrieve" element={<Retrieve/>}/>
            <Route path="/View" element={<View/>}/>


            


        </Routes>
        </Router>
    );
    }
      
    export default App;