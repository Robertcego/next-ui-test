import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I am Robert Cerdas Gómez</p>
        <p>
          Check out this{" "}
          <Link href="/posts/FirstPost">
            <a>sample page</a>
          </Link>
        </p>
        <div>
          <p>This portfolio site is made with Next.js and React.</p>
          <p>
            It has some of the default boilerplate that you get with Next.js
            configuration
          </p>
        </div>
      </section>
    </Layout>
  );
}
