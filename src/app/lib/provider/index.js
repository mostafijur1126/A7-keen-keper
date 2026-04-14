'use client'
import ContactHistoryProvider from '@/context/ContactHistoryProvider';
import React from 'react';

const Provider = ({children}) => {
    return <ContactHistoryProvider>
        {children}
    </ContactHistoryProvider>
};

export default Provider;