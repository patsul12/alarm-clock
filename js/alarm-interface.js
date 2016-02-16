var moment = require('moment');

function Alarm(alarmTime) {
  this.createdAt = moment();
  this.alarmTime = alarmTime
}

Alarm.prototype.checkAlarm = function() {
  if (moment() === this.alarmTime) {
    return true;
  }
  return false;
}
