import React from 'react';
import Head from 'next/head';
import Button from '../components/ui/buttons/Button';
import styles from '../styles/Home.module.scss';
import Navbar from '@/components/navbar/Navbar';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js Starter</title>
        <meta name="description" content="Next.js starter with TypeScript and Sass" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <div className={styles.buttons}>
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Your Company</p>
      </footer>
    </div>
  );
};

export default Home;