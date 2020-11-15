package gmibank.stepdefinitions;

import gmibank.pages.PasswordColorPage;
import gmibank.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;

public class Password_Step_Definitions {
    PasswordColorPage us_03_page=new PasswordColorPage();
    @Given("Kullanıcı GMi Bank ana sayfasına gider")
    public void kullanıcı_GMi_Bank_ana_sayfasına_gider() {
        Driver.getDriver().get("https://www.gmibank.com/");
    }

    @Given("kullanıcı düğmesine tıklayın")
    public void kullanıcı_düğmesine_tıklayın() {
        us_03_page.userButton.click();
    }

    @Given("Kayıt sayfasına gitmelisiniz")
    public void kayıt_sayfasına_gitmelisiniz() {
        us_03_page.registerButton.click();
    }

    @Given("Şifre metin kutusuna tıklayın")
    public void şifre_metin_kutusuna_tıklayın() {
        us_03_page.firstPassBox.click();
    }

    @Given("En az dort karakterden oluşan bir kücük harf iceren bir şifre girin")
    public void en_az_dort_karakterden_oluşan_bir_kücük_harf_iceren_bir_şifre_girin() {
        us_03_page.firstPassBox.sendKeys("252252p");
        String renk=us_03_page.line1.getCssValue("background-color");
        System.out.println(renk);
        String ada=us_03_page.line1.getAttribute("value");
        System.out.println("qwwqw>>>>>--  "+ada);


    }

    @Given("Renkli cizgi turuncu veya yeşil olmalıdır")
    public void renkli_cizgi_turuncu_veya_yeşil_olmalıdır() throws InterruptedException {
        String renk = us_03_page.line1.getCssValue("background-color");
        System.out.println(renk);




    }

    @Given("Şifre onayı metin kutusuna tıklayın")
    public void şifre_onayı_metin_kutusuna_tıklayın() {
        us_03_page.secondPassBox.click();
    }

    @Then("En az dört karakterden oluşan bir kücük harf iceren bir şifre girin")
    public void en_az_dört_karakterden_oluşan_bir_kücük_harf_iceren_bir_şifre_girin() {
        us_03_page.firstPassBox.sendKeys("252252p");

    }
    @Given("En az dort karakterden oluşan bir büyük harf iceren bir şifre girin")
    public void en_az_dort_karakterden_oluşan_bir_büyük_harf_iceren_bir_şifre_girin() {
        us_03_page.firstPassBox.sendKeys("852852P");
    }

    @Then("En az dört karakterden oluşan bir büyük harf iceren bir şifre girin")
    public void en_az_dört_karakterden_oluşan_bir_büyük_harf_iceren_bir_şifre_girin() {
        us_03_page.secondPassBox.sendKeys("852852P");
    }
    @Given("en az dort karakterden oluşan bir basamaklı bir şifre girin")
    public void en_az_dort_karakterden_oluşan_bir_basamaklı_bir_şifre_girin() {
        us_03_page.firstPassBox.sendKeys("8521321");
    }

    @Then("En az dört karakterden oluşan bir basamaklı bir şifre girin")
    public void en_az_dört_karakterden_oluşan_bir_basamaklı_bir_şifre_girin() {
        us_03_page.secondPassBox.sendKeys("8521321");
    }
    @Given("en az dort karakterden oluşan bir özel karakter iceren bir şifre girin")
    public void en_az_dort_karakterden_oluşan_bir_özel_karakter_iceren_bir_şifre_girin() {
        us_03_page.firstPassBox.sendKeys("852951#");
    }

    @Then("en az dört karakterden oluşan bir özel karakter iceren ikinci metin kutusuna girin")
    public void en_az_dört_karakterden_oluşan_bir_özel_karakter_iceren_ikinci_metin_kutusuna_girin() {
        us_03_page.secondPassBox.sendKeys("852951#<");
    }
    @Given("Yedi karakterli bir şifre girin")
    public void yedi_karakterli_bir_şifre_girin() {
        us_03_page.firstPassBox.sendKeys("852kGi#<");
        String renk = us_03_page.line1.getCssValue("background-color");
        System.out.println("@@@@@@@@@ >>>>   "+us_03_page.line1.getCssValue("color"));
        System.out.println(renk);
        Assert.assertTrue(renk.contains("rgba(0, 255, 0, 1)"));




    }

    @Given("ikinci kismada Yedi karakterli bir şifre girin")
    public void ikinci_kismada_Yedi_karakterli_bir_şifre_girin() {

        us_03_page.secondPassBox.sendKeys("852kGi#<");
    }




}


