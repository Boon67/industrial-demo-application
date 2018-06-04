
var _req, _resp, _measurementName;


var limits={};
limits.bearingtemperature="374";
//limits.CombustionAirTemp="1890";
//limits.HeatingAirTemp="1100";
//limits.DryingAirTemp="590";
//limits.ExhaustAirTemp="470";
limits.EntryAggregateTemp="74";
//limits.HeatingAggregateTemp="190";
//limits.DryingAggregateTemp="370";
limits.ExitAggregateTemp="270";

var messageHistoryCallBack=function(err, data) {
    var ret=[];
    if(err) {
			_resp.error("message history error : " + JSON.stringify(data));
		} else {
		    for(var i=0;i<data.length;i++)
		    {   var tmp={};
		        tmp[_measurementName]=JSON.parse(data[i]["message"]).measurement;
		        tmp.timestamp=new Date(JSON.parse(data[i]["send-date"]*1000));
		        ret.push(tmp);
                //ret.push(new Date(JSON.parse(data[i]["send-date"]*1000)));
		    }
		    //_resp.success(data);
			_resp.success(ret);
		}
	};

