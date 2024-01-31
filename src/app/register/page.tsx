'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Register = () => {
  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [submitError, setSubmitError] = useState<string>('');

  const router = useRouter();

  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setEmailError('');
    setPasswordError('');
    setSubmitError('');

    const email = e.target['email'].value;
    const password = e.target['password'].value;

    if (!isValidEmail(email)) {
      setEmailError('Invalid email address');
      return;
    }

    if (!password || password.length < 5) {
      setPasswordError('Password must be at least 5 characters');
      return;
    }

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        })
      });

      if (res.status === 400) {
        setEmailError('User with this email already exists');
      }

      if (res.status === 201) {
        router.push('/login');
      }
    } catch (error) {
      setSubmitError('An error occurred while trying to register');
      console.log(error);
    }
  }

  return (
    <main className="flex flex-col items-center justify-between p-4">
      <section className="bg-card p-8 rounded-lg shadow-md w-1/2 min-w-96 max-w-[32rem]">
        <h1 className="text-title font-semibold text-center mb-6">Register</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              className="bg-inputbg text-inputtext p-2 w-full rounded-md placeholder-inputph focus:outline-none focus:ring-4 focus:ring-blue-300"
              placeholder="Email"
              name="email"
              required
            />
            {
              <p className="text-inputerr text-lg pt-1 text-center">
                {emailError}&nbsp;
              </p>
            }
          </div>
          <div>
            <input
              type="password"
              className="bg-inputbg text-inputtext p-2 w-full rounded-md placeholder-inputph focus:outline-none focus:ring-4 focus:ring-blue-300"
              placeholder="Password"
              name="password"
              required
            />
            {
              <p className="text-inputerr text-lg text-center pt-1">
                {passwordError}&nbsp;
              </p>
            }
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-400"
          >
            Sign up
          </button>
        </form>
        <p className="pt-8 text-center">
          Already registered? Login{' '}
          <Link className="hover:underline" href="/login">
            here
          </Link>
          .
        </p>
        {submitError && <p className="text-inputerr pt-1 text-center">{submitError}</p>}
      </section>
    </main>
  );
};

export default Register;
