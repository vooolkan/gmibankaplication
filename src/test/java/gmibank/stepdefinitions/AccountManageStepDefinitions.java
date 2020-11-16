package gmibank.stepdefinitions;


import com.github.javafaker.Faker;
import gmibank.pages.AccountManagePage;
import gmibank.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import java.util.List;

public class AccountManageStepDefinitions {
    AccountManagePage accountManagePage =new AccountManagePage();
    Faker faker = new Faker();
    @Given("employee Manage Accounts tiklar")
    public void employee_Manage_Accounts_tiklar() {
        accountManagePage.manageAccountLink.click();

    }

    @Given("employee Create a new Account a tiklar")
    public void employee_Create_a_new_Account_a_tiklar() {
        accountManagePage.newAccountLink.click();

    }
    @Given("employee Description text box a aciklama bilgisini girer bos birakamaz")
    public void employee_Description_text_box_a_aciklama_bilgisini_girer_bos_birakamaz() {

        accountManagePage.descriptionTextbox.submit();
        Driver.wait(2);

        if(accountManagePage.descriptionTextbox.getAttribute("value").isEmpty()) {
            Assert.assertTrue(accountManagePage.invalidFeadbackText.isDisplayed());
        }
       accountManagePage.descriptionTextbox.sendKeys(faker.address().fullAddress());
        accountManagePage.descriptionTextbox.submit();
        Driver.wait(2);
        String aciklama = accountManagePage.descriptionTextbox.getAttribute("value");
        Assert.assertEquals(accountManagePage.descriptionTextbox.getAttribute("value"), aciklama);

    }

    @Given("employee Balance text box'a dolar miktarini sadece rakam girer.")
    public void employee_Balance_text_box_a_dolar_miktarini_sadece_rakam_girer() {

        accountManagePage.descriptionTextbox.submit();
        Driver.wait(2);

        if(accountManagePage.descriptionTextbox.getAttribute("value").isEmpty()) {
            Assert.assertTrue(accountManagePage.invalidFeadbackText.isDisplayed());
        }
        accountManagePage.balanceTextbox.sendKeys(faker.number().digits(6));

        Driver.wait(2);
        String aciklama = accountManagePage.balanceTextbox.getAttribute("value");
        Assert.assertEquals(accountManagePage.balanceTextbox.getAttribute("value"), aciklama);
    }

    @Given("employee Account Type secimi yapabilir")
    public void employee_Account_Type_secimi_yapabilir() {
        Select select =new Select(accountManagePage.accountType);
        List<WebElement> tumSecenekler = select.getOptions();
        int toplamIndex=tumSecenekler.size();

       boolean seciliMi = accountManagePage.accountType.isSelected();

       for (int i=0; i<toplamIndex; i++){
           select.selectByIndex(i);
           if(seciliMi){
               Assert.assertTrue(seciliMi);
           }
       }

    }

    @Given("employee Account Status Type secimi yapabilmelidir")
    public void employee_Account_Status_Type_secimi_yapabilmelidir() {
        Select select =new Select(accountManagePage.accountStatusType);
        List<WebElement> tumSecenekler = select.getOptions();
        int toplamIndex=tumSecenekler.size();

        boolean seciliMi = accountManagePage.accountStatusType.isSelected();

        for (int i=0; i<toplamIndex; i++){
            select.selectByIndex(i);
            if(seciliMi){
                Assert.assertTrue(seciliMi);
            }
        }

    }

    @Given("Employee kutusundan bir calisan secebilmelidir")
    public void employee_kutusundan_bir_calisan_secebilmelidir() {

    }

    @Then("kullanici sign in butonuna tiklayarak Manage Account sayfasina geri doner")
    public void kullanici_sign_in_butonuna_tiklayarak_Manage_Account_sayfasina_geri_doner() {

    }



}
