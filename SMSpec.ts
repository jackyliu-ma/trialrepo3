import { browser} from "protractor";
import { LoginPage} from "../../Login/PO/loginPO";
import { ScheduledMaintenancePO} from "../PO/ScheduledMaintenancePO";
import { ScheduledMaintenanceIndexPO } from "../PO/ScheduledMaintenanceIndexPO";



describe("Scheduled Maintenance", function(){
    let loginPage=new LoginPage();
    let SM=new ScheduledMaintenancePO();
    let SMIndex=new ScheduledMaintenanceIndexPO();
    let originalTimeout: any;

    beforeAll(async function(){
      browser.waitForAngularEnabled(false);
      originalTimeout= jasmine.DEFAULT_TIMEOUT_INTERVAL;
      jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
     // await loginPage.getPage();
     })

   
    afterEach(function(){
    browser.sleep(2000);
     })

    afterAll(function(){
      // browser.pause();
       jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    })

    it("Launch url check", async function () {
      await loginPage.getPage();
      expect(await loginPage.getTitle()).toContain('Fiix');
    });
    it("Login as user", function (){
      loginPage.setUserName();
      loginPage.setPassword();
      expect(loginPage.getUserNameField().getAttribute('value')).toContain(browser.params.username);
      expect(loginPage.getPasswordField().getAttribute('value')).toContain(browser.params.password);
      loginPage.clickLoginButton();
      expect(loginPage.confirmLogin()).toContain("Dashboard");
  })
    it("Create new scheduled maintenance", async function(){
      SMIndex.selectSite();
      browser.sleep(5000);
      let smCode=await SM.createAndReturnSMCode();
      expect(await SMIndex.searchForSM(smCode)).toEqual(smCode);
      SMIndex.deleteSM()
    })
    it("Logoff as user", async function (){
      loginPage.clickLogOffButton();
      expect(await (loginPage.getSignInButtonPresence())).toBe(true);
      
  })
})
