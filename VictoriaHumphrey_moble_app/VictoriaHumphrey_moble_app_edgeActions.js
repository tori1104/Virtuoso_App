/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${aboutBtn}", "click", function(sym, e) {
         sym.play("about");
         
         sym.stop("about");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${backBtn}", "click", function(sym, e) {
         sym.play("home");
         
         sym.stop("home");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${cameraBtn}", "click", function(sym, e) {
         sym.play("sell");
         
         sym.stop("sell");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${takepicBtn}", "click", function(sym, e) {
         sym.play("approve");
         sym.stop("approve");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${albumBtn}", "click", function(sym, e) {
         sym.play("album");
         
         sym.stop("album");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${usephotoBtn}", "click", function(sym, e) {
         sym.play("usephoto");
         
         sym.stop("usephoto");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${retakeBtn}", "click", function(sym, e) {
         sym.play("sell");
         
         sym.stop("sell");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${priceBtn}", "click", function(sym, e) {
         // insert code for mouse click here
         // Show an element 
         sym.$("numPad").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${profleBtn}", "click", function(sym, e) {
         sym.play("profile");
         
         sym.stop("profile");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${facebookBTN}", "click", function(sym, e) {
         sym.play("facebook");
         
         sym.stop("facebook");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${fbBtn}", "click", function(sym, e) {
         sym.play("facebook");
         
         sym.stop("facebook");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${signupBtn}", "click", function(sym, e) {
         sym.play("signup");
         
         sym.stop("signup");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${emailBtn}", "click", function(sym, e) {
         // insert code for mouse click here
         // Show an element 
         sym.$("keypad").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         // insert code here
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${passwordBtn}", "click", function(sym, e) {
         // insert code for mouse click here
         // Show an element 
         sym.$("keypad").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${fbkeypadBtn}", "click", function(sym, e) {
         // insert code for mouse click here
         // Show an element 
         sym.$("keypad").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${signupBtnpage}", "click", function(sym, e) {
         sym.play("profilepage");
         
         sym.stop("profilepage");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${uploadmoreBtn}", "click", function(sym, e) {
         sym.play("sell");
         
         sym.stop("sell");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${fbloginBtn}", "click", function(sym, e) {
         sym.play("profilepage");
         
         sym.stop("profilepage");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${doneBtn}", "click", function(sym, e) {
         sym.play("profilepage");
         
         sym.stop("profilepage");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${purchaseBtn-Skull}", "click", function(sym, e) {
         sym.play("purchase");
         
         sym.stop("purchase");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${makeofferBtn}", "click", function(sym, e) {
         // insert code for mouse click here
         // Show an element 
         sym.$("youroffer").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${doneBtn2youroffer}", "click", function(sym, e) {
         sym.$("youroffer").hide();
         sym.$("offersent").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${purchaseBtn}", "click", function(sym, e) {
         // insert code for mouse click here
         // Show an element 
         sym.$("confirm").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${crayonBtn}", "click", function(sym, e) {
         sym.play("crayon");
         sym.stop("crayon");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${owlBtn}", "click", function(sym, e) {
         sym.play("owl");
         sym.stop("owl");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${wineBtn}", "click", function(sym, e) {
         sym.play("wine");
         sym.stop("wine");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${twineBtn}", "click", function(sym, e) {
         sym.play("twine");
         sym.stop("twine");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${splatBtn}", "click", function(sym, e) {
         sym.play("splat");
         sym.stop("splat");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Btn'
   (function(symbolName) {   
   
   })("Btn");
   //Edge symbol end:'Btn'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-45771325");