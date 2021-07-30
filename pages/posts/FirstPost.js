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
  return (
    <Layout>
      <Head>
        <title>First Post | {today.toDateString()}</title>
      </Head>
      <h1>First Post</h1>
      <h2>Something goes here...</h2>
    </Layout>
  );
}

export default FirstPost;
