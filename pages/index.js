import Head from "next/head"
import Link from "next/link"
import Date from '../components/date'
import Layout, { siteTitle } from "../components/layout"
import { getSortedPostsData } from "../lib/posts"
import utilStyles from '../styles/utils.module.css'

export async function getStaticProps(){
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }){
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, I am Saddam (Sayed Saddam Hussain), born in Swat in May 1993. Studied Bachelors in Computer Science at the University of Agriculture, Peshawar - Pakistan. Graduated in 2015, started internship at IT Excellence Center, Khyber Pakhtunkhwa in June, 2016 till December 2016.</p>
        
        <p>Moved to Innovision Technology (SMC) Pvt. Ltd in January 2017. Worked there till July, 2017 and moved to VIVE Technologies Pvt. Ltd in August 2017.</p>

        <p>Worked at VIVE Technologies for almost a year, then moved to Islamabad to a company called CHIP Training and Consulting Pvt. Ltd as a PHP Developer in March 2019. Worked at CHIP for a year, and moved to AH Group of Companies Pvt. Ltd in Feb 2020. Currently working for AH Group Companies since then.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`} passHref>
                {title}
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}