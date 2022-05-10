import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

import { useTheme as useNextTheme } from 'next-themes';
import { Switch, useTheme, Card, Text, Spacer } from '@nextui-org/react';

export default function Home() {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <Card color='secondary'>
          <Text h3 css={{ fontWeight: '$bold' }}>
            I am Robert Cerdas Gómez
          </Text>
          <Text h4 css={{ fontWeight: '$bold' }}>
            Current theme is {type}
          </Text>
          <Switch
            shadow
            color='success'
            checked={isDark}
            onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
          />
          <Spacer />
          <Text h6>
            Check out this{' '}
            <span>
              <Link href='/posts/FirstPost'>
                <a>sample page</a>
              </Link>
            </span>
          </Text>
          <Spacer />
          <div>
            <Text h5>This portfolio site is made with Next.js and React.</Text>
            <Text h5>
              It has some of the default boilerplate that you get with Next.js
              configuration
            </Text>
          </div>
        </Card>
      </section>
    </Layout>
  );
}
