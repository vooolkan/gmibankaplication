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

    @FindBy (xpath = "//li[@style='background-color: rgb(255, 0, 0);']")
    public WebElement line1Kirmizi;

    @FindBy (xpath = "//li[@style='background-color: rgb(0, 255, 0);']")
    public WebElement line1Yesil;

    @FindBy (xpath = "//*[.='Şifre değiştirildi!']")
    public WebElement uyariMEsaji;

}
