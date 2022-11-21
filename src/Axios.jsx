import React, {useEffect,useState} from 'react'
import axios from 'axios';
const apiurl="https://jsonplaceholder.typicode.com/posts"
function Axios() {
const  [setdata,usedata]=useState()
 


 useEffect(()=> {
  axios.get(`${apiurl}/1`).then((res)  =>{usedata(res.data)
console.log(res.data)
});
    


},[]);
 
 
    return (
    <div>

<div>{setdata.title}</div>


    </div>
  )
}

export default Axios