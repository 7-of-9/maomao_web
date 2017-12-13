import MobileDetect from 'mobile-detect'
import { detect } from 'detect-browser'
const browser = detect()

export function isMobileBrowser (userAgent) {
  const md = new MobileDetect(userAgent)
  return !!md.mobile()
}

export function browserName () {
  console.log('asu kowe', browser)
  return browser && browser.name
}
