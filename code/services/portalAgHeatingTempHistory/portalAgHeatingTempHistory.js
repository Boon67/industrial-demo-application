function portalAgHeatingTempHistory(req, resp){
    ClearBlade.init({request: req});
    var msg = ClearBlade.Messaging();
    _req=req;
    _resp=resp;
    _measurementName="Ag Heating Temp";
    msg.getMessageHistory("MixingPlant/A/HeatingAggregateTemp", 0, 0, messageHistoryCallBack);
}
