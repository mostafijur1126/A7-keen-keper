'use client'
import { HistoryContext } from '@/context/ContactHistoryProvider';
import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';

const StatsPage = () => {
  const { friendInfo } = useContext(HistoryContext);
  const totalCallcount = friendInfo.filter(friend => friend.type === "call").length;
  const totalTextcount = friendInfo.filter(friend => friend.type === "text").length;
  const totalVideocount = friendInfo.filter(friend => friend.type === "video").length;

  const data = [
    { name: 'Total Call', value: totalCallcount, fill: '#204d3e' },
    { name: 'Total Text', value: totalTextcount, fill: '#7e37f6' },
    { name: 'Total Video', value: totalVideocount, fill: '#2da160' },
  ];
  
  return (
    <div className='w-full bg-green-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-green-950'>Friendship Analytics</h1>
        <div className='bg-white p-4 sm:p-5 rounded-md mt-6 sm:mt-8 md:mt-10'>
          <h3 className='text-xl sm:text-2xl font-semibold text-green-950'>By Interaction Type</h3>
          <div className='py-8 sm:py-12 md:py-20'>
            <PieChart className='mx-auto' style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
              <Pie
                data={data}
                innerRadius="80%"
                outerRadius="100%"
                cornerRadius="50%"
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                isAnimationActive={true}
              />
              <Legend></Legend>
              <Tooltip></Tooltip>
            </PieChart>
          </div>
        </div>
      </div>
    </div>

  );
};

export default StatsPage;