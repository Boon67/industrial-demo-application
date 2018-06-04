function portalAgDryingTempHistory(req, resp){
    ClearBlade.init({request: req});
    var msg = ClearBlade.Messaging();
    _req=req;
    _resp=resp;
    _measurementName="Ag Drying Temp";
    msg.getMessageHistory("MixingPlant/A/DryingAggregateTemp", 0, 0, messageHistoryCallBack);
}
