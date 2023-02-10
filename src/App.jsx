import  react , { useState } from 'react'

import  {  Authenticator}  from "@aws-amplify/ui-react";
import {Amplify} from 'aws-amplify'
import awsconfig from  './aws-exports'
Amplify.configure(awsconfig)

// dynamo db + Amplify set up an then lmbda 
function App() {
return (
  <div>
    <Authenticator>
      {({ user, signOut }) => {
        return (
          <div >
         Hello Iam Premium page
          </div>
        );
      }}
    </Authenticator>
  </div>
);
}

export default App;
