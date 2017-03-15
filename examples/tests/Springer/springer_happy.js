module.exports = {
  'open link.springer' : function (browser) {
    browser
      .url('http://link.springer.com')
      .waitForElementPresent('//BODY', 1000)
      browser.resizeWindow(1920, 1080);
  },

  'search for Education' :function(client) {
    client
      .setValue('.//*[@id="query"]',['Education',client.Keys.ENTER])
      client.waitForElementPresent(".//*[@id='kb-nav--main']/div[1]/h1",1000)
      client.assert.containsText(".//*[@id='kb-nav--main']/div[1]/h1/strong[2]","Education")
      .end()
  },
}
