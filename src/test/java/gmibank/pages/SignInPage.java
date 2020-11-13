package gmibank.pages;

import gmibank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SignInPage {

    public SignInPage(){
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy (id = "username")
    public WebElement userName;

    @FindBy (id = "password")
    public WebElement password;

    @FindBy (xpath = "//button[@type='submit']")
    public WebElement signInButton;

    @FindBy(xpath = "//span[.='musteri4 use']")
    public  WebElement userNameText;

    @FindBy(xpath = "//span[.='Sign out']")
    public WebElement signOutButton;


}
