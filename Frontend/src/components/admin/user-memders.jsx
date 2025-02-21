import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom"

import api from "../axios-utils/baseAxios"

const UserMembers = () => {
  const [data, setData] = useState( [] );

  const navigate = useNavigate();

  useEffect(() => {
    console.log(data);
  }, [data])
  

  useEffect(() => {
    async function userData () {
        try {
            let res = await api.get('/admin/memberData');
            // console.log(res.data);
            setData(res.data);
        } catch (err) {
            console.log("Error :", err)
        }
    }
    userData();
  }, [])
  
  const handleDelete = async (id) => { 
    try {
        let res = await api.delete(`/admin/memberData/${id}`);
        console.log("Deleted:", res.data);
        
        setData((prevData) => prevData.filter((user) => user._id !== id));
    } catch (err) {
        console.error("Error deleting user:", err);
    }
};


  const handleUpdate = (item) => {
    navigate("/admin/updateUser",{state : item});
  };

  const seperateUserPage = (item) =>{
    navigate(`/admin/user/${item.username}`, {state : item})
  }

  return (
    <div className="w-[80%] mx-auto text-center p-4">
        <button 
                  className="px-2 py-1 bg-green-500 text-white rounded my-2"
                  onClick={() => navigate("/admin/addUser") }>Add User
        </button>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((item) => (
          <div key={item._id} className="p-4 shadow-lg rounded-xl border">
            <div className="space-y-2">
              <p className="text-lg font-semibold hover:underline cursor-pointer" onClick={() => seperateUserPage(item)}>{item.username}</p>
              {/* <p className="text-gray-600">Price: {item.price}</p> */}
              <div className="flex justify-between mt-2">
                <button 
                  className="px-2 py-1 bg-green-500 text-white rounded"
                  onClick={() => handleUpdate(item)}
                >
                  Update
                </button>
                <button 
                  className="px-2 py-1 bg-red-500 text-white rounded"
                  onClick={() => handleDelete(item._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserMembers;
