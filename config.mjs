import onRenderHtml from './onRenderHtml'
import onRenderClient from './onRenderClient'

export default {
  onRenderHtml,
  onRenderClient,
  meta: {
    Layout: {
      env: 'server-and-client'
    }
  }
}
