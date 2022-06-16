import React, {useState}from 'react';
import {homeData} from '../../dummyData'
import Home from './Home'
import './home.css'

const Homes=()=>{
    const [items,setItem]=useState(homeData)
    return (
        <>
            <section className="home">
                <Home items={items}/>
            </section>
            <div className="margin"></div>
        </>
    )
}
export default Homes