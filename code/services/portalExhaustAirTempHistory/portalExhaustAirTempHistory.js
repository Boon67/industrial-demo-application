function portalExhaustAirTempHistory(req, resp){
    ClearBlade.init({request: req});
    var msg = ClearBlade.Messaging();
    _req=req;
    _resp=resp;
    _measurementName="Exhaust Air Temp";
    msg.getMessageHistory("MixingPlant/A/ExhaustAirTemp", 0, 0, messageHistoryCallBack);
}
