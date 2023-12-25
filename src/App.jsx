import React from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './components/Home.jsx';
import Base from './components/Base.jsx';
import Topping from './components/Topping.jsx';
import Order from './components/Order.jsx';
import './App.css';

export default function App(){
  
  const [pizza, setPizza] = React.useState({base:'', topping:[]});

  const addBase = (base) => {
      setPizza({...pizza, base})
  }


  const addTopping = (topping) => {
      let newToppings;
      if(!pizza.topping.includes(topping)){
          newToppings = [...pizza.topping, topping];
      }else{
          newToppings = [...pizza.topping];
      }
      setPizza({...pizza, topping: newToppings});
  }
  

  return(
    <BrowserRouter>
      <nav className='heading'>
        <motion.h1 initial={{y: -1, opacity:0}} animate={{y:0, opacity:1, color:'black', background:'white', borderRadius:'60px'}} transition={{duration:4}}>Pizza-Mania</motion.h1>
        <Link to='/'><motion.h2 animate={{color:'black'}} whileHover={{scale:1.2, background:'white'}} className='home-link'>Home...</motion.h2></Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/base' element={<Base base={addBase} pizza={pizza}/>}/>
        <Route path='/topping' element={<Topping addTopping={addTopping} pizza={pizza}/>}/>
        <Route path='/order' element={<Order pizza={pizza}/>}/>
      </Routes>
    </BrowserRouter>
  )
}