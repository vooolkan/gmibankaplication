package gmibank.stepdefinitions;

import gmibank.pages.AccountManagePage;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

public class AccountManageStepDefinitions {
    AccountManagePage accountManagePage =new AccountManagePage();
    @Given("employee Manage Accounts tiklar")
    public void employee_Manage_Accounts_tiklar() {
        accountManagePage.manageAccountLink.click();

    }

    @Given("employee Create a new Account a tiklar")
    public void employee_Create_a_new_Account_a_tiklar() {
        accountManagePage.newAccountLink.click();

    }
    @Given("employee Description text box a {string} bilgisini girer bos birakamaz")
    public void employee_Description_text_box_a_bilgisini_girer_bos_birakamaz(String aciklama) {
        accountManagePage.descriptionTextbox.sendKeys(aciklama);
        // bos birakilamaz
    }

    @Given("employee Balance text box'a dolar miktarini sadece rakam girer.")
    public void employee_Balance_text_box_a_dolar_miktarini_sadece_rakam_girer() {


    }

    @Given("employee Account Type secimi yapabilir")
    public void employee_Account_Type_secimi_yapabilir() {

    }

    @Given("employee Account Status Type secimi yapabilmelidir")
    public void employee_Account_Status_Type_secimi_yapabilmelidir() {

    }

    @Given("Employee kutusundan bir calisan secebilmelidir")
    public void employee_kutusundan_bir_calisan_secebilmelidir() {

    }

    @Then("kullanici sign in butonuna tiklayarak Manage Account sayfasina geri doner")
    public void kullanici_sign_in_butonuna_tiklayarak_Manage_Account_sayfasina_geri_doner() {

    }

}
