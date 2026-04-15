import React from 'react';

const loading = () => {
    return (
        <div className='h-screen flex justify-center items-center bg-green-50'>
            <span className="loading loading-spinner text-success w-20 h-20"></span>
        </div>
    );
};

export default loading;