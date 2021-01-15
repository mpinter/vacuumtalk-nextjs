import { GetStaticProps } from 'next'
import Link from 'next/link'
import { getAllEntries } from '../../utils/contentful'

const BlogIndex = ({ entries }) => {
  return entries.map((e) => {
    return (
      <div key={e.sys.id}>
        <Link href={`/blog/${e.sys.id}`}>{e.fields.title}</Link>
      </div>
    )
  })
}

// run at build time, never gets into FE bundle
export const getStaticProps: GetStaticProps = async () => {
  const entries = await getAllEntries()
  return {
    props: { entries },
    revalide: 60,
  }
}

// would be run at request time, again only on server
// export const getServerSideProps: GetServerSideProps = async () => {
//   const entries = await getAllEntries()
//   return {
//     props: { entries },
//   }
// }

export default BlogIndex
