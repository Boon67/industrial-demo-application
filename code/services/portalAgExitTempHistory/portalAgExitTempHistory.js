function portalAgExitTempHistory(req, resp){
    ClearBlade.init({request: req});
    var msg = ClearBlade.Messaging();
    _req=req;
    _resp=resp;
    _measurementName="Ag Exit Temp";
    msg.getMessageHistory("MixingPlant/A/ExitAggregateTemp", 0, 0, messageHistoryCallBack);
}
