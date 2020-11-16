package gmibank.stepdefinitions;

import gmibank.pages.PasswordColorPage;
import gmibank.utilities.ConfigurationReader;
import gmibank.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;

public class PasswordColor_Step_Definitions {
    PasswordColorPage colorPage =new PasswordColorPage();
    String renk="";
    @Given("Kullanıcı GMi Bank ana sayfasına gider")
    public void kullanıcı_GMi_Bank_ana_sayfasına_gider() {
        Driver.getDriver().get("https://www.gmibank.com/");
    }

    @Given("kullanıcı düğmesine tıklayın")
    public void kullanıcı_düğmesine_tıklayın() {
        colorPage.userButton.click();
    }

    @Given("Kayıt sayfasına gitmelisiniz")
    public void kayıt_sayfasına_gitmelisiniz() {
        colorPage.registerButton.click();
    }

    @Given("Şifre metin kutusuna tıklayın")
    public void şifre_metin_kutusuna_tıklayın() {
        colorPage.firstPassBox.click();
    }

    @Given("En az dort karakterden oluşan bir kücük harf iceren bir şifre girin")
    public void en_az_dort_karakterden_oluşan_bir_kücük_harf_iceren_bir_şifre_girin() {
        colorPage.firstPassBox.sendKeys("252252p");



    }



    @Given("Şifre onayı metin kutusuna tıklayın")
    public void şifre_onayı_metin_kutusuna_tıklayın() {
        colorPage.secondPassBox.click();
    }

    @Then("En az dört karakterden oluşan bir kücük harf iceren bir şifre girin")
    public void en_az_dört_karakterden_oluşan_bir_kücük_harf_iceren_bir_şifre_girin() {
        colorPage.firstPassBox.sendKeys("252252p");

    }
    @Given("En az dort karakterden oluşan bir büyük harf iceren bir şifre girin")
    public void en_az_dort_karakterden_oluşan_bir_büyük_harf_iceren_bir_şifre_girin() {
        colorPage.firstPassBox.sendKeys("852852P");
    }

    @Then("En az dört karakterden oluşan bir büyük harf iceren bir şifre girin")
    public void en_az_dört_karakterden_oluşan_bir_büyük_harf_iceren_bir_şifre_girin() {
        colorPage.secondPassBox.sendKeys("852852P");
    }
    @Given("en az dort karakterden oluşan bir basamaklı bir şifre girin")
    public void en_az_dort_karakterden_oluşan_bir_basamaklı_bir_şifre_girin() {
        colorPage.firstPassBox.sendKeys("8521321");
    }

    @Then("En az dört karakterden oluşan bir basamaklı bir şifre girin")
    public void en_az_dört_karakterden_oluşan_bir_basamaklı_bir_şifre_girin() {
        colorPage.secondPassBox.sendKeys("8521321");
    }
    @Given("en az dort karakterden oluşan bir özel karakter iceren bir şifre girin")
    public void en_az_dort_karakterden_oluşan_bir_özel_karakter_iceren_bir_şifre_girin() {
        colorPage.firstPassBox.sendKeys("852951#<");
    }

    @Then("en az dört karakterden oluşan bir özel karakter iceren ikinci metin kutusuna girin")
    public void en_az_dört_karakterden_oluşan_bir_özel_karakter_iceren_ikinci_metin_kutusuna_girin() {
        colorPage.secondPassBox.sendKeys("852951#<");
    }
    @Given("Yedi karakterli bir şifre girin")
    public void yedi_karakterli_bir_şifre_girin() {
        colorPage.firstPassBox.sendKeys("852kGi#<");





    }

    @Given("ikinci kismada Yedi karakterli bir şifre girin")
    public void ikinci_kismada_Yedi_karakterli_bir_şifre_girin() {

        colorPage.secondPassBox.sendKeys("852kGi#<");

    }

    @Given("Renkli cizgi turuncu baslamalidir")
    public void renkli_cizgi_turuncu_baslamalidir() {
        renk= colorPage.line1.getCssValue("background-color");
        Assert.assertEquals(renk, ConfigurationReader.getProperty("turuncu"));
    }

    @Given("Renkli cizgi kirmizi olmalıdır")
    public void renkli_cizgi_kirmizi_olmalıdır() {
        renk= colorPage.line1.getCssValue("background-color");

        Assert.assertEquals(renk, ConfigurationReader.getProperty("kirmizi"));
    }

    @Given("Renkli cizgi kırmızı veya turuncu olmalıdır")
    public void renkli_cizgi_kırmızı_veya_turuncu_olmalıdır() {
        renk= colorPage.line1.getCssValue("background-color");

        Assert.assertEquals(renk, ConfigurationReader.getProperty("kirmizi"));
    }

    @Given("Renkli cizgi turuncu olmalıdır")
    public void renkli_cizgi_turuncu_olmalıdır() {
        renk= colorPage.line1.getCssValue("background-color");

        Assert.assertEquals(renk, ConfigurationReader.getProperty("turuncu"));
    }

    @Given("Renkli cizgi yeşil olmalıdır")
    public void renkli_cizgi_yeşil_olmalıdır() {
        renk= colorPage.line1.getCssValue("background-color");

        Assert.assertEquals(renk, ConfigurationReader.getProperty("yesil"));
    }



}


