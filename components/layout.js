import Meta from '../components/meta'
import Header from '../components/header'
import Footer from '../components/footer'
import styles from '../styles/Layout.module.css'

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <Header />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
      <Footer />
    </>
  )
}