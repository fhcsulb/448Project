$(document).ready(function() {
    
      $('#calendar').fullCalendar({

        // if an Academic event is selected, set the event's color
        eventRender: function(events,element) {
            if(events.type == 'Academic') {
                element.css('background-color', '#6495ED');
            }

            if(events.type == 'Arts & Culture') {
              element.css('background-color', '#FF9300');
          }

          if(events.type == 'Athletics & Recreation') {
            element.css('background-color', '#1BFF00');
        }

        if(events.type == 'CampusLife') {
          element.css('background-color', '#BB3358');
      }

      if(events.type == 'Community') {
        element.css('background-color', '#FAD69A');
    }


    if(events.type == 'Meeting/Lecture/Workshop') {
      element.css('background-color', '#FA9AF6');
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
  start: '2017-12-01 08:00',
  end: '2017-12-01',
  title: 'Native American Heritage Month Celebration',
  type: 'Academic'
}, 

{
  start: '2017-12-02 09:30',
  end: '2017-12-02',
  title: 'HOLIDAY STEM MAKERS DAY',
  type: 'Academic'
},

{
  start: '2017-12-07 17:30',
  end: '2017-12-02',
  title: 'Wellness Lecture',
  type: 'Academic'
},

{
  start: '2017-12-01',
  end: '2017-12-01',
  title: 'David Lamelas: A Life Of Their Own',
  type: 'Arts & Culture'
},

{
  start: '2017-12-01 20:00',
  end: '2017-12-01',
  title: 'Carribean Holiday',
  type: 'Arts & Culture'
},

{
  start: '2017-12-01 20:00',
  end: '2017-12-01',
  title: 'Polarioid Stories',
  type: 'Arts & Culture'
},

{
  start: '2017-12-02',
  end: '2017-12-02',
  title: 'David Lamelas: A Life Of Their Own',
  type: 'Arts & Culture'
},

{
  start: '2017-12-02 16:00',
  end: '2017-12-02',
  title: 'Ashley Cortez Junior Recital',
  type: 'Arts & Culture'
},

{
  start: '2017-12-02 20:00',
  end: '2017-12-02',
  title: 'Benton Castillo-Preciado Senior Recital',
  type: 'Arts & Culture'
},

{
  start: '2017-12-02 20:00',
  end: '2017-12-02',
  title: 'Polarioid Stories',
  type: 'Arts & Culture'
},

{
  start: '2017-12-03',
  end: '2017-12-03',
  title: 'David Lamelas: A Life Of Their Own',
  type: 'Arts & Culture'
},

{
  start: '2017-12-03 20:00',
  end: '2017-12-03',
  title: 'Tom Hughes Senior Recital',
  type: 'Arts & Culture'
},

{
  start: '2017-12-04',
  end: '2017-12-04',
  title: 'David Lamelas: A Life Of Their Own',
  type: 'Arts & Culture'
},

{
  start: '2017-12-04 20:00',
  end: '2017-12-04',
  title: 'Beach Orchestra',
  type: 'Arts & Culture'
},

{
  start: '2017-12-05',
  end: '2017-12-05',
  title: 'David Lamelas: A Life Of Their Own',
  type: 'Arts & Culture'
},

{
  start: '2017-12-05 20:00',
  end: '2017-12-05',
  title: 'The Lyris Quartet',
  type: 'Arts & Culture'
},

{
  start: '2017-12-06',
  end: '2017-12-06',
  title: 'David Lamelas: A Life Of Their Own',
  type: 'Arts & Culture'
},

{
  start: '2017-12-06 20:00',
  end: '2017-12-06',
  title: 'Concert Band / Brass Chamber',
  type: 'Arts & Culture'
},

{
  start: '2017-12-07',
  end: '2017-12-07',
  title: 'David Lamelas: A Life Of Their Own',
  type: 'Arts & Culture'
},

{
  start: '2017-12-07 20:00',
  end: '2017-12-07',
  title: 'Horn Recital',
  type: 'Arts & Culture'
},

{
  start: '2017-12-08',
  end: '2017-12-08',
  title: 'David Lamelas: A Life Of Their Own',
  type: 'Arts & Culture'
},

{
  start: '2017-12-07 20:00',
  end: '2017-12-07',
  title: 'Dorothy Robins Grad Recital',
  type: 'Arts & Culture'
},

{
  start: '2017-12-09',
  end: '2017-12-09',
  title: 'David Lamelas: A Life Of Their Own',
  type: 'Arts & Culture'
},

{
  start: '2017-12-10',
  end: '2017-12-10',
  title: 'David Lamelas: A Life Of Their Own',
  type: 'Arts & Culture'
},

{
  start: '2017-12-02 10:00',
  end: '2017-12-02',
  title: 'Ultimate Frisbee Alumni Round Robin',
  type: 'Athletics & Recreation'
},

{
  start: '2017-12-02 11:00',
  end: '2017-12-02',
  title: 'MBB 2017-2018 Season',
  type: 'Athletics & Recreation'
},

{
  start: '2017-12-02 11:00',
  end: '2017-12-02',
  title: 'MBB Shootaround',
  type: 'Athletics & Recreation'
},

{
  start: '2017-12-03 09:00',
  end: '2017-12-03',
  title: 'MBB 2017-2018 Season',
  type: 'Athletics & Recreation'
},

{
  start: '2017-12-02 09:00',
  end: '2017-12-02',
  title: 'MBB Shootaround',
  type: 'Athletics & Recreation'
},

{
  start: '2017-12-16 16:00',
  end: '2017-12-16',
  title: 'MBB 2017-2018 Season',
  type: 'Athletics & Recreation'
},

{
  start: '2017-12-17 14:00',
  end: '2017-12-17',
  title: 'WBB 2017-2018 Season',
  type: 'Athletics & Recreation'
},

{
  start: '2017-12-20 15:00',
  end: '2017-12-20',
  title: 'WBB 2017-2018 Season',
  type: 'Athletics & Recreation'
},

{
  start: '2017-12-21 12:00',
  end: '2017-12-21',
  title: 'WBB 2017-2018 Season',
  type: 'Athletics & Recreation'
},

{
  start: '2017-12-30 16:00',
  end: '2017-12-30',
  title: 'MBB 2017-2018 Season',
  type: 'Athletics & Recreation'
},

{
  start: '2017-12-01 06:00',
  end: '2017-12-01',
  title: 'Blind to History: Public Art Installation',
  type: 'CampusLife'
},

{
  start: '2017-12-01 12:00',
  end: '2017-12-01',
  title: 'Jumma Prayer',
  type: 'CampusLife'
},

{
  start: '2017-12-01 15:00',
  end: '2017-12-01',
  title: 'Graduate Studies - General Info Session',
  type: 'CampusLife'
},

{
  start: '2017-12-01 15:30',
  end: '2017-12-01',
  title: 'Forty-Niner Shops Holiday Party',
  type: 'CampusLife'
},

{
  start: '2017-12-01 10:00',
  end: '2017-12-01',
  title: 'HIV Mobile Unit (LB Health Dept.)',
  type: 'CampusLife'
},

{
  start: '2017-12-05 11:00',
  end: '2017-12-05',
  title: 'PAUSE Outreach',
  type: 'CampusLife'
},

{
  start: '2017-12-06 12:00',
  end: '2017-12-06',
  title: 'Noon Concert',
  type: 'CampusLife'
},

{
  start: '2017-12-06 13:00',
  end: '2017-12-06',
  title: 'CABO',
  type: 'CampusLife'
},

{
  start: '2017-12-06 17:30',
  end: '2017-12-06',
  title: 'Night of Relaxation',
  type: 'CampusLife'
},

{
  start: '2017-12-07 09:00',
  end: '2017-12-07',
  title: 'CABO',
  type: 'CampusLife'
},

{
  start: '2017-12-08 10:00',
  end: '2017-12-08',
  title: 'CSU Ocean Studies Institute Workshop',
  type: 'CampusLife'
},

{
  start: '2017-12-08 10:30',
  end: '2017-12-08',
  title: 'CA Mini Corps Professional Development',
  type: 'CampusLife'
},

{
  start: '2017-12-08 12:00',
  end: '2017-12-08',
  title: 'Jumma Prayer',
  type: 'CampusLife'
},

{
  start: '2017-12-08 15:00',
  end: '2017-12-08',
  title: 'Graduate Studies - General Info. Session',
  type: 'CampusLife'
},

{
  start: '2017-12-09 15:00',
  end: '2017-12-09',
  title: 'Ethnic Studies Conference',
  type: 'CampusLife'
},

{
  start: '2017-12-13 07:00',
  end: '2017-12-13',
  title: 'Finals Week',
  type: 'CampusLife'
},

{
  start: '2017-12-14 07:00',
  end: '2017-12-14',
  title: 'Finals Week',
  type: 'CampusLife'
},

{
  start: '2017-12-15 07:00',
  end: '2017-12-15',
  title: 'Finals Week',
  type: 'CampusLife'
},

{
  start: '2017-12-15 15:00',
  end: '2017-12-15',
  title: 'CED Graduate Programs Community Development',
  type: 'CampusLife'
},

{
  start: '2017-12-16 07:00',
  end: '2017-12-16',
  title: 'Finals Week',
  type: 'CampusLife'
},

{
  start: '2017-12-17 07:00',
  end: '2017-12-17',
  title: 'Finals Week',
  type: 'CampusLife'
},

{
  start: '2017-12-18 07:00',
  end: '2017-12-18',
  title: 'Finals Week',
  type: 'CampusLife'
},

{
  start: '2017-12-19 07:00',
  end: '2017-12-19',
  title: 'Finals Week',
  type: 'CampusLife'
},

{
  start: '2017-12-19 12:00',
  end: '2017-12-19',
  title: 'CLA Luncheon',
  type: 'CampusLife'
},

{
  start: '2017-12-20 12:00',
  end: '2017-12-20',
  title: 'CLA Luncheon',
  type: 'CampusLife'
},

{
  start: '2017-12-01 08:00',
  end: '2017-12-01',
  title: 'CHESS Interviews',
  type: 'Meeting/Lecture/Workshop'
},

{
  start: '2017-12-01 09:00',
  end: '2017-12-01',
  title: 'Internship Faculty Reception',
  type: 'Meeting/Lecture/Workshop'
},

{
  start: '2017-12-01 10:00',
  end: '2017-12-01',
  title: 'ASIMBOT Meeting',
  type: 'Meeting/Lecture/Workshop'
},

{
  start: '2017-12-01 10:00',
  end: '2017-12-01',
  title: 'Leadership Academy Workshop',
  type: 'Meeting/Lecture/Workshop'
},

{
  start: '2017-12-01 12:00',
  end: '2017-12-01',
  title: 'Life Project',
  type: 'Meeting/Lecture/Workshop'
},

{
  start: '2017-12-01 12:30',
  end: '2017-12-01',
  title: 'DSS Leadership Meeting',
  type: 'Meeting/Lecture/Workshop'
},

{
  start: '2017-12-01 14:00',
  end: '2017-12-01',
  title: 'President Ambassador Meeting',
  type: 'Meeting/Lecture/Workshop'
},

{
  start: '2017-12-01 16:30',
  end: '2017-12-01',
  title: 'Alumni Outra',
  type: 'Meeting/Lecture/Workshop'
},

{
  start: '2017-12-02 21:30',
  end: '2017-12-02',
  title: 'CAMP Family Event',
  type: 'Meeting/Lecture/Workshop'
},

{
  start: '2017-12-02 17:15',
  end: '2017-12-02',
  title: 'Theta Tau Meeting',
  type: 'Meeting/Lecture/Workshop'
},

{
  start: '2017-12-04 10:00',
  end: '2017-12-04',
  title: 'Leadership Academy Workshop',
  type: 'Meeting/Lecture/Workshop'
},

{
  start: '2017-12-04 11:00',
  end: '2017-12-04',
  title: 'Christians on Campus General Meeting',
  type: 'Meeting/Lecture/Workshop'
},

{
  start: '2017-12-04 14:00',
  end: '2017-12-04',
  title: 'Students in Fashion Meetings',
  type: 'Meeting/Lecture/Workshop'
},

{
  start: '2017-12-04 15:30',
  end: '2017-12-04',
  title: 'BPE Meetings',
  type: 'Meeting/Lecture/Workshop'
},

{
  start: '2017-12-04 19:00',
  end: '2017-12-04',
  title: 'MAPS Pre-PA',
  type: 'Meeting/Lecture/Workshop'
},

{
  start: '2017-12-05 12:00',
  end: '2017-12-05',
  title: 'Leadership Academy Workshop',
  type: 'Meeting/Lecture/Workshop'
},

{
  start: '2017-12-05 12:30',
  end: '2017-12-05',
  title: 'LB State College Republicans General Meeting',
  type: 'Meeting/Lecture/Workshop'
},

{
  start: '2017-12-05 13:00',
  end: '2017-12-05',
  title: 'Health Science Student Association Meeting',
  type: 'Meeting/Lecture/Workshop'
},

{
  start: '2017-12-05 15:30',
  end: '2017-12-05',
  title: 'NSCS Semester Meeting',
  type: 'Meeting/Lecture/Workshop'
},

{
  start: '2017-12-05 15:45',
  end: '2017-12-05',
  title: 'Mike Levin For Congress Phonebank',
  type: 'Meeting/Lecture/Workshop'
},

{
  start: '2017-12-05 17:30',
  end: '2017-12-05',
  title: 'Assocation of Pre-Pharmacy General Meeting',
  type: 'Meeting/Lecture/Workshop'
},

{
  start: '2017-12-05 19:00',
  end: '2017-12-05',
  title: 'Chapter Meetings',
  type: 'Meeting/Lecture/Workshop'
},

{
  start: '2017-12-06 09:00',
  end: '2017-12-06',
  title: 'International Plastic Surgery Conference',
  type: 'Meeting/Lecture/Workshop'
},

{
  start: '2017-12-06 19:00',
  end: '2017-12-06',
  title: 'Chapter Meetings',
  type: 'Meeting/Lecture/Workshop'
},

{
  start: '2017-12-06 10:00',
  end: '2017-12-06',
  title: 'Faculty Student Staff Department Holiday Party',
  type: 'Meeting/Lecture/Workshop'
},

{
  start: '2017-12-06 10:00',
  end: '2017-12-06',
  title: 'Leadership Academy Workshop',
  type: 'Meeting/Lecture/Workshop'
},

{
  start: '2017-12-06 12:00',
  end: '2017-12-06',
  title: 'DSC Advisory Board Meeting',
  type: 'Meeting/Lecture/Workshop'
},

{
  start: '2017-12-06 14:00',
  end: '2017-12-06',
  title: 'Health Science Student Assocation Meeting',
  type: 'Meeting/Lecture/Workshop'
},

{
  start: '2017-12-06 15:30',
  end: '2017-12-06',
  title: 'ASI Senate Meeting',
  type: 'Meeting/Lecture/Workshop'
},

{
  start: '2017-12-06 17:00',
  end: '2017-12-06',
  title: 'Circle K Semester Meeting',
  type: 'Meeting/Lecture/Workshop'
},

{
  start: '2017-12-06 17:15',
  end: '2017-12-06',
  title: '22 West News Workshop',
  type: 'Meeting/Lecture/Workshop'
},

{
  start: '2017-12-06 19:00',
  end: '2017-12-06',
  title: 'Delta Sigma Chi Workshops',
  type: 'Meeting/Lecture/Workshop'
},

{
  start: '2017-12-06 19:00',
  end: '2017-12-06',
  title: 'HaU Meeting',
  type: 'Meeting/Lecture/Workshop'
},

{
  start: '2017-12-06 19:00',
  end: '2017-12-06',
  title: 'Sigma Lambda Beta Meetings',
  type: 'Meeting/Lecture/Workshop'
},

{
  start: '2017-12-07 07:30',
  end: '2017-12-07',
  title: 'College of Education, Staff Meetings',
  type: 'Meeting/Lecture/Workshop'
},

{
  start: '2017-12-07 09:00',
  end: '2017-12-07',
  title: '9th World Biomarkers Congress',
  type: 'Meeting/Lecture/Workshop'
},

{
  start: '2017-12-07 10:00',
  end: '2017-12-07',
  title: 'Leadership Academy Workshop',
  type: 'Meeting/Lecture/Workshop'
},

{
  start: '2017-12-07 12:00',
  end: '2017-12-07',
  title: 'Lobby Corps Meeting',
  type: 'Meeting/Lecture/Workshop'
},

{
  start: '2017-12-07 14:45',
  end: '2017-12-07',
  title: 'Student Organization Orientation & Food Handling Workshops',
  type: 'Meeting/Lecture/Workshop'
},

{
  start: '2017-12-07 16:00',
  end: '2017-12-07',
  title: 'California Faculty Assocation - End of Year Party',
  type: 'Meeting/Lecture/Workshop'
},

{
  start: '2017-12-07 16:00',
  end: '2017-12-07',
  title: 'Student Media Internship Class',
  type: 'Meeting/Lecture/Workshop'
},

{
  start: '2017-12-07 18:00',
  end: '2017-12-07',
  title: 'Cambodian Student Society',
  type: 'Meeting/Lecture/Workshop'
},

{
  start: '2017-12-07 19:00',
  end: '2017-12-07',
  title: 'HGSA Meetings',
  type: 'Meeting/Lecture/Workshop'
},

{
  start: '2017-12-07 19:30',
  end: '2017-12-07',
  title: 'Delta Sigma Pi Semester Meeting',
  type: 'Meeting/Lecture/Workshop'
},

{
  start: '2017-12-07 19:30',
  end: '2017-12-07',
  title: 'Zeta Phi Beta Meetings',
  type: 'Meeting/Lecture/Workshop'
},

{
  start: '2017-12-08 11:30',
  end: '2017-12-08',
  title: 'Capital Outlay AD-HOC Meeting',
  type: 'Meeting/Lecture/Workshop'
},

{
  start: '2017-12-08 12:00',
  end: '2017-12-08',
  title: 'Life Project',
  type: 'Meeting/Lecture/Workshop'
},

{
  start: '2017-12-08 12:00',
  end: '2017-12-08',
  title: 'Judiciary Meeting',
  type: 'Meeting/Lecture/Workshop'
},
{
  start: '2017-12-07 12:30',
  end: '2017-12-07',
  title: 'DSS Leadership Meeting',
  type: 'Meeting/Lecture/Workshop'
},

{
  start: '2017-12-08 08:30',
  end: '2017-12-08',
  title: 'Student Fee Advisory Committee Meeting',
  type: 'Meeting/Lecture/Workshop'
},

{
  start: '2017-12-08 14:00',
  end: '2017-12-08',
  title: 'Cabinet Meetings',
  type: 'Meeting/Lecture/Workshop'
},

{
  start: '2017-12-08 14:00',
  end: '2017-12-08',
  title: 'Leadership Academy Workshop',
  type: 'Meeting/Lecture/Workshop'
},

{
  start: '2017-12-09 08:00',
  end: '2017-12-09',
  title: 'Single Subject Credential Meeting',
  type: 'Meeting/Lecture/Workshop'
},

{
  start: '2017-12-09 13:00',
  end: '2017-12-09',
  title: 'VP-DAF Open Forums',
  type: 'Meeting/Lecture/Workshop'
},

{
  start: '2017-12-12 14:00',
  end: '2017-12-12',
  title: 'Social Justice & Equity Committee',
  type: 'Meeting/Lecture/Workshop'
},

{
  start: '2017-12-13 11:30',
  end: '2017-12-13',
  title: 'Interfolio Training',
  type: 'Meeting/Lecture/Workshop'
},

{
  start: '2017-12-13 14:00',
  end: '2017-12-13',
  title: 'CLA Chairs Meeting',
  type: 'Meeting/Lecture/Workshop'
},

{
  start: '2017-12-13 15:30',
  end: '2017-12-13',
  title: 'CLA Faculty Council Meetings',
  type: 'Meeting/Lecture/Workshop'
},

{
  start: '2017-12-14 10:30',
  end: '2017-12-14',
  title: 'Interfolio Training',
  type: 'Meeting/Lecture/Workshop'
},

{
  start: '2017-12-14 13:00',
  end: '2017-12-14',
  title: 'VP-DAF Open Forums',
  type: 'Meeting/Lecture/Workshop'
},

{
  start: '2017-12-15 15:00',
  end: '2017-12-15',
  title: 'CED Graduate Programs Community Development',
  type: 'Meeting/Lecture/Workshop'
},

{
  start: '2017-12-15 17:00',
  end: '2017-12-15',
  title: 'Holiday Potluck',
  type: 'Meeting/Lecture/Workshop'
},

{
  start: '2017-12-18 07:00',
  end: '2017-12-18',
  title: 'ES Leadership Retreat',
  type: 'Meeting/Lecture/Workshop'
},

{
  start: '2017-12-18 16:00',
  end: '2017-12-18',
  title: 'CED Graduate Programs Community Development',
  type: 'Meeting/Lecture/Workshop'
},

{
  start: '2017-12-19 12:00',
  end: '2017-12-19',
  title: 'CLA Luncheon',
  type: 'Meeting/Lecture/Workshop'
},

{
  start: '2017-12-20 12:00',
  end: '2017-12-20',
  title: 'CLA Luncheon',
  type: 'Meeting/Lecture/Workshop'
},

{
  start: '2017-12-20 17:15',
  end: '2017-12-20',
  title: '22 West News Workshop',
  type: 'Meeting/Lecture/Workshop'
},

{
  start: '2017-12-21 15:00',
  end: '2017-12-21',
  title: 'SDHE End of Summer Retreat',
  type: 'Meeting/Lecture/Workshop'
},

{
  start: '2017-12-22 14:00',
  end: '2017-12-22',
  title: 'Cabinet Meetings',
  type: 'Meeting/Lecture/Workshop'
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