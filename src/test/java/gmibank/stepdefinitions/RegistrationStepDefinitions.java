package gmibank.stepdefinitions;

import gmibank.pages.RegistrationPage;
import gmibank.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;

public class
RegistrationStepDefinitions {

    RegistrationPage registrationPage = new RegistrationPage();

    @Given("kullanici site {string} adresine gider")
    public void kullanici_site_adresine_gider(String string) {
        Driver.getDriver().get(string);

    }

    @Given("kullanici insan simgesine tiklar")
    public void kullanici_insan_simgesine_tiklar() {
        registrationPage.insanButton.click();

    }

    @Given("kullanici Register linkine tiklar")
    public void kullanici_Register_linkine_tiklar() {
        registrationPage.registrationLink.click();

    }

    @Given("kullanici ssn numarasini {string} yazar")
    public void kullanici_ssn_numarasini_yazar(String ssn) {
        registrationPage.ssnTextBox.sendKeys(ssn);

    }

    @Given("kullanici ad ve soyad {string} ve {string} yazar")
    public void kullanici_ad_ve_soyad_ve_yazar(String ad, String soyad) {
        registrationPage.firstnameTextBox.sendKeys(ad);
        registrationPage.lastnameTextBox.sendKeys(soyad);

    }

    @Given("kullanici adresini {string} yazar")
    public void kullanici_adresini_yazar(String adres) {
        registrationPage.addressTextBox.sendKeys(adres);

    }

    @Given("kullanici cep telefonunu {string} yazar")
    public void kullanici_cep_telefonunu_yazar(String mobilTel) {
        registrationPage.mobileTelTextBox.sendKeys(mobilTel);

    }

    @Given("kullanici username {string} yazar")
    public void kullanici_username_yazar(String userName) {
        registrationPage.userNameTextBox.sendKeys(userName);

    }

    @Given("kullanici e-mail adresini {string} yazar")
    public void kullanici_e_mail_adresini_yazar(String email) {
        registrationPage.emailTextBox.sendKeys(email);

    }

    @Given("kullanici password {string} yazar")
    public void kullanici_password_yazar(String password) {
        registrationPage.firstPasswordTextBox.sendKeys(password);

    }

    @Given("kullanici dogrulama password u {string} tekrar yazar")
    public void kullanici_dogrulama_password_u_tekrar_yazar(String comfirmPass) {
        registrationPage.confirmPasswordTextBox.sendKeys(comfirmPass);


    }

    @Then("kullanici Register buttonuna tiklar ve {string} iceren mesaji gorur")
    public void kullanici_Register_buttonuna_tiklar_ve_iceren_mesaji_gorur(String expectedMesaj) {
        registrationPage.registerButton.click();
        Assert.assertEquals("Registration saved!", expectedMesaj);


    }


}
