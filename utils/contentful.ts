import { createClient } from 'contentful'

// please don't do it like this, import from .env :) keeping it here so that you can run it locally without hassle
const space = 'yy8c4u5jrmlq'
const accessToken = 'lzqpHTdf-jMHVvKIuXtpOTSgSSAvgtUvH77QWGpmHTk'

export const client = createClient({ space, accessToken })

export const getAllEntries = async () =>
  (await client.getEntries())?.items || []

export const getEntryFromId = (id) => client.getEntry(id)
