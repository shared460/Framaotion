import React from "react";
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';

export default function Order({pizza}){

    const [show, setShow] = React.useState(true)

    const colors = ['#6f1d1b', '#27a300', '#432818', '#99582a', '#3b6064']
    
    ///@dev getting an random number from 0 to length of array, making it floor
    const ranomdomNumber = Math.floor(Math.random() * colors.length)

    let toppings='';
    pizza.topping.forEach(element => {
        toppings = toppings + (element+', ');
    });

    setTimeout(()=>{
        setShow(false)
    },4000)

    return(
        <motion.div className='base' animate={{background:'#ffd6ff', marginTop:'10px'}}>
            <motion.div className='container' animate={{color:'black'}}>
                <AnimatePresence>
                    {show && <motion.p exit={{y: -1000}} animate={{fontSize:'40px'}}>Thank you for order <motion.span animate={{textShadow:'2px 2px 2px red', background:'white', borderRadius:'30px', fontSize:'50px'}}>;)</motion.span></motion.p>}
                </AnimatePresence>
                <motion.p animate={{fontSize:'30px'}}>you have ordered  {pizza.base}  with - <motion.p animate={{background:'white' , color:`${colors[ranomdomNumber]}`}} whileHover={{rotateZ:15}} className='toppingss'>{toppings.slice(0, toppings.length-2)}</motion.p></motion.p>
            </motion.div>
            <Link to='/'><motion.button className='button' initial={{x: '-100vw'}} animate={{x:0, background:'white' ,color:'black', borderColor:'black'}} transition={{duration:1, type:'spring', stiffness:120}} whileHover={{background:'#e0fbfc'}}>Back to Main Page</motion.button></Link>
        </motion.div>
    )
}