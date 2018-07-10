var sensitivity = 400;
var ys = 90;
function jump() {var event = document.createEvent("Events"); event.initEvent("keydown",true,true);event.keyCode=32; event.which=32; document.dispatchEvent(event);}
var ctx = Runner().canvasCtx;
function getY(){return Runner().tRex.yPos;}
function readFromEye() {var y = getY();for(var i=Runner().tRex.xPos; i<600; i++) {if(ctx.getImageData(i,y+ys,1,1).data[3]==255&&(ctx.getImageData(i,y+ys,1,1).data[1]==83|ctx.getImageData(i,y+ys,1,1).data[1]==218)){return i;}}}
function read() {if(readFromEye()<sensitivity&&readFromEye!=undefined){jump();}}
setInterval(read,10);
