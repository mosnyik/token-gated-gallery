import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
return (
  <>
    <Head>
      <title>My Gallery</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center my-8">My Gallery</h1>

      <div className="grid grid-cols-3 gap-4">
        <img src="/images/image1.jpeg" alt="Image 1" className="rounded-md" />
        <img src="/images/image2.jpeg" alt="Image 2" className="rounded-md" />
        <img src="/images/image3.jpeg" alt="Image 3" className="rounded-md" />
        <img src="/images/image4.jpeg" alt="Image 4" className="rounded-md" />
        <img src="/images/image5.jpeg" alt="Image 5" className="rounded-md" />
        <img src="/images/image6.jpeg" alt="Image 6" className="rounded-md" />
      </div>
    </div>
  </>
)
}
