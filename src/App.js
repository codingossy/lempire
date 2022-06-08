import React, {useEffect} from 'react';
import Books from './components/Books';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Team from './components/Team';



import Aos from "aos";
import "aos/dist/aos.css";



function App() {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  
  return (

    < div className=''>
      <Navbar />
      <Home />
      <Cards />
      <Books />
      <Team />
      <Footer />

     

    </div>
  );
}

export default App;
