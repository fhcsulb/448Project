$(document).ready(function() {
    
      $('#calendar').fullCalendar({

        // if an Academic event is selected, set the event's color
        eventRender: function(events,element) {
            if(events.type == 'Academic') {
                element.css('background-color', '#6495ED');
            }

            return filter(events);
        },
       
       themeSystem:'jquery-ui',
        
        weekends: true,
          defaultView: 'month',

          
  
          header: {
              left: 'prev,next',
                  center: 'title',
                  right : 'basicDay,basicWeek,month,listMonth'
              
                  
          },
  
   
 events: [ {
  start: '2017-11-20 10:00',
  end: '2017-11-20 17:00',
  title: 'Example 2',
  type: 'Academic'
}, 

{
  start: '2017-11-20 13:00',
  end: '2017-11-20 16:00',
  title: 'Example 2',
  type: 'Academic',
  
}, 

],


      });

       /* When a checkbox changes, re-render events */
       // jQuery to select checkboxes of class 'eventFilter'.
       // when a change occurs (ie. when you check or uncheck the box, something should
       // change visually on the screen.
       $('input:checkbox.eventFilter').on('change', function() {
        $('#calendar').fullCalendar('rerenderEvents');
      });
  
    });


    // function to filter events based on type. 
    function filter(calEvents) {
      var vals = [];
      $('input:checkbox.eventFilter:checked').each(function() {
        vals.push($(this).val());
      });
      return vals.indexOf(calEvents.type) !== -1;
    }

    // things to implement, when you click on an event, it should have a pop-up 