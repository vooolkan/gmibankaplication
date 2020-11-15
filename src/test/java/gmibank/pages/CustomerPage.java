package gmibank.pages;

import gmibank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CustomerPage {

    public CustomerPage(){
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(id = "username")
    public WebElement userNameTexBox;

    @FindBy (id = "password")
    public WebElement passwordTextbox;

    @FindBy(xpath = "//*[@id=\"entity-menu\"]/a/span")
    public WebElement myoperations;

    @FindBy(xpath = "//*[.='Manage Customers']")
    public  WebElement managecustomer;

    @FindBy(xpath = "//*[.='Create a new Customer']")
    public  WebElement createnewcustomer;

    @FindBy(id = "search-ssn")
    public WebElement SSNTextbox;

    @FindBy(xpath = "//*[@id=\"app-view-container\"]/div[1]/div/div/div/div[2]/div/form/div[1]/button")
    public WebElement Searcbox;

    @FindBy(name = "firstName")
    public  WebElement firstname;


    @FindBy(id="tp-customer-lastName")
    public  WebElement lastname;

    @FindBy(id ="tp-customer-email")
    public  WebElement Email;

    @FindBy(id="tp-customer-mobilePhoneNumber")
    public  WebElement phone;

    @FindBy(id="tp-customer-middleInitial")
    public WebElement middle;

    @FindBy(id="tp-customer-phoneNumber")
    public WebElement phonenumber;

    @FindBy(xpath = "//*[@id='tp-customer-zipCode']")
    public  WebElement zipcode;

    @FindBy(id = "tp-customer-address")
    public WebElement adress;

    @FindBy(id = "tp-customer-city")
    public WebElement city;

    @FindBy(id="tp-customer-country")
    public WebElement country;

    @FindBy(id="tp-customer-state")
    public  WebElement state;

    @FindBy(xpath = "//*[@id='tp-customer-account']")
    public  WebElement account;

    @FindBy(xpath = "//*[@id='tp-customer-zelleEnrolled']")
    public WebElement zellecheckbox;

    @FindBy(id="save-entity")
    public  WebElement savebutton;

    @FindBy(xpath = "//*[@id='tp-customer-heading']/span")
    public  WebElement basarimesaji;


}
