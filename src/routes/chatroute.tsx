
  import { useContext } from 'react'
  import { AuthContext } from '../context/auth-context'
  import { ConnectionState } from '../components/connectionState';
import { ConnectionManager } from '../components/connectionManager';
import { Events } from "../components/Events";
import { MyForm } from '../components/myForm';

  function ChatRoute() {
    useContext(AuthContext)
    
    return(
      /**
      * Extract the currrentUser from the context, if you want to
      * get the User info, like the email, display name , etc.
      */
      <div className="App">
      <ConnectionState isConnected={ true } />
      <Events events={ Events } />
      <ConnectionManager />
      <MyForm />
    </div>

      
    )
  }
  export default ChatRoute
  