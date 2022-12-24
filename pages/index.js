import Head from 'next/head'
import Image from 'next/image'
import Featured from '../components/Featured'
import PizzaList from '../components/PizzaList'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles}>
      <Head>
        <title>Sha1 Next App</title>
        <meta name="description" content="Pizza next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
     </Head>
       <Featured />
       <PizzaList />
    </div>
  )
}
