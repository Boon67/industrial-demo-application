function portalHeatingAirTempHistory(req, resp){
    ClearBlade.init({request: req});
    var msg = ClearBlade.Messaging();
    _req=req;
    _resp=resp;
    _measurementName="Heating Air Temp";
    msg.getMessageHistory("MixingPlant/A/HeatingAirTemp", 0, 0, messageHistoryCallBack);
}
