import { GetServerSideProps } from 'next'
import Link from 'next/link'
import { getAllEntries } from '../../utils/contentful'

const BlogIndex = ({ entries }) => {
  return entries.map((e) => {
    return (
      <div key={e.sys.id}>
        <Link href={`/server-side-blog/${e.sys.id}`}>{e.fields.title}</Link>
      </div>
    )
  })
}

// would be run at request time, again only on server
export const getServerSideProps: GetServerSideProps = async () => {
  const entries = await getAllEntries()
  return {
    props: { entries },
  }
}

export default BlogIndex
