package gmibank.pages;

import gmibank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SignInPage {

    public SignInPage(){
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(xpath = "//a[@class='d-flex align-items-center dropdown-toggle nav-link']")
    public WebElement insanButton;

    @FindBy(xpath = "//span[.='Sign in']")
    public WebElement signInSekme;

    @FindBy (id = "username")
    public WebElement userNameTexBox;

    @FindBy (id = "password")
    public WebElement passwordTextbox;

    @FindBy (xpath = "//button[@type='submit']")
    public WebElement signInButton;

    @FindBy(xpath ="//*[@id=\"account-menu\"]/a/span")
    public  WebElement userNameText;

    @FindBy(xpath = "//span[.='Sign out']")
    public WebElement signOutButton;


}
