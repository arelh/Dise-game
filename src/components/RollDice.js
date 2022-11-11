// import React, { useState } from 'react'


// export default function RollDice({sides}) {
//     const[state,setState]=useState({
//         diel1:"one",
//         diel2:"two",
//         rolling:false,
//         totalScore:3,
//     })
//     const {diel1,diel2,rolling,totalScore}=state
//     const newDie1=  sides[Math.floor(Math.random()*sides.length)]
//     const newDie2=  sides[Math.floor(Math.random()*sides.length)]
//   return (
//     <div>RollDice</div>
//   )
// }
import "./RollDice.css"
import React from 'react'



function RollDice() {
  return (
    <div style={{Color: "lightblue"}}><button>RollDice</button></div>
  )
}

export default RollDice