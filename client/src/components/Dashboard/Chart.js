import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { MdOutlineDoneOutline } from "react-icons/md";

const data = [
  {
    name: 'Semana 1',
    uv: 40,
    pv: 24,
    amt: 24,
  },
  {
    name: 'Semana 2',
    uv: 30,
    pv: 13,
    amt: 22,
  },
  {
    name: 'Semana 3',
    uv: 20,
    pv: 98,
    amt: 22,
  },
  {
    name: 'Semana 4',
    uv: 27,
    pv: 39,
    amt: 20,
  }
];

export default class Example extends PureComponent {

  render() {
    return (
      <>
        <p className='text-black text-lg font-bold ml-1'>Tareas Completadas</p>
        <div className='flex items-center ml-2 mb-4'>
          <MdOutlineDoneOutline className='tasks-completed-icon w-5 h-5' />
          <p className='text-black text-lg ml-1 mb-1'>120</p>
        </div>

        <div className="tabs">
  <a className="tab">Tab 1</a> 
  <a className="tab tab-active">Tab 2</a> 
  <a className="tab">Tab 3</a>
</div>
        
      <ResponsiveContainer width="100%" height="90%" pading="8%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 0,
            right: 20,
            left: -20,
            bottom: 30,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid />

          <Tooltip />
            <Area type="monotone" dataKey="uv" stackId="1" stroke="#A855F7" fill="#A855F7" />
            <Area type="monotone" dataKey="pv" stackId="1" stroke="#EAB308" fill="#EAB308" />
            <Area type="monotone" dataKey="amt" stackId="1" stroke="#22C55E" fill="#22C55E" />
            <Area type="monotone" dataKey="pv" stackId="1" stroke="#EF4444" fill="#EF4444" />
        </AreaChart>
      </ResponsiveContainer>
      </>
    );
  }
}
