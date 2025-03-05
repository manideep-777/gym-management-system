import React from "react";
import { useLocation } from "react-router-dom";

const MemberPage = () => {
  const location = useLocation();
  const user = location.state;
  console.log(user);

  if (!user) {
    return <h2 className="text-center mt-5 text-xl font-semibold text-gray-600">No User Data Available</h2>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Member Details</h2>
      
      <div className="bg-gray-100 p-5 rounded-lg shadow-sm">
        <h4 className="text-xl font-semibold text-gray-700">{user.username}</h4>
        <p className="text-gray-600"><strong>Email:</strong> {user.email}</p>
        <p className="text-gray-600"><strong>Membership:</strong> 
          <span className={`ml-2 px-2 py-1 rounded-full text-sm font-medium ${user.membership ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}>
            {user.membership ? "Active" : "Inactive"}
          </span>
        </p>
      </div>

      <h3 className="text-xl font-bold text-gray-800 mt-6">Billing Information</h3>
      
      {user.bills && user.bills.length > 0 ? (
        <div className="overflow-x-auto mt-3">
          <table className="w-full border-collapse border border-gray-300 rounded-lg shadow-md">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="p-3 text-left">Billing Period</th>
                <th className="p-3 text-left">Amount ($)</th>
                <th className="p-3 text-left">Payment Status</th>
              </tr>
            </thead>
            <tbody>
              {user.bills.map((bill) => (
                <tr key={bill._id} className="border-b border-gray-300 hover:bg-gray-100">
                  <td className="p-3">{bill.billingPeriod}</td>
                  <td className="p-3">{bill.amount}</td>
                  <td className="p-3">
                    <span className={`px-2 py-1 rounded-full text-sm font-medium ${bill.paymentStatus === "Pending" ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"}`}>
                      {bill.paymentStatus}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-500 mt-3">No billing records available.</p>
      )}
    </div>
  );
};

export default MemberPage;
