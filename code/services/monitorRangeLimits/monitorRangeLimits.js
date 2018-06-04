//Range limit monitor. This is a sample set of range limits to trigger alers
//Typically would be managed through a portal for end users.
//This is triggered on every message dropped in the queue to give realtime alerting in the portal
//Uncomment the limts to alert on the othe parameters

//Note the lib_helpers library for the limit settings

function monitorRangeLimits(req, resp){
   ClearBlade.init({request:req});
    var messageObject;
    var topic;
    var bodyObject;
    
    //Topic Parse
    try {
        var topicRequest = JSON.parse(req.params.topic);
        topic = topicRequest;
    } catch(e) {
        topic = req.params.topic;
    }
    
    try {
        var bodyRequest = JSON.parse(req.params.body);
        bodyObject = request;
    } catch(e) {
        bodyObject = req.params.body;
    }
    if ((bodyObject===undefined)||(topic===undefined)) {
        log("invalid object sent");
        resp.error("Invalid Object" + JSON.stringify(req));
    }
    else {
        var topicparts=topic.split("/");
        log(JSON.stringify(topic) + ":" + JSON.stringify(bodyObject));
        if (JSON.parse(bodyObject).measurement > limits[topicparts[topicparts.length-1]]) {
                    //setAlert( topicparts[topicparts.length-1] + " Out of Range", JSON.parse(bodyObject).measurement);
                    setAlert( topicparts[topicparts.length-1], JSON.parse(bodyObject).measurement);

        }
        else
        {
            resp.success(topic + ": " + JSON.parse(bodyObject).measurement);
        }
    }
}
    
    
function setAlert(message, value) {
    var callback = function (err, data) {
        if (err) {
        	return "creation error : " + JSON.stringify(data);
        } else {
        	return data;
        }
    };
    
    //This example assumes a collection of items that have the columns: message and value
    var newAlert = {};
    newAlert.alerttime=new Date().toISOString();
    newAlert.alertmessage=message;
    newAlert.alertvalue=value.toString();
    newAlert.ack=false;
    
    log(JSON.stringify(newAlert));
    var col = ClearBlade.Collection( {collectionName: "system alerts" });
    col.create(newAlert, callback);
}