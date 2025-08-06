// // import { useState } from 'react';
// // import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';
// // import './Signup.css';

// // function Signup() {
// //   const [form, setForm] = useState({ name: '', email: '', password: '' });
// //   const navigate = useNavigate();

// //   const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
// //   const handleSubmit = async e => {
// //     e.preventDefault();
// //     await axios.post('http://localhost:5000/api/auth/signup', form);
// //     navigate('/login');
// //   };

// //   return (
// //     <form onSubmit={handleSubmit} className="signup-form">
// //       <input name="name" placeholder="Name" onChange={handleChange} className="block mb-2 p-2 border" />
// //       <input name="email" placeholder="Email" onChange={handleChange} className="block mb-2 p-2 border" />
// //       <input name="password" placeholder="Password" type="password" onChange={handleChange} className="block mb-2 p-2 border" />
// //       <button type="submit" className="bg-blue-500 text-white px-4 py-2">Signup</button>
// //     </form>
// //   );
// // }

// // export default Signup;
// import { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import toast from 'react-hot-toast'; // ✅ import toast
// import './Signup.css';

// function Signup() {
//   const [form, setForm] = useState({ name: '', email: '', password: '' });
//   const navigate = useNavigate();

//   const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async e => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:5000/api/auth/signup', form);
//       toast.success('Signup successful!');
//       navigate('/login');
//     } catch (error) {
//       toast.error('Signup failed. Try again!');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="signup-form">
//       <input name="name" placeholder="Name" onChange={handleChange} className="block mb-2 p-2 border" />
//       <input name="email" placeholder="Email" onChange={handleChange} className="block mb-2 p-2 border" />
//       <input name="password" placeholder="Password" type="password" onChange={handleChange} className="block mb-2 p-2 border" />
//       <button type="submit" className="bg-blue-500 text-white px-4 py-2">Signup</button>
//     </form>
//   );
// }

// export default Signup;
import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import './Signup.css';

function Signup() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/signup', form);
      toast.success('Signup successful!');
      navigate('/login');
    } catch (error) {
      toast.error('Signup failed. Try again!');
    }
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Create an Account</h2>
        <input name="name" placeholder="Name" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="password" placeholder="Password" type="password" onChange={handleChange} />
        <button type="submit">Signup</button>
        <p className="login-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
