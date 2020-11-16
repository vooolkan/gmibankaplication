package gmibank.stepdefinitions;

import gmibank.pages.HomePage;
import gmibank.pages.PasswordPage;
import gmibank.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;

public class PasswordStepDefinitions {
    HomePage homePage = new HomePage();
    PasswordPage passwordPage = new PasswordPage();
    @Given("Kullanici password sekmesine tiklar")
    public void kullanici_password_sekmesine_tiklar() {
        homePage.SifreSekmesi.click();
    }

    @Given("Kullanici Mevcut sifre {string}, Yeni sifre ve Yeni sifre tekrar textboxlarinin hepsine mevcut sifreyi yazar")
    public void kullanici_Mevcut_sifre_Yeni_sifre_ve_Yeni_sifre_tekrar_textboxlarinin_hepsine_mevcut_sifreyi_yazar(String mevcutSifre) {
        passwordPage.mevcutSifre.sendKeys(mevcutSifre);
        passwordPage.yeniSifre.sendKeys(mevcutSifre);
        passwordPage.yeniSifreTekrar.sendKeys(mevcutSifre);
    }

    @Given("Kullanici Kaydet butonuna tiklar")
    public void kullanici_Kaydet_butonuna_tiklar() {
        passwordPage.PasswordPageKaydetButton.click();
    }

    @Then("Kullanici mevcut passwordun yeni password olarak kullanilamadigini dogrular")
    public void kullanici_mevcut_passwordun_yeni_password_olarak_kullanilamadigini_dogrular() {
        String sifreDegistirildi = passwordPage.uyariMEsaji.getText();
        Boolean sifreDegistiMi = passwordPage.uyariMEsaji.isDisplayed();
        Assert.assertFalse(sifreDegistiMi);

    }

    @Given("Kullanici Mevcut sifre {string} textboxina mevcut sifreyi girer")
    public void kullanici_Mevcut_sifre_textboxina_mevcut_sifreyi_girer(String mevcutSifre) {
        passwordPage.mevcutSifre.clear();
        passwordPage.mevcutSifre.sendKeys(mevcutSifre);
    }

    @Given("Kullanici Yeni sifre textboxina icinde kucuk harf olmayan alti haneli {string} password girer")
    public void kullanici_Yeni_sifre_textboxina_icinde_kucuk_harf_olmayan_alti_haneli_password_girer(String password) {
        passwordPage.yeniSifre.clear();
        passwordPage.yeniSifre.sendKeys(password);
    }

    @Given("Kullanici seviye grafigini kontrol eder")
    public void kullanici_seviye_grafigini_kontrol_eder() {

    }

    @Given("Kullanici alti haneli passworde yedinci hane olarak herhangi bir kucuk harf {string} ekler")
    public void kullanici_alti_haneli_passworde_yedinci_hane_olarak_herhangi_bir_kucuk_harf_ekler(String kücükHarf) {

    }

    @Then("Kullanici seviye grafiginde degisim oldugunu dogrular")
    public void kullanici_seviye_grafiginde_degisim_oldugunu_dogrular() {



    }

    @Given("Kullanici Yeni sifre textboxina icinde buyuk harf olmayan alti haneli password {string} girer")
    public void kullanici_Yeni_sifre_textboxina_icinde_buyuk_harf_olmayan_alti_haneli_password_girer(String password) {
            passwordPage.yeniSifre.clear();
            passwordPage.yeniSifre.sendKeys(password);
    }

    @Given("Kullanici alti haneli passworde yedinci hane olarak herhangi bir büyük harf {string} ekler")
    public void kullanici_alti_haneli_passworde_yedinci_hane_olarak_herhangi_bir_büyük_harf_ekler(String password) {

    }

    @Given("Kullanici Yeni sifre textboxina icinde rakam olmayan alti haneli password {string} girer")
    public void kullanici_Yeni_sifre_textboxina_icinde_rakam_olmayan_alti_haneli_password_girer(String password) {

    }

    @Given("Kullanici alti haneli passworde yedinci hane olarak herhangi bir rakam {string} ekler")
    public void kullanici_alti_haneli_passworde_yedinci_hane_olarak_herhangi_bir_rakam_ekler(String rakam) {

    }

    @Given("Kullanici Yeni sifre textboxina icinde ozel karakter olmayan alti haneli bir {string} password girer")
    public void kullanici_Yeni_sifre_textboxina_icinde_ozel_karakter_olmayan_alti_haneli_bir_password_girer(String password) {

    }

    @Given("Kullanici alti haneli passworde yedinci hane olarak herhangi bir ozel karakter {string} ekler")
    public void kullanici_alti_haneli_passworde_yedinci_hane_olarak_herhangi_bir_ozel_karakter_ekler(String string) {

    }

    @Given("Kullanici Yeni sifre textboxina alti haneli bir password {string} girer")
    public void kullanici_Yeni_sifre_textboxina_alti_haneli_bir_password_girer(String string) {

    }

    @Given("Kullanici Yeni sifre textboxina yedi haneli password {string} girer")
    public void kullanici_Yeni_sifre_textboxina_yedi_haneli_password_girer(String string) {

    }

    @Given("Kullanici Yeni sifre textboxina gecerli passwordu {string} girer")
    public void kullanici_Yeni_sifre_textboxina_gecerli_passwordu_girer(String string) {

    }

    @Given("Kullanici Yeni Sifre Tekrar textboxina gecerli passwordu {string} tekrar girer")
    public void kullanici_Yeni_Sifre_Tekrar_textboxina_gecerli_passwordu_tekrar_girer(String string) {

    }

    @Then("Kullanici mevcut passwordun basarili bir sekilde degistigini dogrular")
    public void kullanici_mevcut_passwordun_basarili_bir_sekilde_degistigini_dogrular() {

    }


}
