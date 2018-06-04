function portalDryingAirTempHistory(req, resp){
    ClearBlade.init({request: req});
    var msg = ClearBlade.Messaging();
    _req=req;
    _resp=resp;
    _measurementName="Drying Air Temp";
    msg.getMessageHistory("MixingPlant/A/DryingAirTemp", 0, 0, messageHistoryCallBack);
}