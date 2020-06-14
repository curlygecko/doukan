const Lookup = require("node-yeelight-wifi").Lookup;

let look = new Lookup();

look.on("detected",(light) =>
{
    console.log("new yeelight detected: id="+light.id + " name="+light.name);
});