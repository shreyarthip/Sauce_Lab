
package org.example;
import org.openqa.selenium.By;
import org.openqa.selenium.MutableCapabilities;
import org.openqa.selenium.WebDriver;
import java.util.concurrent.TimeUnit;
import org.example.LoadProp;
import org.example.Util;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.edge.EdgeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.ie.InternetExplorerOptions;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import java.net.URL;
import java.net.MalformedURLException;


public class BrowserManager extends  Util {
    public static LoadProp loadProp = new LoadProp();

    public static final String SAUCE_USERNAME =loadProp.getProperty("SAUCE_USERNAME");  //  "n1k1.123";
    public static final String SAUCE_ACCESS_KEY =loadProp.getProperty("SAUCE_ACCESS_KEY"); // "83c3e32b-0628-4404-849b-9b5d2f7acf2a";//Access key
    public static final String URL = " https://" + loadProp.getProperty("SAUCE_USERNAME")  + ":" + loadProp.getProperty("SAUCE_ACCESS_KEY")  + "@ondemand.us-west-1.saucelabs.com:443/wd/hub";
    //https://n1k1.123:83c3e32b-0628-4404-849b-9b5d2f7acf2a@ondemand.us-west-1.saucelabs.com:443/wd/hub

    public void SetBrowser() {
        String browserName = loadProp.getProperty("browserName");
        boolean SAUCE_LAB = false;

        if (SAUCE_LAB) {
            System.out.println("Running in SauceLab......with browser " + browserName);
            if (browserName.equalsIgnoreCase("Chrome")) { //for chrome browser selection
                MutableCapabilities sauceOptions = new MutableCapabilities();
                ChromeOptions browserOptions = new ChromeOptions();
               // DesiredCapabilities caps = DesiredCapabilities.chrome();
                browserOptions.setExperimentalOption("w3c", true);
                browserOptions.setCapability("platformName", "Windows 10");
                browserOptions.setCapability("browserVersion", "71.0");
                browserOptions.setCapability("sauce:options", sauceOptions);

                try { //Exception handling for remote web driver
                    driver = new RemoteWebDriver (new URL(URL), sauceOptions );
                } catch (MalformedURLException e) {
                    e.printStackTrace();
                }

            } else if (browserName.equalsIgnoreCase("firefox")) {
                MutableCapabilities sauceOptions = new MutableCapabilities();
                FirefoxOptions browserOptions = new FirefoxOptions();
               // DesiredCapabilities caps = DesiredCapabilities.firefox();
                browserOptions.setCapability("platformName", "Windows 10");
                browserOptions.setCapability("browserVersion", "43.0");
                browserOptions.setCapability("sauce:options", sauceOptions);

                try {
                    driver = new RemoteWebDriver(new URL(URL), sauceOptions);
                } catch (MalformedURLException e) {
                    e.printStackTrace();
                }
            } else if (browserName.equalsIgnoreCase("IE")) ;
            {
                MutableCapabilities sauceOptions = new MutableCapabilities();
                InternetExplorerOptions browserOptions = new InternetExplorerOptions();
              //  DesiredCapabilities caps = DesiredCapabilities.internetExplorer();
                browserOptions.setCapability("platformName", "Windows 10");
                browserOptions.setCapability("browserVersion", "11.285");
                browserOptions.setCapability("sauce:options", sauceOptions);

                try {
                    driver = new RemoteWebDriver(new URL(URL) ,sauceOptions);
                } catch (MalformedURLException e) {
                    e.printStackTrace();
                }
            }
        } else {
            if (browserName.equalsIgnoreCase("chrome")) {
                System.setProperty("webdriver.chrome.driver", "src\\test\\resources\\BrowserDrivers\\chromedriver.exe");
                driver = new ChromeDriver();

            } else if (browserName.equalsIgnoreCase("firefox")) {//create firefox instance
                System.setProperty("webdriver.gecko.driver", "src\\test\\resources\\BrowserDrivers\\geckodriver.exe");
                driver = new FirefoxDriver();
            } else {
                System.out.println("Browser is not correct");
            }

            driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
            driver.get("https://opensource-demo.orangehrmlive.com");
            driver.manage().window().maximize();
        }

        // public void CloseBrowser () {
        //  driver.close();
    }
}








