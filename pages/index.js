import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Homepage from '../views/Homepage'
import store from '../redux/store'

export default function Home() {
  return (
    <Homepage />
  )
}

export async function getServerSideProps(context) {
   await store.dispatch(fetchRestaurant);
}