import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'
import { Footer } from 'neal-react'
import { FACEBOOK_APP_ID, MAOMAO_SITE_URL } from '../../containers/App/constants'
import AppHeader from '../../containers/AppHeader'
import Notification from '../../components/Notification'
import logger from '../../utils/logger'

Router.onRouteChangeStart = (url) => {
  logger.info('onRouteChangeStart', url)
  NProgress.start()
}
Router.onRouteChangeComplete = () => {
  logger.info('onRouteChangeComplete')
  NProgress.done()
}
Router.onRouteChangeError = (err, url) => {
  logger.info('onRouteChangeError', err, url)
  NProgress.done()
}
Router.onAppUpdated = nextUrl => {
  // persist the local state
  logger.info('onAppUpdated', nextUrl)
  window.location.href = nextUrl
}

const brandName = 'maomao'
const businessAddress = (
  <address>
    <img src='/static/images/maomao.png' className='logo-image' alt='maomao' />
  </address>
)

export default ({ children, title = 'homepage', description = 'discover & share ', isSplitView }) => (
  <div style={isSplitView ? { paddingBottom: 0 } : {}} className='neal-page'>
    <Head>
      <meta charSet='utf-8' />
      <meta http-equiv='x-dns-prefetch-control' content='on' />
      <title>{title}</title>
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta name='mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-title' content='Maomao' />
      <link rel='shortcut icon' type='image/x-icon' href='/static/images/icons/favicon.ico' />
      <meta name='description' content={description} />
      <meta name='og:title' content={title} />
      <meta name='og:description' content={description} />
      <meta name='og:image' content={`${MAOMAO_SITE_URL}static/images/logo.png`} />
      <meta name='fb:app_id' content={FACEBOOK_APP_ID} />
      <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
      <meta name='google-site-verification' content='R5eOMNDR503rLLPoq12fEQbVWTWxBWaRYqUJiKasHkk' />
      <link rel='dns-prefetch' href='https://fonts.googleapis.com' />
      <link rel='dns-prefetch' href='https://mmapi00.azurewebsites.net' />
      <link rel='dns-prefetch' href='https://maomao.blob.core.windows.net:' />
      <link rel='apple-touch-icon' href='/static/images/logo.png' />
      <link rel='icon' href='/static/images/logo.png' />
      <link rel='apple-touch-icon' sizes='57x57' href='/static/images/icons/apple-icon-57x57.png' />
      <link rel='apple-touch-icon' sizes='60x60' href='/static/images/icons/apple-icon-60x60.png' />
      <link rel='apple-touch-icon' sizes='72x72' href='/static/images/icons/apple-icon-72x72.png' />
      <link rel='apple-touch-icon' sizes='76x76' href='/static/images/icons/apple-icon-76x76.png' />
      <link rel='apple-touch-icon' sizes='114x114' href='/static/images/icons/apple-icon-114x114.png' />
      <link rel='apple-touch-icon' sizes='120x120' href='/static/images/icons/apple-icon-120x120.png' />
      <link rel='apple-touch-icon' sizes='144x144' href='/static/images/icons/apple-icon-144x144.png' />
      <link rel='apple-touch-icon' sizes='152x152' href='/static/images/icons/apple-icon-152x152.png' />
      <link rel='apple-touch-icon' sizes='180x180' href='/static/images/icons/apple-icon-180x180.png' />
      <link rel='icon' type='image/png' sizes='192x192' href='/static/images/icons/android-icon-192x192.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='/static/images/icons/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='96x96' href='/static/images/icons/favicon-96x96.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/static/images/icons/favicon-16x16.png' />
      <link rel='manifest' href='/static/manifest.json' />
      <meta name='msapplication-TileColor' content='#0868ac' />
      <meta name='msapplication-TileImage' content='/static/images/icons/ms-icon-144x144.png' />
      <meta name='theme-color' content='#0868ac' />
      <link rel='chrome-webstore-item' href='https://chrome.google.com/webstore/detail/onkinoggpeamajngpakinabahkomjcmk' />
      <link rel='stylesheet' href='/static/vendors/font-awesome/css/font-awesome.min.css' />
      <link rel='stylesheet' href='/static/vendors/css/nprogress.css' />
      <link rel='stylesheet' href='/static/vendors/css/addtohomescreen.css' />
      <script src='/static/vendors/js/jquery-3.2.1.slim.min.js' />
      <script src='/static/vendors/js/tether.min.js' />
      <script src='/static/vendors/js/bootstrap.min.js' />
      <script src='/static/vendors/js/snoowrap-v1.min.js' />
      <script src='/static/vendors/js/addtohomescreen.min.js' />
    </Head>
    <AppHeader hidden={isSplitView} />
    {children}
    <Notification />
    {
      isSplitView ? undefined
      : <div className='footer-area'>
        <Footer brandName={brandName}
          facebookUrl='https://www.facebook.com/maomao.hiring'
          address={businessAddress}
        />
      </div>
    }
    { /* <DevTools /> */}
  </div>
)
