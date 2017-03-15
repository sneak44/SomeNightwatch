module.exports = {
  'open link.springer' : function (browser) {
    browser
      .url('http://link.springer.com')
      .waitForElementPresent('//BODY', 1000)
      browser.resizeWindow(1920, 1080);
  },

  'search for @¶“¡ and validating' :function(client) {
    client
      .setValue('.//*[@id="query"]',['@¶“¡',client.Keys.ENTER])
      client.waitForElementPresent(".//*[@id='kb-nav--main']/div[1]/h1",1000)
      client.assert.containsText(".//*[@id='no-results-message']/h2","Sorry – we couldn’t find what you are looking for. Why not...")
      .end()
  },
}
