import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, I am a software engineer.</p>
        <p>
          This is a test to deploy a Server Side Rendered blog.
          The post pages below return a Date() that should be computed on the server side. Disable JS in your browser and refresh to check the date is updating.
          <br></br>
          Here is the code <a href='https://github.com/mlgarchery/ssr-blog'>https://github.com/mlgarchery/ssr-blog</a>
        </p>
        <Link href='/posts/first-post'>First post</Link><br></br>
        <Link href='/posts/second-post'>Second post</Link>
      </section>
    </Layout>
  )
}
