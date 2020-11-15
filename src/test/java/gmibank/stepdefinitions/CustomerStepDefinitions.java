package gmibank.stepdefinitions;

import gmibank.pages.CustomerPage;
import io.cucumber.java.en.Given;

public class CustomerStepDefinitions {

    CustomerPage customerPage = new CustomerPage();



    @Given("username textbox kutusuna gecerli username {string} girer")
    public void username_textbox_kutusuna_gecerli_username_girer(String string) {
        customerPage.userNameTexBox.sendKeys(string);

    }

    @Given("password textbox kutusuna gecerli password {string} girer")
    public void password_textbox_kutusuna_gecerli_password_girer(String string) {
        customerPage.passwordTextbox.sendKeys(string);

    }

    @Given("Employee My operations a tiklar")
    public void employee_My_operations_a_tiklar() {
        customerPage.myoperations.click();


    }

    @Given("Employee Manage customera tiklar")
    public void employee_Manage_customera_tiklar() {
        customerPage.managecustomer.click();
    }

    @Given("Employee Create a new customera tiklar")
    public void employee_Create_a_new_customera_tiklar() {
        customerPage.createnewcustomer.click();
    }

    @Given("Employee SSN textboxina tiklar ve gecerli SSN numarsini girer")
    public void employee_SSN_textboxina_tiklar_ve_gecerli_SSN_numarsini_girer() throws InterruptedException {
        customerPage.SSNTextbox.sendKeys("108-22-1905");


    }

    @Given("Employee serach boxa tiklar")
    public void employee_serach_boxa_tiklar() throws InterruptedException {
        customerPage.Searcbox.click();
        Thread.sleep(10000);

    }

//    @Given("Employee firstname gorur")
//    public void employee_firstname_gorur() {
//        String isim= "Aziz";
//        Assert.assertEquals(isim,customerPage.firstname.getText());

        @Given("Employee firstname gorur")
        public void employee_firstname_gorur() throws InterruptedException {
            Thread.sleep(3000);
            String isim2=  customerPage.firstname.getAttribute("value");
            System.out.println(isim2);

    }

    @Given("Employee lastname gorur")
    public void employee_lastname_gorur() {

        String soyisim2= customerPage.lastname.getAttribute("value");
        System.out.println(soyisim2);


    }

    @Given("Employee email gorur")
    public void employee_email_gorur() {

        String email2 = customerPage.Email.getAttribute("value");
        System.out.println(email2);

    }

}
