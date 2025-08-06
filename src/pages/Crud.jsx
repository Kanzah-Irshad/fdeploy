// // import { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import './Crud.css';

// // function Crud() {
// //   const [items, setItems] = useState([]);
// //   const [form, setForm] = useState({ title: '', description: '' });
// //   const [editingId, setEditingId] = useState(null);

// //   const fetchItems = async () => {
// //     try {
// //       const res = await axios.get('http://localhost:5000/api/items', { withCredentials: true });
// //       setItems(res.data);
// //     } catch (err) {
// //       alert('Failed to load items');
// //     }
// //   };

// //   useEffect(() => {
// //     fetchItems();
// //   }, []);

// //   const handleChange = (e) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     if (!form.title || !form.description) return alert('Please fill all fields');

// //     try {
// //       if (editingId) {
// //         await axios.put(`http://localhost:5000/api/items/${editingId}`, form, { withCredentials: true });
// //         setEditingId(null);
// //         alert('Item updated');
// //       } else {
// //         await axios.post('http://localhost:5000/api/items', form, { withCredentials: true });
// //         alert('Item added');
// //       }
// //       setForm({ title: '', description: '' });
// //       fetchItems();
// //     } catch (err) {
// //       alert('Error submitting data');
// //     }
// //   };

// //   const handleDelete = async (id) => {
// //     if (!window.confirm('Are you sure you want to delete this item?')) return;
// //     await axios.delete(`http://localhost:5000/api/items/${id}`, { withCredentials: true });
// //     fetchItems();
// //   };

// //   const handleEdit = (item) => {
// //     setForm({ title: item.title, description: item.description });
// //     setEditingId(item._id);
// //   };

// //   return (
// //     <div className="crud-container">
// //       <h2>CRUD Dashboard</h2>
// //       <form onSubmit={handleSubmit} className="crud-form">
// //         <input
// //           type="text"
// //           name="title"
// //           value={form.title}
// //           onChange={handleChange}
// //           placeholder="Title"
// //         />
// //         <input
// //           type="text"
// //           name="description"
// //           value={form.description}
// //           onChange={handleChange}
// //           placeholder="Description"
// //         />
// //         <button type="submit">{editingId ? 'Update' : 'Add'}</button>
// //       </form>
// //       <ul className="crud-list">
// //         {items.map((item) => (
// //           <li key={item._id} className="crud-item">
// //             <div>
// //               <h3>{item.title}</h3>
// //               <p>{item.description}</p>
// //             </div>
// //             <div className="crud-buttons">
// //               <button onClick={() => handleEdit(item)}>Edit</button>
// //               <button onClick={() => handleDelete(item._id)}>Delete</button>
// //             </div>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // }

// // export default Crud;
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import './Crud.css';
// import toast from 'react-hot-toast';

// function Crud() {
//   const [items, setItems] = useState([]);
//   const [form, setForm] = useState({ title: '', description: '' });
//   const [editingId, setEditingId] = useState(null);

//   const fetchItems = async () => {
//     try {
//       const res = await axios.get('http://localhost:5000/api/items', { withCredentials: true });
//       setItems(res.data);
//     } catch (err) {
//       toast.error('Failed to load items');
//     }
//   };

//   useEffect(() => {
//     fetchItems();
//   }, []);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!form.title || !form.description) return toast.error('Please fill all fields');

//     try {
//       if (editingId) {
//         await axios.put(`http://localhost:5000/api/items/${editingId}`, form, { withCredentials: true });
//         setEditingId(null);
//         toast.success('Item updated');
//       } else {
//         await axios.post('http://localhost:5000/api/items', form, { withCredentials: true });
//         toast.success('Item added');
//       }
//       setForm({ title: '', description: '' });
//       fetchItems();
//     } catch (err) {
//       toast.error('Error submitting data');
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm('Are you sure you want to delete this item?')) return;
//     try {
//       await axios.delete(`http://localhost:5000/api/items/${id}`, { withCredentials: true });
//       toast.success('Item deleted');
//       fetchItems();
//     } catch {
//       toast.error('Failed to delete item');
//     }
//   };

//   const handleEdit = (item) => {
//     setForm({ title: item.title, description: item.description });
//     setEditingId(item._id);
//   };

//   return (
//     <div className="crud-container">
//       <h2>CRUD Dashboard</h2>
//       <form onSubmit={handleSubmit} className="crud-form">
//         <input
//           type="text"
//           name="title"
//           value={form.title}
//           onChange={handleChange}
//           placeholder="Title"
//         />
//         <input
//           type="text"
//           name="description"
//           value={form.description}
//           onChange={handleChange}
//           placeholder="Description"
//         />
//         <button type="submit">{editingId ? 'Update' : 'Add'}</button>
//       </form>
//       <ul className="crud-list">
//         {items.map((item) => (
//           <li key={item._id} className="crud-item">
//             <div>
//               <h3>{item.title}</h3>
//               <p>{item.description}</p>
//             </div>
//             <div className="crud-buttons">
//               <button className="edit-btn" onClick={() => handleEdit(item)}>Edit</button>
//               <button className="delete-btn" onClick={() => handleDelete(item._id)}>Delete</button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Crud;
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Crud.css';
import toast from 'react-hot-toast';

function Crud() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ title: '', description: '', category: '' });
  const [editingId, setEditingId] = useState(null);

  const fetchItems = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/items', { withCredentials: true });
      setItems(res.data);
    } catch (err) {
      toast.error('Failed to load items');
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.description || !form.category) return toast.error('Please fill all fields');

    try {
      if (editingId) {
        await axios.put(`http://localhost:5000/api/items/${editingId}`, form, { withCredentials: true });
        setEditingId(null);
        toast.success('Item updated');
      } else {
        await axios.post('http://localhost:5000/api/items', form, { withCredentials: true });
        toast.success('Item added');
      }
      setForm({ title: '', description: '', category: '' });
      fetchItems();
    } catch (err) {
      toast.error('Error submitting data');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this item?')) return;
    try {
      await axios.delete(`http://localhost:5000/api/items/${id}`, { withCredentials: true });
      toast.success('Item deleted');
      fetchItems();
    } catch {
      toast.error('Failed to delete item');
    }
  };

  const handleEdit = (item) => {
    setForm({ title: item.title, description: item.description, category: item.category || '' });
    setEditingId(item._id);
  };

  return (
    <div className="crud-container">
      <h2>CRUD Dashboard</h2>
      <form onSubmit={handleSubmit} className="crud-form">
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <input
          type="text"
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
        />
        <input
          type="text"
          name="category"
          value={form.category}
          onChange={handleChange}
          placeholder="Category"
        />
        <button type="submit">{editingId ? 'Update' : 'Add'}</button>
      </form>
      <ul className="crud-list">
        {items.map((item) => (
          <li key={item._id} className="crud-item">
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <small>Category: {item.category}</small>
            </div>
            <div className="crud-buttons">
              <button className="edit-btn" onClick={() => handleEdit(item)}>Edit</button>
              <button className="delete-btn" onClick={() => handleDelete(item._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Crud;
