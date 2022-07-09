
import './App.css';
import {fetchUser} from './services/rando_user';
import { useState, useEffect } from 'react';


function App() {
  document.title = "Rando User"

  const [currentUser, setCurrentUser] = useState(null)




const refreshUser = async () => {
      const result = await (fetchUser());
     
      setCurrentUser (result)
     }
     
   

  
  
  

  useEffect( () => {
    refreshUser();
   
  }, []);

  
  console.log(currentUser)

  return (
    <div className="App">
      <header>Rando User</header>
      <button onClick={refreshUser}>Refresh</button>
      <div>{JSON.stringify(currentUser)}</div>

      

    </div>
  );
}

export default App;
