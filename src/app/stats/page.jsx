'use client'
import { HistoryContext } from '@/context/ContactHistoryProvider';
import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';


const StatsPage = () => {
  const { friendInfo } = useContext(HistoryContext);
  const totalCallcount = friendInfo.filter(friend => friend.type === "call").length;
  const totalTextcount = friendInfo.filter(friend => friend.type === "text").length;
  const totalVideocount = friendInfo.filter(friend => friend.type === "video").length;

  console.log(totalCallcount);
  const data = [
    { name: 'Total Call', value: totalCallcount, fill: '#204d3e' },
    { name: 'Total Text', value: totalTextcount, fill: '#7e37f6' },
    { name: 'Total Video', value: totalVideocount, fill: '#2da160' },
  ];
  return (
    <div className='w-full bg-green-50'>
      <div className='max-w-7xl mx-auto py-20'>
        <h1 className='text-4xl font-bold text-green-950'>Friendship Analytics</h1>
        <div className='bg-white p-5 rounded-md mt-10'>
          <h3 className='text-2xl font-semibold text-green-950'>By Interaction Type</h3>
          <div className='py-20'>
            <PieChart className='mx-auto' style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
              <Pie
                data={data}
                innerRadius="80%"
                outerRadius="100%"
                // Corner radius is the rounded edge of each pie slice
                cornerRadius="50%"
                fill="#8884d8"
                // padding angle is the gap between each pie slice
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