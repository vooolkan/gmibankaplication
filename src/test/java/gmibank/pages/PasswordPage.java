package gmibank.pages;

import gmibank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class PasswordPage {
    public PasswordPage() {
        PageFactory.initElements(Driver.getDriver(), this);

    }

    @FindBy(xpath = "//input[@name='currentPassword']")
    public WebElement mevcutSifre;

    @FindBy(xpath = "//input[@name='newPassword']")
    public WebElement yeniSifre;

    @FindBy(xpath = "//input[@name='confirmPassword']")
    public WebElement yeniSifreTekrar;

    @FindBy (xpath = "//button[@type='submit']")
    public WebElement PasswordPageKaydetButton;

    @FindBy (id = "strengthBar")
    public WebElement strengthBar;
}
