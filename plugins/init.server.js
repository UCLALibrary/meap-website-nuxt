export default defineNuxtPlugin(async (nuxtApp) => { //
  // console.log('init.server.js start')
  const craftGlobals = useGlobalStore() //
  await craftGlobals.fetchGlobals()
  await craftGlobals.fetchHeader()
  await craftGlobals.fetchFooterPrimary()
  await craftGlobals.fetchFooterSock()
  await craftGlobals.fetchFooterSponsor()
  // console.log('init.server.js end')
})