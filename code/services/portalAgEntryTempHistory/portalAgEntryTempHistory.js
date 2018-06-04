function portalAgEntryTempHistory(req, resp){
    ClearBlade.init({request: req});
    var msg = ClearBlade.Messaging();
    _req=req;
    _resp=resp;
    _measurementName="Ag Entry Temp";
    msg.getMessageHistory("MixingPlant/A/EntryAggregateTemp", 0, 0, messageHistoryCallBack);
}
