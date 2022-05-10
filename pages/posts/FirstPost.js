import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
// .... //
import Layout from '../../components/layout';
// .... //
function FirstPost() {
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  console.log(today.toDateString());
  return (
    <Layout>
      <Head>
        <title>First Post | {today.toDateString()}</title>
      </Head>
      <h1>First Post</h1>
      <h2>Something goes here...</h2>
      <footer>
        Created <span>{today.toDateString()}</span>
      </footer>
    </Layout>
  );
}

export default FirstPost;
