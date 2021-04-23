import React from 'react';
import Header from '../components/header.js';
import { Link } from 'gatsby';


export default function Contact(){



    return(

        <div>
          
          <Link to = '/'>Home</Link>
          <Header entry="Contact"/>
          <p>Send us a message</p>

        </div>


    )
}