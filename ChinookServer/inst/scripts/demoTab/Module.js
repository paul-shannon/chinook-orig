//----------------------------------------------------------------------------------------------------
var DemoModule = (function () {

  var datasetName = null;
  var thisModulesName = "Demo";
  var thisModulesOutermostDiv = "demoDiv";

  var contentDiv;

//--------------------------------------------------------------------------------------------
function initializeUI()
{
  contentDiv = $("#demoContentDiv")
  $(window).resize(handleWindowResize);
  handleWindowResize();

  demoDiv=$("demoDiv");
  demoControlsDiv=$("demoControlsDiv");

}  // initializeUI
//----------------------------------------------------------------------------------------------------
function handleWindowResize ()
{
  contentDiv.width(0.95 * $(window).width());
  contentDiv.height(0.80 * $(window).height());

} // handleWindowResize
//--------------------------------------------------------------------------------
function datasetSpecified(msg)
{
  console.log("--- Module.cleveland: datasetSpecified: " + msg.payload);
  hub.enableTab("demoDiv");
    
  datasetName = msg.payload;

  console.log("demoModule, datasetSpecified, name: " + datasetName);
  console.log(JSON.stringify(msg));

  var newMsg = {cmd: "getDatasetItemNames", callback: "demoDisplayDatasetItemNames",
                status: "request", payload: {dataset: datasetName}};

  hub.send(JSON.stringify(newMsg)); 

} // datasetSpecified
//--------------------------------------------------------------------------------
function displayDatasetItemNames(msg)
{
  hub.raiseTab(thisModulesOutermostDiv);
  console.log("displayDemo");
  console.log(JSON.stringify(msg));
  var itemNames = msg.payload
  var demoContentDiv = $("#demoContentDiv");
  demoContentDiv.append("<ol>");
  for(var i=0; i < itemNames.length; i++){
     demoContentDiv.append("<li> " + itemNames[i]);
     } // for i
  demoContentDiv.append("</ol>");
 	
} // displayDatasetItemNames
//--------------------------------------------------------------------------------
function initializeModule()
{
  hub.addOnDocumentReadyFunction(initializeUI);
  hub.addMessageHandler("datasetSpecified", datasetSpecified);
  hub.addMessageHandler("demoDisplayDatasetItemNames", displayDatasetItemNames); 

} // initializeModule
//----------------------------------------------------------------------------------------------------
return{

  init: initializeModule

};
//----------------------------------------------------------------------------------------------------
}); // DemoModule

demoModule = DemoModule();
demoModule.init();
