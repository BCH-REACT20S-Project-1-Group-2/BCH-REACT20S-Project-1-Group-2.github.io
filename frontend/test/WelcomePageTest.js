module.exports = {
  tags: ["WelcomePage"],
  "@disabled": false,

  "Test for Welcome Page": async function (browser) {
    browser.url("http://localhost:3000");

    browser.expect.element(".WelcomePage").to.be.visible; // Test that the page is visible
    browser.expect.element(".WelcomePage").to.be.a("div"); // Test that it is a div element
    const { height } = await browser.getWindowSize(); // Test that it is full window height
    browser.expect
      .element(".WelcomePage")
      .to.have.css("height")
      .which.equals(`${height}px`);

    browser.expect.element("main").to.be.visible; // Test that main element is visible
    browser.expect // Test its bg color
      .element("main")
      .to.have.css("background")
      .which.contains("rgb(242, 240, 235)");

    browser.expect.element("#welcomeText").to.be.visible; // Test that the welcome text is visible
    browser.expect.element("#welcomeText").to.be.a("h2"); // Test that it is an h2 element
    browser.expect.element("#welcomeText").text.to.equal("Welcome Text"); // Test that it contains the expected welcome text

    browser.expect.element("#userName").to.be.visible; // Test that the user name input is visible
    browser.expect.element("#userName").to.be.a("input"); // Test that it is an input element
    browser.expect // Test that it has the expected placeholder text
      .element("#userName")
      .with.attribute("placeholder")
      .that.equals("your name");

    browser.expect.element("#welcomeCTA").to.be.visible; // Test that the CTA is visible
    browser.expect.element("#welcomeCTA").to.be.a("button"); // Test that it is a button element
    browser.expect.element("#welcomeCTA").text.to.equal("Let's begin"); // Test that it has the expected text
    browser.expect // Test its bg color
      .element("#welcomeCTA")
      .to.have.css("background")
      .which.contains("rgb(226, 125, 96)");

    browser.end();
  }
};
