import  react , { useState,useEffect } from 'react'

import awsconfig from  './aws-exports'
import {TextField,Button} from '@material-ui/core'


function App() {
let [base, setbase] = useState("");
let [exponent, setexponent] = useState("");
let myHeaders=new Headers();
myHeaders.append('Content-Type','application/json')
function post(){

fetch(" https://iab304uy8a.execute-api.ap-south-1.amazonaws.com/Dev",{

method:'POST',
headers:myHeaders,
body:JSON.stringify({base:base,exponent:exponent}),
redirect:'follow'
}).then(res=>res.json()).then(res=>console.log(res.body));
}

return (
<div>
<TextField variant="outlined" onChange={(e)=>{setbase(e.target.value)}} />
<TextField variant="outlined" onChange={(e)=>{setexponent(e.target.value)}}/>
<Button color='secondary' variant='contained' onClick={post}>Calc</Button>
  </div>
);
}

export default App;
