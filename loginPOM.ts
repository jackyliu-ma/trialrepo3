import { browser,element,by} from "protractor";

 export class LoginPage {

     public getPage(): void {
        browser.get(browser.params.url);
        browser.driver.manage().window().maximize();


     }

     public getTitle(): any {
        this.getPage();
        var title= browser.getTitle()
        return title;

     }

     public setUserName(){
        browser.findElement(by.id('j_username')).clear();
        browser.findElement(by.id('j_username')).sendKeys(browser.params.username);

     }

     public setUPassword(){
        browser.findElement(by.id('j_password')).clear();
        browser.findElement(by.id('j_password')).sendKeys(browser.params.password);

     }

     public clickLoginButton(){
        browser.findElement(by.className('loginButton')).click();
        browser.driver.sleep(5000);
    }

     public confirmLogin(): any{
        var firstFeatureName = browser.findElement(by.xpath('//*[@class="pk-icon-dashboard"]/span')).getText();
        return firstFeatureName;
    }
}