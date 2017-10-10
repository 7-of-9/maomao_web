const express = require('express')
const router = express.Router()
const request = require('superagent')
const cheerio = require('cheerio')
const _ = require('lodash')
const queryString = require('query-string')
const url = require('url')
const log = require('loglevel')

const SITE_URL = process.env.SITE_URL

const parseUrl = (baseUrl, query) => {
  if (Object.keys(query).length !== 1) {
    const rawUrl = url.parse(baseUrl)
    log.info('rawUrl', rawUrl)
    return `${rawUrl.protocol}//${rawUrl.hostname}${rawUrl.pathname}?${queryString.stringify(Object.assign(rawUrl.search ? queryString.parse(rawUrl.search) : {}, _.omit(query, 'url')))}`
  }
  return baseUrl
}

router.get('/', (req, res) => {
  const { query, body, params } = req
  const { url: baseUrl } = req.query
  log.info('GET: Load url via proxy', baseUrl, query, body, params)
  if (!baseUrl) {
    res.redirect(`${SITE_URL}404_not_found_url`)
  } else {
    request.get(parseUrl(baseUrl, query)).retry(2).end((error, response) => {
      if (error) {
        res.redirect(`${SITE_URL}500_internal_error?message=${error.message}`)
      } else {
        const { text: body } = response
        log.info('href', response.request.url)
        const replace = String.prototype.replace
        const html = replace.call(body, '<head>', `<head><base href="${response.request.url}">`)
        const $ = cheerio.load(html)
        // covert to absoluate url
        $('html').find('meta').each((index, item) => {
          const metaProp = $(item).attr('itemprop')
          const metaContent = $(item).attr('content')
          metaProp === 'image' && $(item).attr('content', url.resolve(response.request.url, metaContent))
        })

        $('html').find('form').each((index, item) => {
          const actionSrc = $(item).attr('action')
          actionSrc && $(item).attr('action', SITE_URL + 'api/preview?url=' + url.resolve(response.request.url, actionSrc))
          actionSrc && $(item).append(`<input name="url" type="hidden" value="${url.resolve(response.request.url, actionSrc)}" />`)
        })

        $('html').find('img').each((index, item) => {
          const imgSrc = $(item).attr('src')
          imgSrc && $(item).attr('src', url.resolve(response.request.url, imgSrc))
        })

        $('html').find('link').each((index, item) => {
          const href = $(item).attr('href')
          href && href !== '#' && $(item).attr('href', url.resolve(response.request.url, href))
        })

        $('html').find('a').each((index, item) => {
          const href = $(item).attr('href')
          href && href !== '#' && $(item).attr('href', url.resolve(response.request.url, href))
        })

        res.set('Content-Type', 'text/html; charset=utf-8')
        const rawHtml = replace.call($.html(), '</body>', `<script src='${SITE_URL}static/js/maomao-embed.js' /></script>`)

        res.send(rawHtml)
      }
    })
  }
})

module.exports = router
