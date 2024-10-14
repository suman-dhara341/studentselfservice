import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const AdminPanel = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(' http://localhost:3000/api/auth/admin');
        setUsers(response.data); 
      } catch (error) {
        toast.error("Failed to fetch users. Please try again.");
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Admin Panel</h2>
      <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="text-xl font-semibold mb-4">User List</h3>
        {users.length > 0 ? (
          <table className="min-w-full bg-white">
            <thead>
              <tr className="w-full bg-gray-200">
                <th className="py-2 px-4 text-left">Class</th>
                <th className="py-2 px-4 text-left">Section</th>
                <th className="py-2 px-4 text-left">Roll Number</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b">
                  <td className="py-2 px-4">{user.userClass}</td>
                  <td className="py-2 px-4">{user.section}</td>
                  <td className="py-2 px-4">{user.rollNumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No users found.</p>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
