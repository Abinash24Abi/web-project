import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import Login from './Login';

function SampleHome() {
  
  const [showLogin, setShowLogin] = useState(false);
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
  
    if (location.state && 'con' in location.state) {
      // setShowLogin(location.state.con);
      // navigate(location.pathname, { replace: true });
      setShowLogin(false)
    }

    const timer = setTimeout(() => {
      console.log('Checking auth status...');

      axios.get('http://localhost:8989', { withCredentials: true })
        .then(res => {
          if (res.data.Status === 'unauthorized') {
            setShowLogin(true);
          } else {
            setName(res.data.name);
          }
        })
        .catch(err => {
          console.error('Error during auth check:', err);
        });
    }, 5000);

    return () => clearTimeout(timer);

  }, [location.state, navigate, location.pathname]);

  const handleLogout = () => {
    axios.get('http://localhost:8989/logout', { withCredentials: true })
      .then(() => navigate('/'));
  };

  return (
    <div>
      <h1>Welcome, {name}</h1>
      <button onClick={handleLogout}>Logout</button>
      {showLogin && <Login />}
    </div>
  );
}

export default SampleHome;
