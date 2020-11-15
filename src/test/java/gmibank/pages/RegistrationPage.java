package gmibank.pages;

import gmibank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class RegistrationPage {
    public RegistrationPage(){
        PageFactory.initElements(Driver.getDriver(), this);
    }
    @FindBy(xpath = "//a[@class='d-flex align-items-center dropdown-toggle nav-link']")
    public WebElement insanButton;

    @FindBy(xpath = "//*[.='Register']")
    public WebElement registrationLink;

    @FindBy(id = "ssn")
    public WebElement ssnTextBox;

    @FindBy(id = "firstname")
    public WebElement firstnameTextBox;

    @FindBy(id = "lastname")
    public WebElement lastnameTextBox;

    @FindBy(id = "address")
    public WebElement addressTextBox;

    @FindBy(id = "mobilephone")
    public WebElement mobileTelTextBox;

    @FindBy(id = "username")
    public WebElement userNameTextBox;

    @FindBy(id = "email")
    public WebElement emailTextBox;

    @FindBy(id = "firstPassword")
    public WebElement firstPasswordTextBox;

    @FindBy(id = "secondPassword")
    public WebElement confirmPasswordTextBox;

    @FindBy(id = "register-submit")
    public WebElement registerButton;

    @FindBy(xpath = "//div[@class='Toastify__toast Toastify__toast--success toastify-toast']")
    public WebElement successAlertText;

    @FindBy(xpath = "//div[@class='Toastify__toast Toastify__toast--error toastify-toast']")
    public WebElement errorAlerttext;

    //div[@class='Toastify__toast Toastify__toast--success toastify-toast']





}
