// https://vike.dev/onRenderClient
export default onRenderClient

import { hydrateRoot } from 'react-dom/client'
import { createElement as h } from 'react'

async function onRenderClient(pageContext) {
  const { Page, Layout } = pageContext.config
  if (!Layout) throw new Error("Config 'Layout' is missing")

  const page = h(Layout, null, h(Page))

  hydrateRoot(document.getElementById('react-root'), page)
}
