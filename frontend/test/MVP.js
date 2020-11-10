describe("BudgetCrtl app MVP test suite", function () {
  const { closeButtonLabel } = require("../src/phrases/App.json");
  const { about, privacyPolicy } = require("../src/phrases/Footer.json");
  const {
    salaryLabel,
    savingLabel,
    expensesLabel,
    balanceLabel,
  } = require("../src/phrases/BalancePresentation.json");
  const {
    updateSalaryLabel,
    salaryInputLabel,
    updateSavingAmoungLabel,
    savingInputLabel,
    expensePageLinkLabel,
  } = require("../src/phrases/LandingPage.json");

  before((browser) => browser.url("http://localhost:3000"));

  //prettier-ignore
  test("Test welcome page elements", function (browser) {
    browser
    .verify.visible("header")
    .verify.visible("h1[id=logo]")

    .verify.visible("main")
    .verify.visible("h2[id=welcome]")
    .verify.visible("input[id=userName]")
    .verify.visible("button[id=welcomeCTA]")

    .verify.visible("footer")
    .verify.visible("#about")
    .verify.visible("#privacy")
    .verify.visible("#copyright");
  });
  //prettier-ignore
  test("Welcome page functionality", function (browser) {
    browser
    .click("#about")
    .verify.containsText(".modal-title", "About")
    .verify.containsText(".modal-body", about)
    .verify.containsText("#modal-close", closeButtonLabel)
    .click("#modal-close")

    .click("#privacy")
    .verify.containsText(".modal-title", "Privacy Policy")
    .verify.containsText(".modal-body", privacyPolicy)
    .verify.containsText("#modal-close", closeButtonLabel)
    .click("#modal-close")

    .setValue("input[id=userName]", "MyUserName")
    .click("button[id=welcomeCTA]")
  });
  //prettier-ignore
  test("Landing page elements", function (browser) {
    browser
    .verify.visible("header")
    .verify.visible("h1[id=logo]")
    .verify.visible("h3[id=userName]")
    .verify.visible("div[id=userIcon]")

    .verify.visible("main")
    .verify.containsText("#salary", salaryLabel)
    .verify.containsText("#saving", savingLabel)
    .verify.containsText("#expenses", expensesLabel)
    .verify.containsText("#balance", balanceLabel)
    .verify.visible("button[id=updateSalary]")
    .verify.not.visible(`input[id=inputSalary]`)
    .verify.visible("button[id=updateSaving]")
    .verify.not.visible(`input[id=inputSaving]`)
    .verify.visible("button[id=updateExpense]")

    .verify.visible("footer")
    .verify.visible("a[href='/landing']")
    .verify.visible("a[href='/analysis']")
    .verify.visible("a[href='/']")
  });
  //prettier-ignore
  test("Landing page functionality", function (browser) {
    browser
    .verify.containsText("header", "MyUserName")

    .verify.containsText("#salary", "0 €")
    .verify.containsText("#saving", "0 €")
    .verify.containsText("#expenses", "0 €")
    .verify.containsText("#balance", "0 €")

    .click("button[id=updateSalary]")
    .verify.visible(`input[id=inputSalary]`)
    .verify.visible(`input[placeholder=${salaryInputLabel}]`)
    .setValue(`input[id=inputSalary]`, "100")
    .click("button[id=saveSalary]")
    .verify.not.visible(`input[id=inputSalary]`)
    .verify.containsText("#salary", "100 €")
    .verify.containsText("#balance", "100 €")

    .click("button[id=updateSaving]")
    .verify.visible(`input[id=inputSaving]`)
    .verify.visible(`input[placeholder=${savingInputLabel}]`)
    .setValue(`input[id=inputSaving]`, "200")
    .click("button[id=saveSaving]")
    .verify.not.visible(`input[id=inputSaving]`)
    .verify.containsText("#saving", "200 €")
    .verify.containsText("#balance", "-100 €")

    .click("button[id=updateExpense]")
  });
   //prettier-ignore
   test("Expense page elements", function (browser) {
    browser
    .verify.visible("header")
    .verify.visible("h1[id=logo]")
    .verify.visible("h3[id=userName]")
    .verify.visible("div[id=userIcon]")

    .verify.visible("main")
    // TODO: main area elements

    .verify.visible("footer")
    .verify.visible("a[href='/landing']")
    .verify.visible("a[href='/analysis']")
    .verify.visible("a[href='/']")
  });
   //prettier-ignore
   test("Expense page functionality", function (browser) {
    browser
    .verify.containsText("header", "MyUserName")

    // TODO: expense functions

    .click("a[href='/']")
  });
  //prettier-ignore
  test("General navigation", function (browser) {
    browser
    .verify.visible("h2[id=welcome]")
    .click("button[id=welcomeCTA]")
    .verify.visible("#salary")
    .click("button[id=updateExpense]")
    .verify.visible("#expenses")
    .click("a[href='/landing']")
    .verify.visible("#salary")
    // .click("a[href='/analysis']") // TODO: add when adding the Analysis page
    // .verify.visible("#tbd") // TODO: element ids still tbd
    .click("a[href='/']")
    .verify.visible("h2[id=welcome]") 
  });

  after((browser) => browser.end());
});
