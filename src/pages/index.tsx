import { HomeView } from '@/components/organisms/home/home/HomeView'
import Head from 'next/head'


export default function HomePage() {
  return (
    <>
      <Head>
        <title>Metal : Samgreen Corp</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeView />


    </>
  )
}