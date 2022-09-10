import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}
export default function SecondPost() {
  return (
    <Layout>
      <Head>
        <title>Second Post</title>
      </Head>
      <h1> Second Post </h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <p>
        Last time it was viewed by someone (you):  {Date()}
      </p>
    </Layout>
  )
}
