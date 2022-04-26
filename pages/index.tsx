import React, { ReactElement } from 'react';
import Head from 'next/head'
import Layout from '../components/layout';
import styles from '../styles/Home.module.css';

function Home() {
  return (
    <div className={styles.container}>
       <Head>
         <title>Indie Brands</title>
         <meta name="description" content="Indie brands application" />
         <link rel="icon" href="/favicon.ico" />
       </Head>
       <h1>test</h1>
     </div>
  )
}
Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
export default Home
