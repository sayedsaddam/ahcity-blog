import Head from 'next/head'
import Image from 'next/image'
import styles from '/styles/Layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Saddam Hussain'
export const siteTitle = 'Saddam - Software Engineer'
export default function Layout({ children, home }){
   return (
      <div className={styles.container}>
         <Head>
            <meta name="description" content="Learn how to build a personal website using next.js" />
            <meta property="og:image" content={`https://og-image.vercel.app/${encodeURI(siteTitle,)}..png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`} />
            <meta name="og:title" content={siteTitle} />
            <meta name="twitter:card" content="summary_large_image" />
         </Head>
         <header className={styles.header}>
            {home ? (
               <>
                  <Image priority src="/images/profile.jpeg" className={utilStyles.borderCircle} height={144} width={144} alt="profile image" />
                  <h1 className={utilStyles.headgin2Xl}>{name}</h1>
               </>
            ) : (
               <>
                  <Link href="/" passHref>
                     <div>
                        <Image priority src="/images/profile.jpeg" className={utilStyles.borderCircle} height={108} width={108} alt="profile image" />
                     </div>
                  </Link>
                  <h2 className={utilStyles.headginLg}>
                     <Link href="/" passHref>
                        <span className={utilStyles.colorInherit}>{name}</span>
                     </Link>
                  </h2>
               </>
            )}
         </header>
         <main>{children}</main>
         {!home && (
            <div className={styles.backToHome}>
               <Link href="/" passHref>
                  ← Back to home
               </Link>
            </div>
         )}
      </div>
   )
}