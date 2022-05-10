import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

import { Avatar, Card, Tooltip, Text, Grid } from '@nextui-org/react';

const name = 'Robert Cerdas Gómez';
export const siteTitle = 'Robertcego | Next.js';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='Personal website using Next.js' />
        <meta name='og:title' content={siteTitle} />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Card>
              <Grid.Container gap={1} justify='center'>
                <Grid xs={2}>
                  <Avatar
                    bordered
                    src='/images/Robertcego.jpg'
                    color='secondary'
                    size='xl'
                    alt={name}
                  />
                </Grid>
                <Grid xs justify='center' alignItems='center'>
                  <Text
                    h1
                    size={25}
                    css={{
                      textGradient: '45deg, $purple600 -20%, $pink600 100%',
                    }}
                    weight='bold'
                  >
                    {name}
                  </Text>
                </Grid>
              </Grid.Container>
            </Card>
          </>
        ) : (
          <>
            <Link href='/'>
              <a>
                <Avatar
                  bordered
                  src='/images/Robertcego.jpg'
                  color='secondary'
                  size='xl'
                  alt={name}
                />
              </a>
            </Link>
            <Tooltip content='Back to Home.' contentColor='secondary'>
              <h2 className={utilStyles.headingLg}>
                <Link href='/'>
                  <a className={utilStyles.colorInherit}>{name}</a>
                </Link>
              </h2>
            </Tooltip>
          </>
        )}
      </header>
      <main style={{ paddingTop: '0.5rem' }}>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href='/'>
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
