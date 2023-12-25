import React from "react";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'

export default function Home(){

    return(
        <motion.div className='home' animate={{marginTop: '10px', background:'#ffd6ff', opacity: 1}}>
            <motion.h1 animate={{fontSize: '60px', color:'black', y:-50}}>welcome to pizza point</motion.h1>
            <Link to='/base'><motion.button className='button' animate={{scale: 1.2, borderColor:'black', color:'black', background:'white'}} whileHover={{background:'#e0fbfc', scale:1.5}}>Create - your - Pizza!</motion.button></Link> 
        </motion.div>
    )

}