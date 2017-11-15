$(document).ready(function() {
    
      $('#calendar').fullCalendar({

        eventRender: function(events,element) {
            if(events.type == 'normal') {
                element.css('background-color','red');
            }
        },

  
        handleWindowResize: true,  
        weekends: true,
          defaultView: 'month',

          
  
          header: {
              left: 'prev,next',
                  center: 'title',
                  right : 'basicDay,basicWeek,month,listMonth'
              
                  
          },
  
 // https://stackoverflow.com/questions/36841659/filtering-fullcalendar-events-with-checkboxes-client-side-with-javascript 
  
 events: [{
  start: '2017-11-05',
  title: 'Example 1',
  type: 'normal'
}, 

{
  start: '2017-11-14',
  title: 'Example 2',
  type: 'normal'
}, 

{
  start:'2017-11-28',
  title: 'Example 3',
  type: 'not-normal'
}]

  
  
      });
  
    });