'use client';

import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [users, setUsers] = useState([]);
  const [isLoading, SetIsLoading] = useState(true);

  const getDataUsers = async () => {
    try {
      const fetch = await axios.get('https://jsonplaceholder.typicode.com/users');
      const listData = fetch.data;
      console.log('Hasil output =>', listData);
      setUsers(listData);
    } catch (error) {
      console.log('Terjadi Kesalahan', error);
    } finally {
      SetIsLoading(false);
    }
  };

  useEffect(() => {
    getDataUsers();
  }, [setUsers]);

  return (
    <section className='pt-8 '>
      <h1 className='text-3xl font-bold text-center'>Puslitbang - BMKG</h1>
      {isLoading ? (
        <p className='mt-8 text-center'>Loading Data ....</p>
      ) : (
        <table className='mx-auto mt-4'>
          <thead className='bg-cyan-400'>
            <tr>
              <th className='px-6 py-3 border-2 border-black'>ID</th>
              <th className='px-6 py-3 border-2 border-black'>Name</th>
              <th className='px-6 py-3 border-2 border-black'>Username</th>
              <th className='px-6 py-3 border-2 border-black'></th>
            </tr>
          </thead>
          <tbody>
            {users.map((data, key) => (
              <UserItem key={key} item={data} />
              // <tr key={key}>
              //   <td className='px-6 py-4 border-2 border-black'>{data.id}</td>
              //   <td className='px-6 py-4 border-2 border-black'>{data.name}</td>
              //   <td className='px-6 py-4 border-2 border-black'>{data.username}</td>
              //   <td className='px-6 py-4 border-2 border-black'>
              //     <Link href={`/user/${data.id}`} className='px-3 py-3 bg-blue-400 text-white rounded-xl'>
              //       Detail
              //     </Link>
              //   </td>
              // </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}

function UserItem({ item }) {
  return (
    <tr>
      <td className='px-6 py-4 border-2 border-black'>{item.id}</td>
      <td className='px-6 py-4 border-2 border-black'>{item.name}</td>
      <td className='px-6 py-4 border-2 border-black'>{item.username}</td>
      <td className='px-6 py-4 border-2 border-black'>
        <Link href={`/user/${item.id}`} className='px-3 py-3 bg-blue-400 text-white rounded-xl'>
          Detail
        </Link>
      </td>
    </tr>
  );
}
