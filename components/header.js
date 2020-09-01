import Link from 'next/link'
import styles from '../styles/Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" as="/">
        <img src="/logo1.svg" alt="kinensai logo" className={styles.header_logo} />
      </Link>
      <Link href="/aisatsu" as="/aisatsu">
        <a className={styles.menu_link}>ごあいさつ</a>
      </Link>
      <Link href="/ayumi" as="/ayumi">
        <a className={styles.menu_link}>第98回記念祭のあゆみ</a>
      </Link>
      <Link href="/aisatsu" as="/aisatsu">
        <a className={styles.menu_link}>記念祭座談会</a>
      </Link>
      <Link href="/aisatsu" as="/aisatsu">
        <a className={styles.menu_link}>パート紹介</a>
      </Link>
      <Link href="/aisatsu" as="/aisatsu">
        <a className={styles.menu_link}>団体紹介</a>
      </Link>
    </header>
  )
}