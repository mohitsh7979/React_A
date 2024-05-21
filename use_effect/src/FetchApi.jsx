import React, { useEffect, useState } from 'react'
import './App.css'

function FetchApi() {

    const [Apidata,setApidata] = useState([]);
   
    async function Myapi(){

        let data = await fetch('https://dummyjson.com/products');
        let json_data = await data.json();
        setApidata(json_data.products)
      
    }


    useEffect(()=>{

        Myapi()

    },[])


    
  return(

    Apidata.map((item)=>(
    <div className='card'>
        <div className="image">
            <img src={item.images[0]} alt="" />
        </div>
        <div className="content">
            <h2>Title :{item.title}</h2>
            <h3>Price :{item.price}</h3>
            <h4>Description :{item.description}</h4>
        </div>
    </div>
   ))
    
  )
}

export default FetchApi;