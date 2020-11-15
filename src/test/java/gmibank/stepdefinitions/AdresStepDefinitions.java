package gmibank.stepdefinitions;

import gmibank.pages.CustomerPage;
import gmibank.pages.SignInPage;
import gmibank.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.support.ui.Select;

public class AdresStepDefinitions {
    CustomerPage customerPage = new CustomerPage();
    SignInPage signInPage = new SignInPage();


    @Given("username textbox kutusuna gecerli {string} girer")
    public void username_textbox_kutusuna_gecerli_girer(String string) {
        signInPage.userNameTexBox.sendKeys(string);

    }

    @Given("password textbox kutusuna gecerli {string} girer")
    public void password_textbox_kutusuna_gecerli_girer(String string) {
        signInPage.passwordTextbox.sendKeys(string);

    }

    @Given("Employee middle textboxina gecerli degeri girer")
    public void employee_middle_textboxina_gecerli_degeri_girer() {
        customerPage.middle.sendKeys("-");

    }

    @Given("Employee phonenumber textboxina gecerli degeri girer")
    public void employee_phonenumber_textboxina_gecerli_degeri_girer() {
        customerPage.phonenumber.sendKeys("698-578-0714");

    }

    @Given("Employee zip code gecerli degri girer")
    public void employee_zip_code_gecerli_degri_girer() {
        customerPage.zipcode.sendKeys("10433");

    }

    @Given("Employee adress textboxina gecerli degeri girer")
    public void employee_adress_textboxina_gecerli_degeri_girer() {
        customerPage.adress.sendKeys("Ipireou 8");

    }

    @Given("Employee city textboxina gecerli degeri girer")
    public void employee_city_textboxina_gecerli_degeri_girer() {
        customerPage.city.sendKeys("Athens");

    }

    @Given("Employee country dropdownda gecerli ulkeyi secer")
    public void employee_country_dropdownda_gecerli_ulkeyi_secer() {
        Select select= new Select(customerPage.country);
        select.selectByIndex(2);


    }

    @Given("Employee state textboxina gecerli state girer")
    public void employee_state_textboxina_gecerli_state_girer() {
        customerPage.state.sendKeys("Miami");

    }

    @Given("Employee accout secer")
    public void employee_accout_secer() {
       Select select = new Select(customerPage.account);
       select.selectByIndex(3);
    }

    @Given("Employee zelle checkboxina tiklar")
    public void employee_zelle_checkboxina_tiklar() {
        customerPage.zellecheckbox.click();

    }

    @Then("Employee save butonuna tiklar ve basari mesajini alir")
    public void employee_save_butonuna_tiklar_ve_basari_mesajini_alir() {
        customerPage.savebutton.click();
        Driver.waitForVisibility(customerPage.basarimesaji,5);

        String mesaj= customerPage.basarimesaji.getText();
        System.out.println(mesaj);

        Assert.assertTrue(customerPage.basarimesaji.isDisplayed());

    }



}
