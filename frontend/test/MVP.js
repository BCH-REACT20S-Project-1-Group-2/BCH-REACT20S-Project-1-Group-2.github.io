describe("BudgetCrtl app MVP test suite", function () {
  const {
    closeButtonLabel,
    about,
    privacyPolicy,  
    salaryLabel,
    savingLabel,
    expensesLabel,
    balanceLabel,
    updateSalaryLabel,
    salaryInputLabel,
    updateSavingLabel,
    savingInputLabel,
    expensePageLinkLabel
  } = require("../src/phrases/App.json");

  // eslint-disable-next-line no-undef
  before((browser) => browser.url("http://localhost:3000"));

  //prettier-ignore
  test("Test welcome page elements", function (browser) {
    browser.verify
    .visible("header")
    .verify.visible("#logo")

    .verify.visible("main")
    .verify.visible("#welcomeText")
    .verify.visible("#appName")
    .verify.visible("input[id=username]")
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

    .setValue("input[id=username]", "MyUserName")
    .click("button[id=welcomeCTA]")
  });
  //prettier-ignore
  test("Landing page elements", function (browser) {
    browser.verify
        .visible("header")
        .verify.visible("#logo")
        .verify.visible("#username")
        .verify.visible("#userIcon")

        .verify.visible("main")
        .verify.containsText("#salary", salaryLabel)
        .verify.containsText("#saving", savingLabel)
        .verify.containsText("#expenses", expensesLabel)
        .verify.containsText("#balance", balanceLabel)
        .verify.containsText("button[id=accordion-toggle-0]", updateSalaryLabel)
        .verify.not.visible(`input[id=inputSalary]`)
        .verify.containsText("button[id=accordion-toggle-1]", updateSavingLabel)
        .verify.not.visible(`input[id=inputSaving]`)
        .verify.containsText("button[id=updateExpense]",  expensePageLinkLabel)

        .verify.visible("footer")
        .verify.visible("a[href='/landing']")
        .verify.visible("a[href='/analysis']")
        .verify.visible("a[href='/']");
  });
  //prettier-ignore
  test("Landing page functionality", function (browser) {
    browser.verify
      .containsText("header", "MyUserName")

      .verify.containsText("#salary", "0 €")
      .verify.containsText("#saving", "0 €")
      .verify.containsText("#expenses", "0 €")
      .verify.containsText("#balance", "0 €")

      .click("button[id=accordion-toggle-0]")
      .verify.visible(`input[id=inputSalary]`)
      .verify.visible(`input[placeholder=${salaryInputLabel}]`)
      .setValue(`input[id=inputSalary]`, "0100")
      .click("button[id=saveSalary]")
      .verify.not.visible(`input[id=inputSalary]`)
      .verify.containsText("#salary", "100 €")
      .verify.containsText("#balance", "100 €")

      .click("button[id=accordion-toggle-1]")
      .verify.visible(`input[id=inputSaving]`)
      .verify.visible(`input[placeholder=${savingInputLabel}]`)
      .setValue(`input[id=inputSaving]`, "0200")
      .click("button[id=saveSaving]")
      .verify.not.visible(`input[id=inputSaving]`)
      .verify.containsText("#saving", "200 €")
      .verify.containsText("#balance", "-100 €")

      .click("button[id=updateExpense]");
  });
   //prettier-ignore
   test("Expense page elements", function (browser) {
    browser
    .verify.visible("header")
    .verify.visible("#logo")
    .verify.visible("#username")
    .verify.visible("#userIcon")

    .verify.visible("main")
    .verify.containsText("#expenses", expensesLabel)
    .verify.visible("select[id=inputCategory]")
    .verify.visible("input[id=inputExpense]")
    .verify.visible("button[id=savebutton]")

    .verify.visible("footer")
    .verify.visible("a[href='/landing']")
    .verify.visible("a[href='/analysis']")
    .verify.visible("a[href='/']")
  });
   //prettier-ignore
   test("Expense page functionality", function (browser) {
    browser
    .verify.containsText("header", "MyUserName")

    .verify.containsText("#expenses", "0 €")

    .click("button[id=savebutton]")
    .verify.containsText("#expenses", "0 €")

    .click('select[id=inputCategory] option[value="Groceries"]')
    .setValue("input[id=inputExpense]", "0100")
    .click("button[id=savebutton]")
    .verify.containsText("#expenses", "100 €")

    // TODO: transaction history / item testing
    // The component elements do not yet have proper ids to target them in an automated test
    // To be completed once Transaction... styling has been completed

    .click('select[id=inputCategory] option[value="Insurances"]')
    .setValue("input[id=inputExpense]", "0200")
    .click("button[id=savebutton]")
    .verify.containsText("#expenses", "300 €")

    .click("a[href='/']")
  });
  //prettier-ignore
  test("General navigation", function (browser) {
    browser
    .verify.visible("#welcomeText")
    .click("button[id=welcomeCTA]")
    .verify.visible("#salary")
    .click("button[id=updateExpense]")
    .verify.visible("#expenses")
    .click("a[href='/landing']")
    .verify.visible("#salary")
    // .click("a[href='/analysis']") // TODO: add when adding the Analysis page
    // .verify.visible("#tbd") // TODO: element ids still tbd
    .click("a[href='/']")
    .verify.visible("#welcomeText") 
  });

  // eslint-disable-next-line no-undef
  after((browser) => browser.end());
});
