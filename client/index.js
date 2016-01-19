var on = require('sendevent')
  , parse = require('./url')
  , find = require('./find')
  , replace = require('./replace')

on('/instant/events', function(ev) {
  // resolve the URL
  var url = parse(ev.url)

  if (!/.css$/.test(url)) {
    return
  }

  // look for a stylesheet
  var el = find.byURL('link', 'href', url)
  if (el) return replace(el, url.pathname + '?v=' + new Date().getTime())
})
