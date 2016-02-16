var moment = require('moment');

function Alarm(alarmTime) {
  this.createdAt = moment();
  this.alarmTime = alarmTime
}

Alarm.prototype.checkAlarm = function() {
  console.log(moment().diff(this.alarmTime, moment()));
  if (moment().diff(this.alarmTime, moment()) < 1000 && moment().diff(this.alarmTime, moment()) > -1000) {
    return true;
  }
  return false;
}

$(function() {
  var alarms = [];
  setInterval(function() {
    $(".current-time").text(moment());
  }, 1000);

  setInterval(function() {
    for (alarm in alarms) {
      if (alarms[alarm].checkAlarm()) {
        alert("Alarmmmmm" + alarm);
        alarms.splice(alarms.indexOf(alarm),1);
        $("#" + alarm.alarmTime).remove();
      }
    }
  }, 1000);

  $("#create-alarm").on("submit", function(e) {
    e.preventDefault();
    console.log($("#alarmTime").val());
    var alarm = new Alarm(moment($("#alarmTime").val()).toString());
    alarms.push(alarm);
    $(".alarms").append("<p id=" + alarm.alarmTime + ">" + alarm.alarmTime + "</p>");
  })
});
