import React from "react";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'

export default function Home(){

    const headVariant = {
        animate:{
            fontSize: '60px', 
            color:'black', 
            y:[0, 50, -50],
            x: [0, -20, 20, 0],
            transition: {delay: 0.1},
        },
        hover:{
            scale:1.5,
            textShadow: '2px 2px 4px green',
        }
    }


    const buttonVariants = {
        animate:{
            scale: 1.2,
            borderColor:'black', 
            color:'black', 
            background:'white',
            textShadow: 'none',
            rotate: -2,
        },
        hover: {
            background:'#e0fbfc',
            textShadow: '2px 2px 2px red',
            transition: {
                duration: 0.3,
                repeat: Infinity,
            }
        }
    }

    return(
        <motion.div className='home' animate={{marginTop: '10px', background:'#ffd6ff', opacity: 1}}>
            <motion.h1 
                variants={headVariant}
                animate='animate'
                whileHover='hover'>
                    welcome to pizza point
            </motion.h1>
            <Link to='/base'>
                <motion.button className='button' 
                    variants={buttonVariants}
                    animate="animate" 
                    whileHover="hover">
                        Create - your - Pizza!
                </motion.button>
            </Link> 
        </motion.div>
    )

}