package gmibank.pages;

import gmibank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage {
    public HomePage() {
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy (xpath = "(//*[.='customer lastname'])[2]")
    public WebElement kullaniciAdi;

    @FindBy (xpath = "(//a[@class='dropdown-item'])[3]")
    public WebElement ayarlarSekmesi;

    @FindBy (linkText = "Şifre")
    public WebElement SifreSekmesi;

    @FindBy (xpath = "(//a[@class='dropdown-item'])[5]")
    public WebElement CikisSekmesi;




}
