import React from "react";
import { Link } from 'gatsby';
import Header from '../components/header.js';
export default function Home(){


     return (
       <div>
       

       <Link to='/contact/'>Contacts</Link>

       <h1 style={{color: 'lightskyblue'}}>Hello Gatsby</h1>
       <p>What a world</p>
       
       <img src="https://source.unsplash.com/random/400x200" alt="" />

       
       </div>
     );
}