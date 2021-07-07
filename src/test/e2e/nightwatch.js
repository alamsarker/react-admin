describe('Dashboard', function() {
  before(browser => browser.url(browser.launchUrl));
    test('DashBoard', function (browser) {
      browser
        .waitForElementVisible('body')
        .assert.containsText('.card-body', 'Dashboard')
    });

    test('User Management', function (browser) {
      browser
        .waitForElementVisible('body')
        .assert.containsText('.card-body', 'Dashboard')
        .click('#nw-user-list', function(){
					this.assert.containsText('.card-header', 'User Management')
				})
        .click('#nw-create-new-user', function(){
          this.assert.containsText('.card-header', 'User Form')
          this.assert.containsText('#nw-submit-button', 'Save')
        })
        .click('button[type=submit]', function(){
          this.assert.containsText('.invalid-feedback', 'Required')
        })
        .click('#nw-cancel-button', function(){
          this.assert.containsText('.card-header', 'User Management')
        })
        .click('.nw-user-details:nth-of-type(1)', function () {
          this.assert.containsText('.card-header', 'User Details')
        })
        .click('a[type=button]', function(){
          this.assert.containsText('.card-header', 'User Management')
        })
    });

    after(browser => browser.end());
});
