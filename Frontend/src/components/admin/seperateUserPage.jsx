import { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

import api from "../axios-utils/baseAxios"


export default function SeperateUserPage() {
    const { username } = useParams();
    
    const navigate = useNavigate();

    const location = useLocation();
    const userData = location.state || {};
    
    const user = {
        name: username,
        bills: [
            
        ],
    };
    
    const [bills, setBills] = useState(user.bills);
  const handleCreateBill = () => {
    // alert("Create Bill functionality");
    navigate(`/admin/bill/${userData._id}`,{state : userData});
  };

  useEffect(() => {
    const memberData = async () => {
      try {
        if (!userData?._id) return; // Prevent call if userData._id is undefined

        const res = await api.post(`/admin/memberData/${userData._id}`);
        setBills(res.data.bills);
        
      } catch (err) {
        console.error("Error:", err.response ? err.response.data : err.message);
      }
    };

    memberData();
  }, [userData._id]);
  

  return (
    <div className="p-4 max-w-2xl mx-auto space-y-4 border border-gray-300 rounded-lg shadow-md bg-white">
      <div className="flex justify-between items-center p-4">
        <h2 className="text-xl font-bold">{user.name}</h2>
        <button
          onClick={handleCreateBill}
          className="px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700"
        >
          Create Bill
        </button>
      </div>

      {bills.length > 0 ? (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Billing History</h3>
          <ul className="space-y-2">
            {bills.map((bill, index) => (
              <li key={index} className="p-2 border border-gray-300 rounded-md">
                <p><strong>Period:</strong> {bill.billingPeriod}</p>
                <p><strong>Amount:</strong> ${bill.amount}</p>
                <p><strong>Status:</strong> {bill.paymentStatus}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="p-4 text-gray-500">No bills available.</p>
      )}
    </div>
  );
}
