package gmibank.pages;

import gmibank.utilities.Driver;
import org.openqa.selenium.support.PageFactory;

public class SettingsPage {

    public SettingsPage(){
        PageFactory.initElements(Driver.getDriver(),this);

    }

}
