
import './App.css';
import { fetchUser } from './services/rando_user';
import { useState, useEffect } from 'react';
import UserSummary from './components/UserSummary';


function App() {
  document.title = "Rando User"

  const [currentUser, setCurrentUser] = useState(null)

  const refreshUser = async () => {
    const result = await (fetchUser());

    setCurrentUser(result)
  }

  useEffect(() => {
    refreshUser();

  }, []);

  return (
    <div className="App">
      <header>Rando User</header>
      <button onClick={refreshUser}>Refresh</button>
      {/* <div>{JSON.stringify(currentUser)}</div> */}
      <UserSummary userData={currentUser}/>



    </div>
  );
}

export default App;
