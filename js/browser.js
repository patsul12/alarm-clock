$(function() {
  var alarms = [];
  setInterval(function() {
    $(".current-time").text(moment());
  }, 1000);

  setInterval(function() {
    for (alarm in alarms) {
      if (alarm.checkAlarm()) {
        alert("Alarmmmmm" + alarm);
        alarms.splice(alarms.indexOf(alarm),1);
        $("#" + alarm.alarmTime).remove();
      }
    }
  }, 1000);

  $("#create-alarm").on("submit", function(e) {
    e.preventDefault();
    var alarm = new Alarm(moment($("alarm-time").val()));
    alarms.push(alarm);
    $(".alarms").append("<p id=" + alarm.alarmTime + ">" + alarm.alarmTime + "</p>");
  })
});
