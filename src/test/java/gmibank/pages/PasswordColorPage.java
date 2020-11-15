package gmibank.pages;

import gmibank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class PasswordColorPage {
    public PasswordColorPage() {
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(xpath = "//a[@href='#']")
    public WebElement loginAndRegisterButton;

    @FindBy(xpath = "//span[.='Register']")
    public WebElement registerMenuLink;


    @FindBy(id = "ssn")
    public WebElement ssnTextbox;

    @FindBy(xpath = "//div[.='Your SSN is invalid']")
    public WebElement ssnHataMesaji;

    @FindBy(id = "firstname")
    public WebElement firstnameTextbox;

    @FindBy(xpath = "//div[.='Your First Name is required']")
    public WebElement firstnameHataMesaji;

    @FindBy(id = "lastname")
    public WebElement lastnameTextbox;

    @FindBy(xpath = "//div[.='Your Last Name is required']")
    public WebElement lastnameHataMesaji;

    @FindBy(id = "address")
    public WebElement addressTextbox;

    @FindBy(id = "mobilephone")
    public WebElement mobilePhoneTextbox;

    @FindBy(xpath = "//div[.='Your mobile phone number is invalid']")
    public WebElement mobilePhoneHataMesaji;

    @FindBy(id = "username")
    public WebElement usernameTextbox;

    @FindBy(id = "email")
    public WebElement emailTextbox;

    @FindBy(id = "firstPassword")
    public WebElement firstPasswordTextbox;

    @FindBy(id = "secondPassword")
    public WebElement secondPasswordTextbox;

    @FindBy(id = "register-submit")
    public WebElement registerButton1;

    @FindBy(xpath = "//strong[.='Registration saved!']")
    public WebElement registrationSuccessMessage;

    @FindBy (id = "account-menu")
    public WebElement userButton;

    @FindBy (xpath = "//*[.='Register']")
    public WebElement registerButton;

    @FindBy (id = "firstPassword")
    public WebElement firstPassBox;

    @FindBy (xpath = "(//*[@class='invalid-feedback'])[1]")
    public WebElement messageUnderTextBox;

    @FindBy (id = "secondPassword")
    public WebElement secondPassBox;

    @FindBy (xpath = "(//li[@class='point'])[1]")
    public WebElement line1;

    @FindBy (xpath = "(//li[@class='point'])[2]")
    public WebElement line2;

    @FindBy (xpath = "(//li[@class='point'])[3]")
    public WebElement line3;

    @FindBy (xpath = "(//li[@class='point'])[4]")
    public WebElement line4;

    @FindBy (xpath = "(//li[@class='point'])[5]")
    public WebElement line5;
}
