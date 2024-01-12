import { useState, useEffect } from 'react';
import Auth from './components/auth/Auth'
import {Routes, Route} from 'react-router-dom';

function App() {

  const [ sessionToken, setSessionToken ] = useState('');

  const updateToken = newToken => {
    localStorage.setItem("token", newToken);
    setSessionToken(newToken)
  }

  useEffect(() => {
    if(localStorage.getItem('token')) {
      setSessionToken(localStorage.getItem('token'))
    }
  },[])

  return (
    <div className="App">
      <Routes>
        <Route 
          path="/" 
          element={<Auth updateToken={updateToken} />} 
          />
        <Route
          path="/movie"
          element={<h2>Movie Section Placeholder</h2>}
          />
      </Routes>
    </div>
  );
}

export default App