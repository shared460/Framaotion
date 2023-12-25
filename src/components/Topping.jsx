import React from "react";
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'

export default function Topping({addTopping, pizza}){

    const toppings = ['mushroom','peppers','onions','olives','extra-cheese','tomatoes'];
    console.log(pizza.topping);
    

    return(
        <motion.div className="base" animate={{background:'#ffd6ff', marginTop:'10px'}}>
            <div className="container" >
                <motion.h3 animate={{fontSize:'40px', color:'black', y:-50}}>step:2 choose Topping</motion.h3>
                <ul>
                    {toppings.map((element, index)=>{
                        return(
                            <motion.li onClick={()=>{addTopping(element)}}
                                animate={{fontSize:'35px', color:'black', background:'white'}} whileHover={{scale: 1.2, textShadow: '1px 1px 1px black', originX:0}} transition={{type:'spring'}}>{index+1}.{element}</motion.li>
                        )
                    })}
                </ul>
            </div>
            {pizza.topping.length > 0 && <Link to='/order'><motion.button className='button' initial={{x: '-100vw'}} animate={{x:0, background:'white' ,color:'black', borderColor:'black'}} transition={{duration:1, type:'spring', stiffness:120}} whileHover={{background:'#e0fbfc'}}>next</motion.button></Link>}
        </motion.div>
    )
}

