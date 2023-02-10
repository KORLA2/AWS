import  react , { useState,useEffect } from 'react'
import  {  Authenticator}  from "@aws-amplify/ui-react";
import {Amplify,API, graphqlOperation} from 'aws-amplify'
import awsconfig from  './aws-exports'
import '@aws-amplify/ui-react/styles.css'
import { listTodos } from './graphql/queries'; 

Amplify.configure(awsconfig)

// dynamo db + Amplify set up an then lmbda 
function App() {
let [Todos,setTodos]=useState([])

useEffect( ()=>{
      let func =async ()=>{
  try {
    let list = await API.graphql(graphqlOperation(listTodos));

   setTodos(list.data.listTodos.items);
   console.log(list)

  } catch (err) {
      console.log(err)
  }
      }
      
      func()
}
,[])



return (
  <div style={{height:"100%",width:"100%",display:"flex",justifyContent:'center',alignItems:'center'}}>
    <Authenticator>
      {({ user, signOut }) => {
        {/* console.log(user) */}
        return (
          <div>
{

Todos.map(e=>e.title)         
}
          </div>
        );
      }}
    </Authenticator>
  </div>
);
}

export default App;
