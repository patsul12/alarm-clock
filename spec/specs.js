describe('Alarm', function() {
  it("initializes an alarm", function() {
    var test_alarm = new Alarm(moment("12-25-1995"));
    expect(test_alarm.alarmTime).to.eql(moment("12-25-1995"));

  });
})
