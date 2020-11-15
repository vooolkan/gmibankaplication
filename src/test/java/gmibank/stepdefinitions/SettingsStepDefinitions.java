package gmibank.stepdefinitions;

import gmibank.pages.HomePage;
import gmibank.pages.RegistrationPage;
import gmibank.pages.SettingsPage;
import gmibank.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import java.util.List;

public class SettingsStepDefinitions {
    SettingsPage settingsPage = new SettingsPage();
    HomePage homePage = new HomePage();
    RegistrationPage registrationPage = new RegistrationPage();
    @Given("Kullanici, kullanici adina tiklar")
    public void kullanici_kullanici_adina_tiklar() {
        homePage.kullaniciAdi.click();

    }

    @Given("Kullanici ayarlar sekmesine tiklar")
    public void kullanici_ayarlar_sekmesine_tiklar(){


        homePage.ayarlarSekmesi.click();
    }

    @Given("Kullanici e-posta textbox'ini temizler ve e-posta textbox'ina icerisinde @ karakteri olmayan bir e-mail {string} girer")
    public void kullanici_e_posta_textbox_ini_temizler_ve_e_posta_textbox_ina_icerisinde_karakteri_olmayan_bir_e_mail_girer(String email) {
        settingsPage.SettingPageEmail.clear();
        settingsPage.SettingPageEmail.sendKeys(email);

    }

    @Then("Kullanici This field is invalid uyarisinin göründügünü dogrular")
    public void kullanici_This_field_is_invalid_uyarisinin_göründügünü_dogrular() {
        Boolean uyariMesaji = settingsPage.UyariMesaji.isDisplayed();
        Assert.assertTrue(uyariMesaji);
    }

    @Given("Kullanici e-posta textbox'ini temizler ve e-posta textbox'ina icerisinde .com uzantisi olmayan bir e-mail {string} girer")
    public void kullanici_e_posta_textbox_ini_temizler_ve_e_posta_textbox_ina_icerisinde_com_uzantisi_olmayan_bir_e_mail_girer(String email) {
        settingsPage.SettingPageEmail.clear();
        settingsPage.SettingPageEmail.sendKeys(email);
    }

    @Given("Kullanici e-posta textbox'ini temizler ve e-posta textbox'ina icerisinde .com uzantisi ve @ karakteri olmayan bir e-mail {string} girer")
    public void kullanici_e_posta_textbox_ini_temizler_ve_e_posta_textbox_ina_icerisinde_com_uzantisi_ve_karakteri_olmayan_bir_e_mail_girer(String email) {
        settingsPage.SettingPageEmail.clear();
        settingsPage.SettingPageEmail.sendKeys(email);
    }

    @Given("Kullanici dil secimi icin dropdown'a tiklar")
    public void kullanici_dil_secimi_icin_dropdown_a_tiklar() {
        settingsPage.dilDropDown.click();
    }

    @Then("Kullanici dropdownd'da sadece Turkce ve Ingilizce dil seceneklerinin oldugunu dogrular")
    public void kullanici_dropdownd_da_sadece_Turkce_ve_Ingilizce_dil_seceneklerinin_oldugunu_dogrular() {
        Select select = new Select(settingsPage.dilDropDown);
        List<WebElement> tumSecenekler = select.getOptions();

        for(WebElement w: tumSecenekler){

            System.out.println(w.getText());
            boolean iceriyorMu = tumSecenekler.contains(w);
            Assert.assertTrue(iceriyorMu);
           }
    }

}
