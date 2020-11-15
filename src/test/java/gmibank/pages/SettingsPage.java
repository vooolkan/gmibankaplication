package gmibank.pages;

import gmibank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SettingsPage {

    public SettingsPage(){
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy (id = "firstName")
    public WebElement SettingPageIsim;

    @FindBy (id = "lastName")
    public WebElement SettingPageSoyIsim;

    @FindBy (id = "email")
    public WebElement SettingPageEmail;

    @FindBy (id = "langKey")
    public WebElement dilDropDown;

    @FindBy (xpath = "//button[@type='submit']")
    public WebElement SettingsPageKaydetButton;

    @FindBy (xpath = "//div[@class='invalid-feedback']")
    public WebElement UyariMesaji;



}
