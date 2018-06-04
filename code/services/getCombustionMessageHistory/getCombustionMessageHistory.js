function getCombustionMessageHistory(req, resp){
    ClearBlade.init({request: req});
    var msg = ClearBlade.Messaging();
    _req=req;
    _resp=resp;
    _measurementName="CombustionAirTemp";
    msg.getMessageHistory("MixingPlant/A/CombustionAirTemp", 0, 0, messageHistoryCallBack);
}
