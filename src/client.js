import { createClient } from '@sanity/client'

const client = createClient({
    projectId: "lxiy1ehs",
    dataset: "production",
    useCdn: true,
    apiVersion: "2022-02-03"
})

export default client
