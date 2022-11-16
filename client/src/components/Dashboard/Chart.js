import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { MdOutlineDoneOutline } from "react-icons/md";

const data = [
  {
    name: 'Junio',
    uv: 40,
    pv: 24,
    amt: 24,
  },
  {
    name: 'Julio',
    uv: 30,
    pv: 13,
    amt: 22,
  },
  {
    name: 'Agosto',
    uv: 20,
    pv: 98,
    amt: 22,
  },
  {
    name: 'Septiembre',
    uv: 27,
    pv: 39,
    amt: 20,
  },
  {
    name: 'Octubre',
    uv: 18,
    pv: 48,
    amt: 21,
  },
  {
    name: 'Noviembre',
    uv: 20,
    pv: 38,
    amt: 25,
  },
  {
    name: 'Diciembre',
    uv: 34,
    pv: 40,
    amt: 21,
  },
];

export default class Example extends PureComponent {

  render() {
    return (
      <div className='p-2' style={{ width: '100%' }}>
        <p className='text-black text-lg font-bold ml-1'>Tareas Completadas</p>
        <div className='flex items-center ml-2 mb-4'>
          <MdOutlineDoneOutline className='tasks-completed-icon w-5 h-5' />
          <p className='text-black text-lg ml-1 mb-1'>1200K</p>
        </div>
      <ResponsiveContainer width="100%" height="90%">
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
      <p>Maybe some other content</p>
      </div>
    );
  }
}
