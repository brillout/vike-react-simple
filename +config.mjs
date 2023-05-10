import onRenderHtml from 'vike-react-simple/onRenderHtml'
import onRenderClient from 'vike-react-simple/onRenderClient'

export default {
  onRenderHtml,
  onRenderClient,
  meta: {
    Layout: {
      env: 'server-and-client'
    }
  }
}
