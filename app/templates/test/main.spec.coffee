describe '<%= appname %> test', ->

  page = null

  before ->
    page = await browser.newPage()
    await page.goto 'http://localhost:9000'

  after ->
    await page.close()

  it 'should have <%= appname %> in page title', ->
    expect(await page.title()).to.eql '<%= appname %>'

  it 'should have the hello-view', ->
    SELECTOR = '.hello-view > p'

    await page.waitFor SELECTOR

    helloView = await page.$eval SELECTOR, (helloView) ->
      helloView.innerText

    expect(helloView).to.eql 'Hello <%= appname %> kd.js project!'
