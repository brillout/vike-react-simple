// https://vite-plugin-ssr.com/onRenderHtml
export default onRenderHtml

import { renderToString } from 'react-dom/server'
import { createElement as h } from 'react'
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr/server'

async function onRenderHtml(pageContext) {
  const { Page, Layout } = pageContext.config
  if (!Layout) throw new Error("Config 'Layout' is missing")

  const page = h(Layout, null, h(Page))
  const pageHtml = renderToString(page)

  return escapeInject`<!DOCTYPE html>
    <html>
      <body>
        <div id="react-root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`
}
