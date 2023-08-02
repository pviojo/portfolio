/* eslint-disable jsx-a11y/label-has-associated-control */

"use client";

import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {signIn} from "next-auth/react";
import {useState} from "react";

interface IProps {
  searchParams?: {[key: string]: string | string[] | undefined};
}

function LoginPage({searchParams}: IProps) {
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const isFormComplete = !!email && !!password;
  const onSubmit = async () => {
    if (!isFormComplete) {
      return;
    }
    await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: searchParams?.callbackUrl as any as string,
    });
  };
  return (
    <div className='py-6 mx-auto'>
      <div className='mx-auto w-[40rem] mt-20'>
        <div className='mx-auto w-[40rem] mt-10 border p-8 rounded-md shadow'>
          {searchParams?.error && (
            <p className='text-red-500 bg-red-100 p-4 rounded mb-10'>
              <FontAwesomeIcon icon={faTimes} className='mr-2 ml-2 ' />
              Email o password erroneos
            </p>
          )}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit();
            }}
            className='space-y-8'
          >
            <div>
              <label
                htmlFor='email'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type='email'
                id='email'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 '
                placeholder=''
                required
              />
            </div>
            <div>
              <label
                htmlFor='password'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type='password'
                id='password'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 '
                required
              />
            </div>
            <div>
              <button
                onClick={onSubmit}
                type='submit'
                className='
            disabled:bg-gray-300
            disabled:text-gray-400
            text-white bg-sky-500 hover:bg-sky-600 focus:ring-2 focus:ring-offset-2 focus:ring-sky-200 font-medium rounded-lg text-sm px-5 py-2.5 '
              >
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
