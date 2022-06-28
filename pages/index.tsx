import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from "react";
import { Button } from 'react-bootstrap';
import styles from '../styles/Home.module.css'
import { TwitterShareButton, TwitterIcon } from "react-share";

const Home: NextPage = () => {
  const [mainText, setMainText] = useState("腹破壊")
  const templates: string[] = ["stomachbreaker{}", "stomachbreak{}", "Xx_StomachBreaker{}_xX", "stomachbreakPRO{}"]
  const [template, setTemplate] = useState(0)
  
  function updateText() {
    const len: number = templates.length;
    const suffix: number = Math.floor(1000 + Math.random() * 9000);
    setTemplate(Math.floor(Math.random() * len))
    
    setMainText(templates[template].replace('{}', String(suffix)))
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>腹破壊</title>
        <meta name="description" content="レッツ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{mainText}</h1>
        <Button variant="outline-primary" type="submit" className="mx-auto btn-lg mt-2" onClick={updateText}>⚡</Button>
        <TwitterShareButton url="https://stomach-breaker.vercel.app" title={mainText} hashtags={["腹破壊"]}>
          <TwitterIcon size={50} round={true} className="mt-2" />
        </TwitterShareButton>
      </main>
    </div>
  )
}

export default Home
