function deleteAllAlerts(req, resp){
    ClearBlade.init({request:req});
    var query = ClearBlade.Query({collectionName: "system alerts"});
    var changes = {
        ack: true
    };
    var callback = function (err, data) {
        if (err) {
        	resp.error("update error : " + JSON.stringify(data));
        } else {
        	resp.success(data);
        }
    };
    query.remove(callback);
}