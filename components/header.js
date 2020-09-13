import Link from 'next/link'
import styles from '../styles/Header.module.css'

export default function Header(props) {
  return (
    <header className={`${styles.header} ${props.isFixed ? styles.scrolling : '' }`}>
      <Link href="/" as="/">
        <a>
          <img src={props.isFixed ? "/logo1_white.svg" : "/logo1.svg"} alt="kinensai logo" className={styles.header_logo} />
        </a>
      </Link>
      <div className={styles.menu_links}>
        <Link href="/greeting" as="/greeting">
          <a className={styles.menu_link}>ごあいさつ</a>
        </Link>
        <Link href="/steps" as="/steps">
          <a className={styles.menu_link}>第98回記念祭のあゆみ</a>
        </Link>
        <Link href="/symposium" as="/symposium">
          <a className={styles.menu_link}>記念祭座談会</a>
        </Link>
        <Link href="/part" as="/part">
          <a className={styles.menu_link}>小委員会紹介</a>
        </Link>
        <Link href="/group" as="/group">
          <a className={styles.menu_link}>団体紹介</a>
        </Link>
      </div>
    </header>
  )
}