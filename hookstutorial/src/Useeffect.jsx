import React from 'react'
import { useState,useEffect ,useRef} from 'react'
function Useeffect() {
  let count3=useRef(0);
  useEffect(()=>{
    count3.current=count3.current+1;
  })
  let [count1,setcount1]=useState(0);
  let [count2,setcount2]=useState(0);
  useEffect(()=>{
    console.log("count1 incremented");
  },[count1])
  useEffect(()=>{
    console.log("count 2 incremented")
  },[count2])
  return (
    <>
    <h1>{count1}</h1>
    <button onClick={()=>setcount1(count1+1)}>count1</button>
    <h1>{count2}</h1>
    <button onClick={()=>setcount2(count2+1)}>count2</button>
    <h1>{count3.current}</h1>
    </>
  )
}

export default Useeffect