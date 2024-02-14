export default {
  name: 'vike-react-simple',
  onRenderHtml: 'import:vike-react-simple/onRenderHtml',
  onRenderClient: 'import:vike-react-simple/onRenderClient',
  meta: {
    Layout: {
      env: { server: true, client: true }
    }
  },
  // TODO: remove once Vike's new version is released
  name: {
    env: { config: true }
  }
}
