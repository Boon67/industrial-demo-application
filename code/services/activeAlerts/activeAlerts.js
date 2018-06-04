function activeAlerts(req, resp){
    //This demonstrates pulling data from a collection and filtering by using the query mechanism
    //This is used for the custom alert widget in the portal
       ClearBlade.init({request:req});
       	var callback = function (err, data) {
   	    if (err) {
   	    	resp.error("fetch error : " + JSON.stringify(data));
   	    } else {
   	    	resp.success(data);
   	    }
   	};
   	var query = ClearBlade.Query({collectionName: "system alerts"});
   	query.notEqualTo("ack", true);
   	query.descending("alerttime");
   	query.fetch(callback);
}