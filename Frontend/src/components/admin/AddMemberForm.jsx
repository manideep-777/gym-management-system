import { useState } from "react";

import { useNavigate } from "react-router-dom";

import api from "../axios-utils/baseAxios";

const AddMemberForm = ({ onSubmit }) => {

    const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    membership: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    try{
        let res = await api.post('/users/register',formData);
        console.log(res.data);
        navigate("/admin");

    }catch(err){
        console.log("Error :",err)
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">User Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
            required
          />
        </div>
        
        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
            required
          />
        </div>
        
        <div>
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
            required
          />
        </div>
        
        {/* <div className="flex items-center">
          <input
            type="checkbox"
            name="membership"
            checked={formData.membership}
            onChange={handleChange}
            className="w-4 h-4"
          />
          <label className="ml-2 text-gray-700">Membership Active</label>
        </div> */}

        <button type="submit" className="w-full bg-blue-600 text-black py-2 rounded hover:bg-blue-700 hover:text-white border transition">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddMemberForm;
