import React from "react";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'

export default function Base({base, pizza}){

    const bases = ['Classic','Thin & Crispy','Thick Crust'];

    console.log(base)
    console.log(pizza)

    return(
        <motion.div className='base' animate={{background:'#ffd6ff', marginTop:'10px'}}>
            <div className='container'>
                <motion.h3 animate={{fontSize:'40px', color:'black', y:-50}}>step.1. CHOOSE-YOUR-BASE</motion.h3>
                <ul>
                    {
                        bases.map((element, index)=>{
                            return(
                                <motion.li className='lsit' onClick={()=>{
                                    base(element);
                                }} animate={{fontSize:'35px', color:'black', background:'white'}} whileHover={{scale: 1.2, textShadow: '1px 1px 1px black', originX:0}} transition={{type:'spring'}}>{index+1}.{element}</motion.li>
                            )
                        })
                    }
                </ul>
            </div>
            {pizza.base && <Link to='/topping'><motion.button className='button' initial={{x: '-100vw'}} animate={{x:0, background:'white' ,color:'black', borderColor:'black'}} transition={{duration:1, type:'spring', stiffness:120}} whileHover={{background:'#e0fbfc'}}>next</motion.button></Link>}
        </motion.div>
    )
}