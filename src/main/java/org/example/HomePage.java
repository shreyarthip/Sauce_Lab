package org.example;

import org.openqa.selenium.By;
import org.testng.Assert;

public class HomePage extends Util{
    LoadProp loadProp = new LoadProp();

    private By _EnterUserName = By.xpath("//input[@id=\"txtUsername\"]");
    private By _EnterPassword = By.xpath("//input[@id=\"txtPassword\"]");
    private By _loginButton = By.xpath("//input[@id=\"btnLogin\"]");
    private By _ErrorMessage = By.id("spanMessage");

    public void verifyTextToHomepage() {
        String expectedTitle = "Username";
        String actualText1 = getTextFromElement(By.xpath("//span[text()='Username']"));
        Assert.assertEquals(actualText1, expectedTitle);
    }
    public void enterUserName(){
        TypeText(_EnterUserName,loadProp.getProperty("username"),20);
    }
    public void enterPassword(){
        TypeText(_EnterPassword,loadProp.getProperty("password"),20);
    }
    public void clickLoginButton(){
        clickOnElement(_loginButton,20);
    }
    public void verifyTextWelcomePage(){
        String expectedTitle = "Welcome Admin";
        String actualText1 = getTextFromElement(By.xpath("//a[text()='Welcome Admin']"));
        Assert.assertEquals(actualText1, expectedTitle);
    }
    public void invalidUsername(String invalid_username){
        TypeText(_EnterUserName,invalid_username,20);
    }
    public void invalidPassword(String invalid_password){
        TypeText(_EnterPassword,invalid_password,20);
    }
    public void getErrorMessage(){
        getTextFromElement(_ErrorMessage);
        System.out.println(_ErrorMessage);
    }

}

