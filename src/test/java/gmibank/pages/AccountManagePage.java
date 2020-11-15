package gmibank.pages;

import gmibank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AccountManagePage {
    public AccountManagePage(){
        PageFactory.initElements(Driver.getDriver(), this);
    }
    //here 
    @FindBy(xpath = "//span[.='My Operations']")
    public WebElement myOperationsLink;

    @FindBy(xpath = "//span[.='Manage Accounts']")
    public WebElement manageAccountLink;

    @FindBy(xpath = "//span[.='Create a new Account']")
    public WebElement newAccountLink;

    @FindBy(id = "tp-account-description")
    public WebElement descriptionTextbox;

    @FindBy(xpath = "//div[@class='invalid-feedback']")
    public WebElement invalidFeadbackText;

    @FindBy(id = "tp-account-balance")
    public WebElement balanceTextbox;

    @FindBy(id = "tp-account-accountType")
    public WebElement accountType;

    @FindBy(id = "tp-account-accountStatusType")
    public WebElement accountStatusType;

    @FindBy(id = "tp-account-employee")
    public WebElement selectEmployee;

    @FindBy(xpath = "(//div[.='This field should be a number.'])[2]")
    public WebElement invalidFeadbackNumber;





}
