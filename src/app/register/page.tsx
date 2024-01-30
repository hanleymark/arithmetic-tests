import React from 'react';
import Link from 'next/link';

const Register = () => {
  return (
    <main className="flex flex-col items-center justify-between p-4">
      <section className="bg-card p-8 rounded-lg shadow-md w-1/2 min-w-96 max-w-[32rem]">
        <h1 className="text-title font-semibold text-center mb-6">Register</h1>
        <form className="flex flex-col gap-8">
          <input
            type="text"
            className="bg-inputbg text-inputtext p-2 w-full rounded-md placeholder-inputph focus:outline-none focus:ring-4 focus:ring-blue-300"
            placeholder="Email"
            required
          />
          <input
            type="password"
            className="bg-inputbg text-inputtext p-2 w-full rounded-md placeholder-inputph focus:outline-none focus:ring-4 focus:ring-blue-300"
            placeholder="Password"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-400"
          >
            Sign up
          </button>
        </form>
        <p className='pt-8 text-center'>Already registered? Login <Link className='hover:underline' href='/login'>here</Link>.</p>
      </section>
    </main>
  );
};

export default Register;
