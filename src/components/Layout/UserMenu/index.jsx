/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/react-in-jsx-scope */

'use client';

import { signIn, signOut, useSession } from 'next-auth/react';

import styles from './index.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';

export default function UserMenu() {
  const { data: session, status: statusSession } = useSession();
  if (statusSession === 'loading') {
    return null;
  }
  return (
    <div
      className={[
        styles.menu,
        statusSession === 'authenticated' ? styles.loggedin : '',
      ].join(' ')}
    >
      {statusSession === 'authenticated' && (
        <div
          key="1"
          className="flex items-center justify-between max-w-sm gap-2 text-sm text-gray-500 rounded-full grid-cl focus:outline-none"
        >
          <FontAwesomeIcon icon={faUser} className="w-6" />
          <span className="">{session.user.name}</span>
          <div onClick={() => signOut()} className="cursor-pointer underline">
            Salir
          </div>
        </div>
      )}
      {statusSession === 'unauthenticated' && (
        <div
          onClick={() => signIn()}
          className="flex cursor-pointer items-center justify-between max-w-sm gap-2 text-sm text-gray-500 rounded-full grid-cl focus:outline-none"
        >
          <UserCircleIcon className="w-6" />
          <span className="flex-initial">Entrar</span>
        </div>
      )}
    </div>
  );
}
