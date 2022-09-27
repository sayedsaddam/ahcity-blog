import Head from "next/head"
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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolore reprehenderit nemo maxime perferendis vitae voluptatum facilis. Sed, nisi atque hic officiis dolorem optio, quod quos non dignissimos nobis voluptates.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus similique deleniti nulla inventore. Odio natus vero ad ratione repellendus. Ipsum cum totam nihil, sapiente iure doloremque consequatur quisquam vero ex!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident cumque repudiandae fugit aspernatur velit nam, nobis maiores iure sint consectetur fuga, quod illum non impedit est totam, vero consequatur quaerat!</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}