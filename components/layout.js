import { useState, useEffect } from 'react'
import Meta from '../components/meta'
import Header from '../components/header'
import Footer from '../components/footer'
import styles from '../styles/Layout.module.css'

export default function Layout({ children }) {
  const [isFixed, setToFixed] = useState(false);

  useEffect(function mount() {
    function onScroll() {
      if(window.pageYOffset > 100) setToFixed(true)
      else setToFixed(false)
    }
    window.addEventListener("scroll", onScroll)
    return function unMount() {
      window.removeEventListener("scroll", onScroll)
    }
  })

  return (
    <>
      <Meta />
      {isFixed && <Header isFixed={false} />}
      <Header isFixed={isFixed} />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
      <Footer />
    </>
  )
}
