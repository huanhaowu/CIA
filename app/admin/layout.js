import React from 'react';
import Link from 'next/link';
import { FiHome, FiUsers, FiBook, FiGrid, FiLogOut, FiUser } from 'react-icons/fi';
import styles from './layout.module.css';

const Layout = ({ children }) => {
  return (
    <div>
      <nav className={styles.navbar}>
        <ul className={styles.navbarList}>
          <li>
            <Link href="/" passHref>
              <a>
                <FiHome />
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/usuarios" passHref>
              <a>
                <FiUsers />
                Usuarios
              </a>
            </Link>
          </li>
          <li>
            <Link href="/asignaturas" passHref>
              <a>
                <FiBook />
                Asignaturas
              </a>
            </Link>
          </li>
          <li>
            <Link href="/secciones" passHref>
              <a>
                <FiGrid />
                Secciones
              </a>
            </Link>
          </li>
          <li>
            <Link href="/aulas" passHref>
              <a>
                <FiGrid />
                Aulas
              </a>
            </Link>
          </li>
        </ul>
        <div className={styles.logoutButton}>
          <FiUser />
          <button>Logout</button>
        </div>
      </nav>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Layout;
