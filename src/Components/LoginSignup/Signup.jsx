import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

function Signup() {
  const [input, setInput] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8989/signup', input);
      if (res.data.Status === 'success') {
        navigate('/login');
        // navigate('/',{state:false});
      } else {
        alert(res.data.Message || 'Signup failed');
      }
    } catch (err) {
      alert('Server error');
    }
  };

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center" style={{background:'black'}}>
      <div className="row shadow-lg w-100" style={{ maxWidth: '900px' }}>
        <div className="col-md-6 text-white d-flex flex-column justify-content-center align-items-center p-5 rounded-start" style={{background:'black',border:'2px solid white'}}>
          <h2>Join us!</h2>
          <p className="text-center">
            Let's get you on board. We’re excited to have you join our community!
          </p>
          <button className="btn btn-outline-light mt-3" onClick={() => navigate('/login')}>
            Already have an account? Login
          </button>
        </div>

        <div className="col-md-6 bg-white p-5 rounded-end">
          <h3 className="mb-4 fw-bold text-center">Create Account</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              className="form-control mb-3 p-2"
              placeholder="Name"
              value={input.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              className="form-control mb-3 p-2"
              placeholder="Email"
              value={input.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              className="form-control mb-3 p-2"
              placeholder="Password"
              value={input.password}
              onChange={handleChange}
              required
            />
            <button type="submit" className="btn w-100" style={{background:'black' , color:'white'}}>Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
