import { createContext, useState, useEffect } from 'react'

export const AdminContext = createContext({
    currentAdmin : null,
    setCurrentAdmin : () => null
}) 

export const AdminProvider = ({children}) => {
    const [currentAdmin, setCurrentAdmin] = useState(null);
    const value = {currentAdmin, setCurrentAdmin};

    return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
}