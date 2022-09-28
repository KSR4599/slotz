const {Builder, Browser, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  try {
    console.log("Initiating the Process: ");
    await driver.get('https://cgifederal.secure.force.com/scheduleappointment');
    console.log("Initiating the Process in 150 seconds.");
    await new Promise(r => setTimeout(r, 150000));
    console.log("Process Initiated.");

    while(true){
    try{
   var count = (await driver.findElements(By.xpath("//div[@class='ui-state-highlight ui-corner-all']"))).length;
   console.log("Count: "+ count);
   if(count  != 0 ){

    try{
        var datetime = new Date();
        console.log("No Slots. Refreshing at "+ datetime);
       driver.navigate().refresh();
       driver.switch_to.alert.accept();
    } catch(e){
        console.log("Error 1: "+ e);
    }
    } else {
        var datetime = new Date();
     console.log("***************************************Found Slots at "+datetime + "******************************************************");
     await new Promise(r => setTimeout(r, 90000));
    }
} catch(e){
console.log("Error 2 : "+ e);
}
}
  } catch(e){
      console.log("Error 3 : "+ e);
  }
  finally {
    await driver.quit();
  }
})();

