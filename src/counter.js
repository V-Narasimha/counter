import { useState } from "react"
import "./style.css"
import Tap from "./assets/taptally.png"
const Header=()=>{
    return(
        <div className="header">
            <div className="logo">
            <img src={Tap} alt="" />
            <h2>TapTally</h2>
            </div>
            <h5>Precision in every tap.</h5>
        </div>
    )
}
const Counter = () => {
    let [num, numset] = useState(0)
    let [pa, pset] = useState(true)
    const increment = (event) => {
        numset(++num)
        pset(true)
    }
    const decrement = () => {
        if (num === 0) {
            pset(false)
        }
        if (num > 0)
            numset(--num)
    }
    const reset = () => {
        numset(0)
        pset(true)
    }
    return (
        <>
        <Header/>
            <h1 style={{ textAlign: "center",color:"white" ,fontFamily: "Playwrite IE,cursive"}}>Counter</h1>
            <div style={{display:"flex",justifyContent:"center"}}>
            <div id="container">
                <div className="counter">
                    <button className="decrement" onClick={decrement}>-</button>
                    <h2>{num}</h2>
                     <button className="increment" onClick={increment}>+</button>
                </div>
                <button className="reset" onClick={reset}>Reset</button>
                <p style={{ display: pa ? "none" : "block", color: "red" }}>⚠️ Minimum Limit reached</p>
            </div>
            </div>
        </>
    )
}
export default Counter