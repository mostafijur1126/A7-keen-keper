import React, { createContext, useState } from 'react';

export const HistoryContext = createContext();

const ContactHistoryProvider = ({children}) => {
    
    const [friendInfo, setFriendInfo] = useState([]);
    // console.log(friendInfo);
    const data = {
        friendInfo,
        setFriendInfo
    }
    return <HistoryContext.Provider value={data}>
        {children}
    </HistoryContext.Provider>
};

export default ContactHistoryProvider;