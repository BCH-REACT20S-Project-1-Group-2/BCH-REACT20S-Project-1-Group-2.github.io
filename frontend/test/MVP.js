// prettier-ignore
describe("Ecosia.org Demo", function () {
  const { 
    closeButtonLabel
  } = require("../phrases/App.json");
  const { 
    about,
    privacyPolicy
  } = require("../phrases/Footer.json");

  before((browser) => browser.url("http://localhost:3000"));

  test("Demo test ecosia.org", function (browser) {
    browser 
      // Welcome page
        // Check that the elements are there 
          .verify.visible("header")
            .verify.visible("h1[id=logo]")

          .verify.visible("main")
            .verify.visible("h2[id=welcome]")
            .verify.visible("input[id=userName]")
            .verify.visible("button[id=welcomeCTA]")

          .verify.visible("footer")
            .verify.visible("#about")
            .verify.visible("#privacy")
            .verify.visible("#copyright")

        // Check functionality
          .click("#about")
          .verify.containsText(".modal-title", "About")
          .verify.containsText(".modal-body", about)
          .verify.containsText("button", closeButtonLabel)
          .setValue("input[id='userName']", "MyUserName") // Set user name
          .click("button[id=welcomeCTA]") // Click the CTA button

      // Landing page
        .verify.containsText("header", "user name") // Check that the header contains the input user name
        .verify.containsText("#salary", "Total Salary") // Check there is a total salary row
        .verify.containsText("#saving", "Target Saving Amount") // Check there is a target savings row
        .verify.containsText("#expenses", "Total Expenses") // Check there is a total expenses row
        .verify.containsText("#balance", "Balance") // Check there is a balance row

        .verify.visible("button[id=updateSalary")
        .verify.visible("button[id=updateSaving")
        .verify.visible("button[id=updateExpense")

        .verify.containsText("#salary", "0 €") // ...with initial value of 0 €
        .verify.containsText("#salary", "0 €") // ...with initial value of 0 €
        .verify.containsText("#salary", "0 €") // ...with initial value of 0 €
        .verify.containsText("#salary", "0 €"); // ...with initial value of 0 €
  });

  after((browser) => browser.end());
});
