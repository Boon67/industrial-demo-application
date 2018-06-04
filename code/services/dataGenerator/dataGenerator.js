function dataGenerator(req, resp){
    //This function simulates data coming into ClearBlade 
    //from a set of sensors and would be placed on the message quee.
var topic="";
var max=0;
var min=100;
    ClearBlade.init({request:req});
    var measurementName="measurement";
    var measurementUnit="°F";
    
    topic="MixingPlant/A/CombustionAirTemp";
    max=1900;
    min=1800;
    genObject(max,min,measurementName, measurementUnit, topic);
    
    topic="MixingPlant/A/HeatingAirTemp";
    max=1200;
    min=1000;
    genObject(max,min,measurementName, measurementUnit, topic);
    
    topic="MixingPlant/A/DryingAirTemp";
    max=600;
    min=550;
    genObject(max,min,measurementName, measurementUnit, topic);
    
    topic="MixingPlant/A/ExhaustAirTemp";
    max=475;
    min=400;
    genObject(max,min,measurementName, measurementUnit, topic);
    
    topic="MixingPlant/A/EntryAggregateTemp";
    max=75;
    min=50;
    genObject(max,min,measurementName, measurementUnit, topic);
    
    topic="MixingPlant/A/HeatingAggregateTemp";
    max=200;
    min=190;
    genObject(max,min,measurementName, measurementUnit, topic);
    
    topic="MixingPlant/A/DryingAggregateTemp";
    max=375;
    min=350;
    genObject(max,min,measurementName, measurementUnit, topic);
    
    topic="MixingPlant/A/ExitAggregateTemp";
    max=275;
    min=266;
    genObject(max,min,measurementName, measurementUnit, topic);

    topic="MixingPlant/A/bearing/bearing1/bearingtemperature";
    max=400;
    min=300;
    genObject(max,min,measurementName, measurementUnit, topic);
    
    measurementUnit="RPM";
    topic="MixingPlant/A/bearing/bearing1/bearingrpm";
    max=3000;
    min=2800;
    genObject(max,min,measurementName, measurementUnit, topic);

    resp.success(true);
}

function publishTopic(obj, topic) {
    var msg = ClearBlade.Messaging();
    log(topic + " : " + JSON.stringify(obj));
    msg.publish(topic, JSON.stringify(obj));
}

function genObject(max, min, measurementName, measurementUnit, topic) {
    var obj={};
    obj[measurementName]=Math.floor(Math.random() * (max - min)) + min;
    obj.unit=measurementUnit;
    publishTopic(obj, topic);
    return true;
}