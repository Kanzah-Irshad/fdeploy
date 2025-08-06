// // === frontend/src/pages/Dashboard.jsx ===
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import './Dashboard.css';


// function Dashboard() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/auth/profile', { withCredentials: true })
//       .then(res => setUser(res.data))
//       .catch(() => setUser(null));
//   }, []);

//   if (!user) return <div className="p-8">Loading...</div>;

//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-bold">Dashboard</h1>
//       <p>Name: {user.name}</p>
//       <p>Email: {user.email}</p>
//     </div>
//   );
// }

// export default Dashboard;
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.css';

function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/auth/profile', { withCredentials: true })
      .then(res => setUser(res.data))
      .catch(() => setUser(null));
  }, []);

  if (!user) return <div className="dashboard-container">Loading...</div>;

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="dashboard-info">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
    </div>
  );
}

export default Dashboard;
