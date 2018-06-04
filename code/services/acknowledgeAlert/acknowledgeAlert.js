function acknowledgeAlert(req, resp){
    //Updates the alert table and marks the "ack" as true in that the alert is acknowledged
    ClearBlade.init({request:req});
    log(JSON.stringify(req));
    var query = ClearBlade.Query({collectionName: "system alerts"});
    query.equalTo('item_id', req.params.item_id);
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
    query.update(changes, callback);

}