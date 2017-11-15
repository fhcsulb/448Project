$(document).ready(function() {
    
      $('#calendar').fullCalendar({

        // if an Academic event is selected, set the event's color to red. 
        eventRender: function(events,element) {
            if(events.type == 'Academic') {
                element.css('background-color','red');
            }

            return filter(events);
        },

  
        handleWindowResize: true,  
        weekends: true,
          defaultView: 'month',

          
  
          header: {
              left: 'prev,next',
                  center: 'title',
                  right : 'basicDay,basicWeek,month,listMonth'
              
                  
          },
  
   
 events: [{
  start: '2017-11-05',
  title: 'Example 1',
  type: 'normal'
}, 

{
  start: '2017-11-14',
  title: 'Example 2',
  type: 'Academic'
}, 

{
  start:'2017-11-28',
  title: 'Example 3',
  type: 'not-normal'
}],


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