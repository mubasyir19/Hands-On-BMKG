'use client';

import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Page({ params }) {
  const [data, SetData] = useState({});
  const [isLoading, SetIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`);
      const output = response.data;
      console.log('Hasil => ', output);
      SetData(output);
    } catch (error) {
      console.log('terjadi kesalahan');
    } finally {
      SetIsLoading(false);
    }
  };

  useEffect(() => {
    if (params.id) {
      fetchData();
    }
  }, [params.id]);

  return (
    <section>
      <h1 className='mt-10 text-2xl font-semibold text-center'>Detail Data</h1>
      {isLoading ? (
        <p className='mt-8 text-center'>Loading Data ....</p>
      ) : (
        <table className='mx-auto mt-10'>
          <tbody>
            <tr>
              <th className='bg-cyan-400 px-6 py-3 border-2 border-black'>ID</th>
              <td className='px-6 py-3 border-2 border-black'>{data.id}</td>
            </tr>
            <tr>
              <th className='bg-cyan-400 px-6 py-3 border-2 border-black'>Name</th>
              <td className='px-6 py-3 border-2 border-black'>{data.name}</td>
            </tr>
            <tr>
              <th className='bg-cyan-400 px-6 py-3 border-2 border-black'>Username</th>
              <td className='px-6 py-3 border-2 border-black'>{data.username}</td>
            </tr>
            <tr>
              <th className='bg-cyan-400 px-6 py-3 border-2 border-black'>Email</th>
              <td className='px-6 py-3 border-2 border-black'>{data.email}</td>
            </tr>
            <tr>
              <th className='bg-cyan-400 px-6 py-3 border-2 border-black'>Phone</th>
              <td className='px-6 py-3 border-2 border-black'>{data.phone}</td>
            </tr>
            <tr>
              <th className='bg-cyan-400 px-6 py-3 border-2 border-black'>Website</th>
              <td className='px-6 py-4 border-2 border-black'>
                <Link href={`https://${data.website}`} target='_blank' className='hover:text-blue-500'>
                  {data.website}
                </Link>
              </td>
            </tr>
            <tr>
              <th className='bg-cyan-400 px-6 py-3 border-2 border-black'>Address</th>
              <td className='px-6 py-3 border-2 border-black'>
                {`${data.address?.street}, ${data.address?.suite}, ${data.address?.city}, ${data.address?.zipcode}`}
              </td>
            </tr>
            <tr>
              <th className='bg-cyan-400 px-6 py-3 border-2 border-black'>Company</th>
              <td className='px-6 py-4 border-2 border-black'>{data.company?.name}</td>
            </tr>
          </tbody>
        </table>
      )}
    </section>
  );
}
