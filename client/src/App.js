import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';



import SignIn from './views/SignIn';
import SignUp from './views/SignUp';
import Home from './views/Home';
import HowItWorks from './views/HIW';
import Help from './views/Help';
import Contact from './views/Contact';
import Navbar from './components/Navbar';
import Footer from './components/footer';

function App  ()  {
  
  
  return (
      <div className="App">
       
      <Router>
      <Navbar/>
      <header></header>
       <Routes>
        <Route path ='/' element={<Home/>} />
        <Route path ='/signin' element={<SignIn/>} />
        <Route path ='/signup' element={<SignUp />} />
        <Route path ='/howitworks' element={<HowItWorks/>} />
        <Route path ='/help' element={<Help/>} />
        <Route path ='/contact' element={<Contact/>} />
       </Routes>
      </Router>
      <Footer />
        
    
      </div>
  );

  
      
   
};
export default App;