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
