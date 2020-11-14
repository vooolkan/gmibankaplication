package gmibank.stepdefinitions;

import gmibank.pages.SignInPage;
import io.cucumber.java.en.Given;

public class SignUpStepDefinitions {

    SignInPage signInPage =new SignInPage();
    @Given("kullanici sing out tiklayarak cikis yapar")
    public void kullanici_sing_out_tiklayarak_cikis_yapar() {
        signInPage.signOutButton.click();
    }

}
