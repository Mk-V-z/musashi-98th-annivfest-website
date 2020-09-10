import Link from 'next/link'
import styles from '../styles/Header.module.css'
import { useState, useEffect } from 'react'

export default function Header() {
  const [color, setColor] = useState(0);

  useEffect(function mount() {
    function onScroll() {
      if(window.pageYOffset > 100) setColor(true)
      else setColor(false)
    }
    window.addEventListener("scroll", onScroll)
    return function unMount() {
      window.removeEventListener("scroll", onScroll)
    }
  })

  return (
    <header className={`${styles.header} ${color ? styles.scrolling : '' }`}>
      <Link href="/" as="/">
        <a>
          <img src={color ? "/logo1_white.svg" : "/logo1.svg"} alt="kinensai logo" className={styles.header_logo} />
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