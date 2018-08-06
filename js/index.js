$(function() {
  $('#calendar').fullCalendar({
    googleCalendarApiKey: 'AIzaSyCcd-P-PnBQRR9CxgahDcS1UQfyDSt5Pb4',
    height: 'parent',
    eventBorderColor: 'white',
    monthNames: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
    dayNamesShort: ['週日','週一','週二','週三','週四','週五','週六'],
    header: {
      left:   '',
      center: '',
      right:  'title'
    },
    displayEventTime: false,
    events: {
      googleCalendarId: 'da71eaunibj3c38ped6u03mook@group.calendar.google.com',
      color: 'rgb(118,184,198)',
      textColor: 'white'
    },
    eventClick: function(event) {
      alert(event.title);
      return false;
    }
  });
});
