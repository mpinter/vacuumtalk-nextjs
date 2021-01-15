import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
// import { useState } from 'react'
import { getAllEntries, getEntryFromId } from '../../utils/contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const BlogDetail = ({ entry }) => {
  const router = useRouter()
  if (router.isFallback) return <div>Loading</div>
  return (
    <>
      <h1>{entry.fields.title}</h1>
      {documentToReactComponents(entry.fields.content)}
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const entries = await getAllEntries()
  const paths = entries.map((e) => ({ params: { id: e.sys.id } }))
  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async (props) => {
  const { id } = props.params
  if (typeof id !== 'string') return { notFound: true }
  const entry = await getEntryFromId(id)
  return {
    props: { entry },
    revalidate: 1,
  }
}

export default BlogDetail
