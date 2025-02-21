import { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

import api from "../axios-utils/baseAxios";

// const members = [
//   { id: 123, name: "John Doe" },
//   { id: 456, name: "Jane Smith" },
// ];

export default function AdminBillingWorkflow() {

    const { id } = useParams();
    const navigate = useNavigate();

    const location = useLocation();
    const userData = location.state || {};

    // const [selectedMember, setSelectedMember] = useState("");
    const [billingPeriod, setBillingPeriod] = useState("");
    const [amount, setAmount] = useState("");
    const [status, setStatus] = useState("Pending");



    const handleGenerateBill = async () => {
        try {
            const res = await api.post(`/admin/memberData/updateBill/${id}`, {
                billingPeriod,
                amount,
                paymentStatus: status,
            });
    
            console.log("Bill Generated:", res.data);
            navigate(`/admin/user/${userData.username}`, {state : userData})
        } catch (err) {
            console.error("Error:", err.response ? err.response.data : err.message);
        }
    };
    

    return (
        <div className="p-4 max-w-2xl mx-auto space-y-4 border border-gray-300 rounded-lg shadow-md bg-white">
            <div className="p-4">
                <h2 className="text-xl font-bold mb-4">Create a Bill</h2>
                {/* <div className="mb-4">
          <label className="block font-medium mb-1">Select Member</label>
          <select
            onChange={(e) => setSelectedMember(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select a member</option>
            {members.map((member) => (
              <option key={member.id} value={`${member.name}, ID: ${member.id}`}>
                {member.name} (ID: {member.id})
              </option>
            ))}
          </select>
        </div> */}

                <div className="mb-4">
                    <label className="block font-medium mb-1">Billing Period</label>
                    <input
                        type="text"
                        value={billingPeriod}
                        onChange={(e) => setBillingPeriod(e.target.value)}
                        placeholder="e.g. January 2024"
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>

                <div className="mb-4">
                    <label className="block font-medium mb-1">Amount ($)</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="e.g. 50"
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>

                <div className="mb-4">
                    <label className="block font-medium mb-1">Payment Status</label>
                    <input
                        type="text"
                        value={status}
                        readOnly
                        className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
                    />
                </div>

                <button
                    onClick={handleGenerateBill}
                    className="w-full p-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700"
                >
                    Generate Bill
                </button>
            </div>
        </div>
    );
}