package gmibank.pages;

import gmibank.utilities.Driver;
import org.openqa.selenium.support.PageFactory;

public class PasswordPage {
    public PasswordPage(){
        PageFactory.initElements(Driver.getDriver(),this);

    }
}
