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
    timeFormat: 'h:mm',
    displayEventTime: true,
    displayEventEnd: true,

    events: {
      googleCalendarId: 'thu.jigaku@gmail.com',
      color: 'rgb(118,184,198)',
      textColor: 'white'
    },
    eventRender: function(event, element, view) {
        console.log(event.start);
        return $('<div class="event">' + event.start.format('HH:mm') + '-' + event.end.format('HH:mm') + '</div>'
                +'<div class="event">' + event.title + '</div>'
                +'<p class="event">' + event.location + '</p>');
    },
    eventClick: function(event) {
      console.log(event);
      //window.open('https://docs.google.com/forms/d/e/1FAIpQLSf8w1_r8tKEl8Ld_tzYxSG8fKf4LP5vAAd6pFv_PEF0EwHHLQ/viewform');
      return false;
    }
  });
});
