package gmibank.stepdefinitions;

import com.github.javafaker.Faker;
import gmibank.pages.SignInPage;
import gmibank.utilities.ConfigurationReader;
import gmibank.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;

public class LoginStepdefinitions {
    SignInPage signInPage = new SignInPage();
    Faker faker = new Faker();

    @Given("Kullanici login sayfasina gider")
    public void kullanici_login_sayfasina_gider() {

        Driver.getDriver().get(ConfigurationReader.getProperty("gmi_login_url"));


    }
    @Given("username textbox kutusuna gecerli username yazar")
    public void username_textbox_kutusuna_gecerli_username_yazar() {
        signInPage.userNameTexBox.sendKeys(ConfigurationReader.getProperty("gmi_username"));
    }

    @Given("password textbox kutusuna gecerli password yazar")
    public void password_textbox_kutusuna_gecerli_password_yazar() {
        signInPage.passwordTextbox.sendKeys(ConfigurationReader.getProperty("gmi_password"));
    }

    @Given("sign in butonuna tiklayarak giris yapar")
    public void sign_in_butonuna_tiklayarak_giris_yapar() {
        signInPage.signInButton.click();

    }

    @Then("kullanici kendi username ini login kisminda gorur")
    public void kullanici_kendi_username_ini_login_kisminda_gorur() {
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        String userNameText = signInPage.userNameText.getText();
        boolean userNameDogruMu= userNameText.equals(userNameText);
        Assert.assertTrue(userNameDogruMu);


    }


}