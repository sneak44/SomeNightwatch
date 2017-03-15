# Nightwatch

UI automated testing framework powered by [Node.js](http://nodejs.org/). It uses the [Selenium WebDriver API](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol).

[![Build Status](https://travis-ci.org/nightwatchjs/nightwatch.svg?branch=master)](https://travis-ci.org/nightwatchjs/nightwatch) [![NPM version](https://badge.fury.io/js/nightwatch.png)](http://badge.fury.io/js/nightwatch) [![Coverage Status](https://coveralls.io/repos/nightwatchjs/nightwatch/badge.svg?branch=master&service=github)](https://coveralls.io/github/nightwatchjs/nightwatch?branch=master)

***

#### [Homepage](http://nightwatchjs.org) | [Getting Started](http://nightwatchjs.org/getingstarted) | [Developer Guide](http://nightwatchjs.org/guide) | [API Reference](http://nightwatchjs.org/api) | [Changelog](https://github.com/nightwatchjs/nightwatch/releases)


# SomeNightwatch

Just clone this project:
```sh
git clone git@github.com:sneak44/SomeNightwatch.git
```

To execute the happy case:
```sh
nightwatch -c bin/nightwatch.json examples/tests/Springer/springer_happy.js
```

To execute the unhappy case:
```sh
nightwatch -c bin/nightwatch.json examples/tests/Springer/springer_unhappy.js
```
If the Geckodriver is not executable, navigate to the bin and perform:
```sh
chmod +x geckodriver.mac
```
*geckodriver for OSX is used
