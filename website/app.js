$(document).ready(function() {
    
      $('#calendar').fullCalendar({

        // if an Academic event is selected, set the event's color
        eventRender: function(events,element) {
            if(events.type == 'Academic') {
                element.css('background-color', '#FF8ECB');
            }

            if(events.type == 'Arts & Culture') {
              element.css('background-color', '#FF8E93');
          }

          if(events.type == 'Athletics & Recreation') {
            element.css('background-color', '#FFC28E');
        }

        if(events.type == 'CampusLife') {
          element.css('background-color', '#A7FF8E');
      }

      if(events.type == 'Community') {
        element.css('background-color', '#8E96FF');
    }


    if(events.type == 'Meeting/Lecture/Workshop') {
      element.css('background-color', '#BE8EFF');
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
  
   
 events: [ 
//OCTOBER//

 {
  start: '2017-10-01 00:00',
  end: '2017-10-01 23:59',
  title: 'David Lamelas: A Life of Their Own',
  type: 'Arts & Culture'
}, 

{
  start: '2017-10-01 18:00',
  end: '2017-10-01 21:00',
  title: 'LBSU Soccer Season - 2017',
  type: 'Athletics & Recreation'
}, 

{
  start: '2017-10-01 14:00',
  end: '2017-10-01 15:00',
  title: 'Alice\'s Wonderland Performance',
  type: 'Arts & Culture'
}, 

{
  start: '2017-10-02 00:00',
  end: '2017-10-02 23:59',
  title: 'David Lamelas: A Life of Their Own',
  type: 'Arts & Culture'
}, 

{
  start: '2017-10-02 08:00',
  end: '2017-10-02 23:30',
  title: 'OUTober (LGBTQ) Celebration',
  type: 'Academic'
}, 

{
  start: '2017-10-03 00:00',
  end: '2017-10-03 23:59',
  title: 'David Lamelas: A Life of Their Own',
  type: 'Arts & Culture'
}, 

{
  start: '2017-10-03 08:00',
  end: '2017-10-03 23:30',
  title: 'OUTober (LGBTQ) Celebration',
  type: 'Academic'  
}, 

{
  start: '2017-10-03 07:00',
  end: '2017-10-03 18:00',
  title: 'Blood Drive',
  type: 'Campus Life'  
}, 

{
  start: '2017-10-03 09:00',
  end: '2017-10-03 23:59',
  title: 'Bike-A-Thon',
  type: 'Campus Life'  
}, 

{
  start: '2017-10-03 12:00',
  end: '2017-10-03 13:30',
  title: 'OUTober Events',
  type: 'Campus Life'  
}, 

{
  start: '2017-10-04 00:00',
  end: '2017-10-04 23:59',
  title: 'David Lamelas: A Life of Their Own',
  type: 'Arts & Culture'
}, 

{
  start: '2017-10-04 08:00',
  end: '2017-10-04 23:30',
  title: 'OUTober (LGBTQ) Celebration',
  type: 'Academic'  
}, 

{
  start: '2017-10-04 00:00',
  end: '2017-10-04 23:59',
  title: 'Bike-A-Thon',
  type: 'Campus Life'  
}, 

{
  start: '2017-10-04 07:00',
  end: '2017-10-04 18:00',
  title: 'Blood Drive',
  type: 'Campus Life'  
}, 

{
  start: '2017-10-04 11:00',
  end: '2017-10-04 13:30',
  title: 'California Faculty Association - Welcome Back',
  type: 'Campus Life'  
}, 

{
  start: '2017-10-05 00:00',
  end: '2017-10-05 23:59',
  title: 'David Lamelas: A Life of Their Own',
  type: 'Arts & Culture'
}, 

{
  start: '2017-10-05 08:00',
  end: '2017-10-05 23:30',
  title: 'OUTober (LGBTQ) Celebration',
  type: 'Academic'  
}, 

{
  start: '2017-10-05 17:30',
  end: '2017-10-05 18:00',
  title: 'Wellness Lectures',
  type: 'Academic'  
}, 

{
  start: '2017-10-05 00:00',
  end: '2017-10-05 17:00',
  title: 'Bike-A-Thon',
  type: 'Campus Life'  
},

{
  start: '2017-10-05 11:00',
  end: '2017-10-05 13:00',
  title: 'Sustainable Transportation Fair',
  type: 'Campus Life'  
},  

{
  start: '2017-10-06 00:00',
  end: '2017-10-06 23:59',
  title: 'David Lamelas: A Life of Their Own',
  type: 'Arts & Culture'
}, 

{
  start: '2017-10-06 08:00',
  end: '2017-10-06 23:30',
  title: 'OUTober (LGBTQ) Celebration',
  type: 'Academic'  
}, 

{
  start: '2017-10-06 07:30',
  end: '2017-10-06 18:00',
  title: 'LBSU Women\'s Tennis Season - 2017-18',
  type: 'Athletics & Recreation'
}, 

{
  start: '2017-10-06 10:30',
  end: '2017-10-06 14:30',
  title: 'CA Mini Corps - Professional Development',
  type: 'Campus Life'  
}, 

{
  start: '2017-10-06 12:00',
  end: '2017-10-06 13:00',
  title: 'Jumma Prayer',
  type: 'Campus Life'  
}, 

{
  start: '2017-10-07 00:00',
  end: '2017-10-07 23:59',
  title: 'David Lamelas: A Life of Their Own',
  type: 'Arts & Culture'
}, 

{
  start: '2017-10-07 08:00',
  end: '2017-10-07 23:30',
  title: 'OUTober (LGBTQ) Celebration',
  type: 'Academic'  
}, 

{
  start: '2017-10-07 00:00',
  end: '2017-10-07 23:59',
  title: 'Saxophone Alumni Recital',
  type: 'Arts & Culture'
}, 

{
  start: '2017-10-07 06:30',
  end: '2017-10-07 18:00',
  title: 'LBSU Women\'s Tennis Season - 2017-18',
  type: 'Athletics & Recreation'
}, 

{
  start: '2017-10-07 17:30',
  end: '2017-10-07 19:00',
  title: 'CBA Grad Program Meeting',
  type: 'Campus Life'  
}, 

{
  start: '2017-10-08 00:00',
  end: '2017-10-08 23:59',
  title: 'David Lamelas: A Life of Their Own',
  type: 'Arts & Culture'
}, 

{
  start: '2017-10-08 08:00',
  end: '2017-10-08 23:30',
  title: 'OUTober (LGBTQ) Celebration',
  type: 'Academic'  
}, 

{
  start: '2017-10-08 16:00',
  end: '2017-10-08 18:00',
  title: 'Faculty Artist - Robe Frear, Trumpet',
  type: 'Arts & Culture'
}, 

{
  start: '2017-10-08 06:30',
  end: '2017-10-08 18:00',
  title: 'LBSU Women\'s Tennis Season - 2017-18',
  type: 'Athletics & Recreation'
}, 

{
  start: '2017-10-08 18:00',
  end: '2017-10-08 21:00',
  title: 'LBSU Soccer Season - 2017',
  type: 'Athletics & Recreation'
}, 

{
  start: '2017-10-08 07:00',
  end: '2017-10-08 12:00',
  title: 'Long Beach Marathon',
  type: 'Campus Life'  
}, 

{
  start: '2017-10-09 00:00',
  end: '2017-10-09 23:59',
  title: 'David Lamelas: A Life of Their Own',
  type: 'Arts & Culture'
}, 

{
  start: '2017-10-09 08:00',
  end: '2017-10-09 23:30',
  title: 'OUTober (LGBTQ) Celebration',
  type: 'Academic'  
}, 

{
  start: '2017-10-09 15:30',
  end: '2017-10-09 21:00',
  title: 'MVB Fall Tournament',
  type: 'Athletics & Recreation'
}, 

{
  start: '2017-10-09 08:00',
  end: '2017-10-09 19:00',
  title: 'Musical WOKE',
  type: 'Campus Life'  
}, 

{
  start: '2017-10-09 11:00',
  end: '2017-10-09 13:00',
  title: 'ASI Fall Tabling',
  type: 'Campus Life'  
}, 

{
  start: '2017-10-09 11:00',
  end: '2017-10-09 13:00',
  title: 'Farm to Student: Produce on the Plaza',
  type: 'Campus Life'  
}, 

{
  start: '2017-10-10 00:00',
  end: '2017-10-10 23:59',
  title: 'David Lamelas: A Life of Their Own',
  type: 'Arts & Culture'
}, 

{
  start: '2017-10-10 08:00',
  end: '2017-10-10 23:30',
  title: 'OUTober (LGBTQ) Celebration',
  type: 'Academic'  
}, 

{
  start: '2017-10-10 08:00',
  end: '2017-10-10 19:00',
  title: 'Musical WOKE',
  type: 'Campus Life'  
}, 

{
  start: '2017-10-10 11:00',
  end: '2017-10-10 14:00',
  title: 'Almost Alumni Freshmen Fair',
  type: 'Campus Life'  
}, 

{
  start: '2017-10-10 11:00',
  end: '2017-10-10 13:00',
  title: 'PAUSE Outreach',
  type: 'Campus Life'  
}, 

{
  start: '2017-10-11 00:00',
  end: '2017-10-11 23:59',
  title: 'David Lamelas: A Life of Their Own',
  type: 'Arts & Culture'
}, 

{
  start: '2017-10-11 08:00',
  end: '2017-10-11 23:30',
  title: 'OUTober (LGBTQ) Celebration',
  type: 'Academic'  
}, 

{
  start: '2017-10-11 08:00',
  end: '2017-10-11 19:00',
  title: 'Musical WOKE',
  type: 'Campus Life'  
}, 

{
  start: '2017-10-11 11:00',
  end: '2017-10-11 14:00',
  title: 'Almost Alumni Freshmen Fair',
  type: 'Campus Life'  
}, 

{
  start: '2017-10-11 12:00',
  end: '2017-10-11 14:00',
  title: 'Noon Concert',
  type: 'Campus Life'  
}, 

{
  start: '2017-10-12 00:00',
  end: '2017-10-12 23:59',
  title: 'David Lamelas: A Life of Their Own',
  type: 'Arts & Culture'
}, 

{
  start: '2017-10-12 08:00',
  end: '2017-10-12 23:30',
  title: 'OUTober (LGBTQ) Celebration',
  type: 'Academic'  
}, 

{
  start: '2017-10-12 08:00',
  end: '2017-10-12 19:00',
  title: 'Musical WOKE',
  type: 'Campus Life'  
}, 

{
  start: '2017-10-12 09:00',
  end: '2017-10-12 14:00',
  title: 'Consumer Affairs Symposium',
  type: 'Campus Life'  
}, 

{
  start: '2017-10-12 10:00',
  end: '2017-10-12 13:00',
  title: 'HIV Mobile Unite (LB Health Dept)',
  type: 'Campus Life'  
}, 

{
  start: '2017-10-12 15:00',
  end: '2017-10-12 17:00',
  title: 'Industry Spotlight: Biosciences',
  type: 'Community'  
}, 

{
  start: '2017-10-12 20:00',
  end: '2017-10-12 22:30',
  title: 'Machinical - Performances',
  type: 'Community'  
}, 

{
  start: '2017-10-13 00:00',
  end: '2017-10-13 23:59',
  title: 'David Lamelas: A Life of Their Own',
  type: 'Arts & Culture'
}, 

{
  start: '2017-10-13 08:00',
  end: '2017-10-13 23:30',
  title: 'OUTober (LGBTQ) Celebration',
  type: 'Academic'  
}, 

{
  start: '2017-10-13 19:00',
  end: '2017-10-13 22:00',
  title: 'WVB 2017 Season',
  type: 'Athletics & Recreation'
}, 

{
  start: '2017-10-13 08:00',
  end: '2017-10-13 19:00',
  title: 'Musical WOKE',
  type: 'Campus Life'  
}, 

{
  start: '2017-10-13 12:00',
  end: '2017-10-13 13:00',
  title: 'Jumma Prayer',
  type: 'Campus Life'  
}, 

{
  start: '2017-10-13 12:00',
  end: '2017-10-13 15:00',
  title: 'Softball 2017 Season vs. Concordia',
  type: 'Campus Life'  
}, 

{
  start: '2017-10-13 20:00',
  end: '2017-10-13 122:30',
  title: 'Machinical - Performances',
  type: 'Community'  
}, 

{
  start: '2017-10-14 00:00',
  end: '2017-10-14 23:59',
  title: 'David Lamelas: A Life of Their Own',
  type: 'Arts & Culture'
}, 

{
  start: '2017-10-14 08:00',
  end: '2017-10-14 23:30',
  title: 'OUTober (LGBTQ) Celebration',
  type: 'Academic'  
}, 

{
  start: '2017-10-14 09:00',
  end: '2017-10-14 14:00',
  title: 'CS Baseball',
  type: 'Athletics & Recreation'
}, 

{
  start: '2017-10-14 19:00',
  end: '2017-10-14 22:00',
  title: 'MVB Fall Tournament',
  type: 'Athletics & Recreation'
}, 

{
  start: '2017-10-14 08:00',
  end: '2017-10-14 13:00',
  title: 'College Inclusion Summit',
  type: 'Campus Life'  
}, 

{
  start: '2017-10-14 20:00',
  end: '2017-10-14 22:30',
  title: 'Machinical - Performances',
  type: 'Community'  
}, 

{
  start: '2017-10-15 00:00',
  end: '2017-10-15 23:59',
  title: 'David Lamelas: A Life of Their Own',
  type: 'Arts & Culture'
}, 

{
  start: '2017-10-15 08:00',
  end: '2017-10-15 23:30',
  title: 'OUTober (LGBTQ) Celebration',
  type: 'Academic'  
},

{
  start: '2017-10-15 16:00',
  end: '2017-10-15 18:00',
  title: 'Concert Jazz and Studio Jazz',
  type: 'Arts & Culture'
}, 

{
  start: '2017-10-15 14:00',
  end: '2017-10-15 16:30',
  title: 'Machinical - Performances',
  type: 'Community'  
}, 

{
  start: '2017-10-16 00:00',
  end: '2017-10-16 23:59',
  title: 'David Lamelas: A Life of Their Own',
  type: 'Arts & Culture'
}, 

{
  start: '2017-10-16 08:00',
  end: '2017-10-16 19:00',
  title: 'Career Center',
  type: 'Academic'  
},  

{
  start: '2017-10-16 08:00',
  end: '2017-10-16 23:30',
  title: 'OUTober (LGBTQ) Celebration',
  type: 'Academic'  
}, 

{
  start: '2017-10-16 09:00',
  end: '2017-10-16 14:00',
  title: 'Living Well at The Beach - Health & Safety Week 2017',
  type: 'Campus Life'  
}, 

{
  start: '2017-10-16 14:00',
  end: '2017-10-16 15:30',
  title: 'ASI Fall Tabling',
  type: 'Campus Life'  
}, 

{
  start: '2017-10-17 00:00',
  end: '2017-10-17 23:59',
  title: 'David Lamelas: A Life of Their Own',
  type: 'Arts & Culture'
}, 

{
  start: '2017-10-17 08:00',
  end: '2017-10-17 19:00',
  title: 'Career Center',
  type: 'Academic'  
},  

{
  start: '2017-10-17 08:00',
  end: '2017-10-17 23:30',
  title: 'OUTober (LGBTQ) Celebration',
  type: 'Academic'  
}, 

{
  start: '2017-10-17 11:00',
  end: '2017-10-17 12:00',
  title: 'Living Well at The Beach - Health & Safety Week 2017',
  type: 'Campus Life'  
}, 

{
  start: '2017-10-17 12:00',
  end: '2017-10-17 14:00',
  title: 'Grad School Workshops',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-10-18 00:00',
  end: '2017-10-18 23:59',
  title: 'David Lamelas: A Life of Their Own',
  type: 'Arts & Culture'
}, 

{
  start: '2017-10-18 08:00',
  end: '2017-10-18 19:00',
  title: 'Career Center',
  type: 'Academic'  
},  

{
  start: '2017-10-18 08:00',
  end: '2017-10-18 23:30',
  title: 'OUTober (LGBTQ) Celebration',
  type: 'Academic'  
}, 

{
  start: '2017-10-18 19:00',
  end: '2017-10-18 22:00',
  title: 'Men\s Water Polo - Long Beach State vs. UC San Diego',
  type: 'Athletics & Recreation'
}, 

{
  start: '2017-10-18 10:00',
  end: '2017-10-18 13:00',
  title: 'HIV Mobile Unit (LB Health Dept)',
  type: 'Campus Life'  
}, 

{
  start: '2017-10-18 11:00',
  end: '2017-10-18 13:00',
  title: 'Living Well at The Beach - Health & Safety Week 2017',
  type: 'Campus Life'  
}, 

{
  start: '2017-10-18 20:00',
  end: '2017-10-18 22:30',
  title: 'Machinical - Performances',
  type: 'Community'  
}, 

{
  start: '2017-10-19 00:00',
  end: '2017-10-19 23:59',
  title: 'David Lamelas: A Life of Their Own',
  type: 'Arts & Culture'
}, 

{
  start: '2017-10-19 08:00',
  end: '2017-10-19 19:00',
  title: 'Career Center',
  type: 'Academic'  
},  

{
  start: '2017-10-19 08:00',
  end: '2017-10-19 23:30',
  title: 'OUTober (LGBTQ) Celebration',
  type: 'Academic'  
}, 

{
  start: '2017-10-19 10:19',
  end: '2017-10-19 10:20',
  title: 'Living Well at The Beach - Health & Safety Week 2017',
  type: 'Campus Life'  
}, 

{
  start: '2017-10-19 11:10',
  end: '2017-10-19 13:00',
  title: 'Outsober LBSU Project Relief',
  type: 'Campus Life'  
}, 

{
  start: '2017-10-19 19:00',
  end: '2017-10-19 21:30',
  title: 'Machinical - Performances',
  type: 'Community'  
}, 

{
  start: '2017-10-19 20:00',
  end: '2017-10-19 23:00',
  title: 'Guest - Dr. Hyunsoon Wang, Piano',
  type: 'Community'  
}, 

{
  start: '2017-10-20 00:00',
  end: '2017-10-20 23:59',
  title: 'David Lamelas: A Life of Their Own',
  type: 'Arts & Culture'
}, 

{
  start: '2017-10-20 08:00',
  end: '2017-10-20 23:30',
  title: 'OUTober (LGBTQ) Celebration',
  type: 'Academic'  
}, 

{
  start: '2017-10-20 06:30',
  end: '2017-10-20 12:30',
  title: 'Women Engineers at the Beach Day',
  type: 'Athletics & Recreation'
}, 

{
  start: '2017-10-20 19:00',
  end: '2017-10-20 22:00',
  title: 'MBB 2017 - 18 Season',
  type: 'Athletics & Recreation'
}, 

{
  start: '2017-10-20 19:00',
  title: 'Men\'s Water Polo - Long Beach State s. UC Santa Barbara',
  type: 'Athletics & Recreation'
}, 

{
  start: '2017-10-20 12:00',
  end: '2017-10-20 13:00',
  title: 'Living Well at The Beach - Health & Safety Week 2017',
  type: 'Campus Life'  
}, 

{
  start: '2017-10-20 20:00',
  end: '2017-10-20 12:30',
  title: 'In the Heights',
  type: 'Community'  
}, 

{
  start: '2017-10-21 00:00',
  end: '2017-10-21 23:59',
  title: 'David Lamelas: A Life of Their Own',
  type: 'Arts & Culture'
}, 

{
  start: '2017-10-21 08:00',
  end: '2017-10-21 23:30',
  title: 'OUTober (LGBTQ) Celebration',
  type: 'Academic'  
}, 

{
  start: '2017-10-21 10:00',
  end: '2017-10-21 15:30',
  title: 'CS Rugby - Women',
  type: 'Athletics & Recreation'
}, 

{
  start: '2017-10-21 06:30',
  end: '2017-10-21 12:30',
  title: 'MVB Fall Tournament',
  type: 'Athletics & Recreation'
}, 

{
  start: '2017-10-21 12:00',
  end: '2017-10-21 20:00',
  title: 'LGBT Month October Play',
  type: 'Campus Life'
}, 

{
  start: '2017-10-12 20:00',
  end: '2017-10-12 22:30',
  title: 'Machinical - Performances',
  type: 'Community'  
}, 

{
  start: '2017-10-22 00:00',
  end: '2017-10-22 23:59',
  title: 'David Lamelas: A Life of Their Own',
  type: 'Arts & Culture'
}, 

{
  start: '2017-10-22 12:30',
  end: '2017-10-22 14:30',
  title: 'Brandon Kaplan Grad Recital',
  type: 'Arts & Culture'
}, 

{
  start: '2017-10-22 16:00',
  end: '2017-10-22 18:00',
  title: 'Faculty Concert - Mark Uranker, Piano',
  type: 'Arts & Culture'
}, 

{
  start: '2017-10-22 20:00',
  end: '2017-10-22 23:00',
  title: 'Grace Hong Grad Recital',
  type: 'Arts & Culture'
}, 

{
  start: '2017-10-22 08:00',
  end: '2017-10-22 23:30',
  title: 'OUTober (LGBTQ) Celebration',
  type: 'Academic'  
}, 

{
  start: '2017-10-22 12:00',
  title: 'Men\'s Water Polo - Long Beach State vs. Calfornia',
  type: 'Athletics & Recreation'
}, 

{
  start: '2017-10-22 15:00',
  title: 'Men\'s Water Polo - Long Beach State vs. Golden West College',
  type: 'Athletics & Recreation'
}, 

{
  start: '2017-10-22 18:00',
  end: '2017-10-22 22:00',
  title: 'LBSU Soccer Season - 2017',
  type: 'Athletics & Recreation'
}, 

{
  start: '2017-10-22 18:00',
  title: 'Women\'s Soccer - Long Beach State vs. UC Riverside',
  type: 'Athletics & Recreation'
}, 

{
  start: '2017-10-22 00:00',
  end: '2017-10-22 23:59',
  title: 'David Lamelas: Gavin Gamboa with Leon de Castillo',
  type: 'Campus Life'
}, 

{
  start: '2017-10-22 13:00',
  end: '2017-10-22 16:00',
  title: 'In the Heights',
  type: 'Community'  
}, 

{
  start: '2017-10-23 00:00',
  end: '2017-10-23 23:59',
  title: 'David Lamelas: A Life of Their Own',
  type: 'Arts & Culture'
}, 

{
  start: '2017-10-23 08:00',
  end: '2017-10-23 23:30',
  title: 'OUTober (LGBTQ) Celebration',
  type: 'Academic'  
}, 

{
  start: '2017-10-23 11:00',
  end: '2017-10-23 13:00',
  title: 'ASI Fall Tabling',
  type: 'Campus Life'
}, 

{
  start: '2017-10-23 19:30',
  end: '2017-10-23 21:00',
  title: 'LGBT Month October Play',
  type: 'Campus Life'
}, 

{
  start: '2017-10-24 00:00',
  end: '2017-10-24 23:59',
  title: 'David Lamelas: A Life of Their Own',
  type: 'Arts & Culture'
}, 

{
  start: '2017-10-24 20:00',
  end: '2017-10-24 23:00',
  title: 'Piano Trio Firenze',
  type: 'Arts & Culture'
}, 

{
  start: '2017-10-24 08:00',
  end: '2017-10-24 23:30',
  title: 'OUTober (LGBTQ) Celebration',
  type: 'Academic'  
}, 

{
  start: '2017-10-24 10:00',
  end: '2017-10-24 13:00',
  title: 'HIV Mobile Unit (LB Health Dept)',
  type: 'Campus Life'
}, 

{
  start: '2017-10-24 10:00',
  end: '2017-10-24 12:00',
  title: 'Scavenger Hunt',
  type: 'Campus Life'
}, 

{
  start: '2017-10-24 14:00',
  end: '2017-10-24 18:30',
  title: 'College Fair',
  type: 'Campus Life'
}, 

{
  start: '2017-10-24 12:00',
  end: '2017-10-24 14:00',
  title: 'Grad School Workshops',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-10-24 09:00',
  end: '2017-10-24 11:00',
  title: 'Leadership Academy Workshop',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-10-25 00:00',
  end: '2017-10-25 23:59',
  title: 'David Lamelas: A Life of Their Own',
  type: 'Arts & Culture'
}, 

{
  start: '2017-10-25 20:00',
  end: '2017-10-25 23:00',
  title: 'Woodwind / Brass Quintets',
  type: 'Arts & Culture'
}, 

{
  start: '2017-10-25 00:00',
  end: '2017-10-25 23:59',
  title: 'CSU Grad School Virtual Fair',
  type: 'Academic'  
},  

{
  start: '2017-10-25 08:00',
  end: '2017-10-25 23:30',
  title: 'OUTober (LGBTQ) Celebration',
  type: 'Academic'  
}, 

{
  start: '2017-10-25 12:00',
  title: 'Information Sessions for the Payne International Development Fellowship',
  type: 'Academic'  
}, 

{
  start: '2017-10-25 11:00',
  end: '2017-10-25 13:00',
  title: 'Lost and Found Auction',
  type: 'Campus Life'
}, 

{
  start: '2017-10-26 00:00',
  end: '2017-10-26 23:59',
  title: 'David Lamelas: A Life of Their Own',
  type: 'Arts & Culture'
}, 

{
  start: '2017-10-26 19:00',
  end: '2017-10-26 23:00',
  title: 'Concert Band - Spooktacular',
  type: 'Arts & Culture'
}, 

{
  start: '2017-10-26 06:30',
  end: '2017-10-26 21:00',
  title: 'Molina Entrepreneur Series Launching your Venture',
  type: 'Academic'  
},  

{
  start: '2017-10-26 08:00',
  end: '2017-10-26 23:30',
  title: 'OUTober (LGBTQ) Celebration',
  type: 'Academic'  
}, 

{
  start: '2017-10-26 12:00',
  end: '2017-10-26 13:00',
  title: 'Dear Self: Succeeding in Year One',
  type: 'Academic'  
}, 

{
  start: '2017-10-26 16:00',
  end: '2017-10-26 23:59',
  title: 'Information Sessions for the Payne International Development Fellowship',
  type: 'Academic'  
}, 

{
  start: '2017-10-26 12:00',
  end: '2017-10-26 14:00',
  title: 'Pumpkin Decorating',
  type: 'Campus Life'
}, 

{
  start: '2017-10-26 20:00',
  end: '2017-10-26 22:30',
  title: 'In the Heights',
  type: 'Community'  
}, 

{
  start: '2017-10-27 00:00',
  end: '2017-10-27 23:59',
  title: 'David Lamelas: A Life of Their Own',
  type: 'Arts & Culture'
}, 

{
  start: '2017-10-27 20:00',
  end: '2017-10-27 22:00',
  title: 'Faculty Concert - James Barrera, Saxophone',
  type: 'Arts & Culture'
}, 

{
  start: '2017-10-27 08:00',
  end: '2017-10-27 23:30',
  title: 'OUTober (LGBTQ) Celebration',
  type: 'Academic'  
}, 

{
  start: '2017-10-27 09:00',
  end: '2017-10-27 10:00',
  title: 'Crown Classic',
  type: 'Athletics & Recreation'
}, 

{
  start: '2017-10-27 19:00',
  end: '2017-10-27 22:00',
  title: 'WVB 2017 Season',
  type: 'Athletics & Recreation'
}, 

{
  start: '2017-10-27 19:00',
  end: '2017-10-27 22:00',
  title: 'Softball 2017 Season vs. Concordia',
  type: 'Athletics & Recreation'
}, 

{
  start: '2017-10-27 07:00',
  end: '2017-10-27 08:30',
  title: 'CSULB Counselor\'s Conference',
  type: 'Campus Life'
}, 

{
  start: '2017-10-27 20:00',
  end: '2017-10-27 23:00',
  title: 'In the Heights',
  type: 'Community'  
}, 

{
  start: '2017-10-27 12:00',
  end: '2017-10-27 14:00',
  title: 'Life Project',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-10-27 14:00',
  end: '2017-10-27 15:30',
  title: 'Cabinet Meetings',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-10-28 00:00',
  end: '2017-10-28 23:59',
  title: 'David Lamelas: A Life of Their Own',
  type: 'Arts & Culture'
}, 

{
  start: '2017-10-28 20:00',
  end: '2017-10-28 22:00',
  title: 'Fall Choral Concert',
  type: 'Arts & Culture'
}, 

{
  start: '2017-10-28 08:00',
  end: '2017-10-28 23:30',
  title: 'OUTober (LGBTQ) Celebration',
  type: 'Academic'  
}, 

{
  start: '2017-10-28 09:00',
  end: '2017-10-28 10:00',
  title: 'CS Baseball',
  type: 'Athletics & Recreation'
}, 

{
  start: '2017-10-28 12:00',
  title: 'Men\'s Water Polo - Long Beach State vs. Stanford',
  type: 'Athletics & Recreation'
}, 

{
  start: '2017-10-28 15:00',
  title: 'Men\'s Water Polo - Long Beach State vs. Long Beach City College',
  type: 'Athletics & Recreation'
}, 

{
  start: '2017-10-28 19:00',
  end: '2017-10-28 22:00',
  title: 'WVB 2017 Season',
  type: 'Athletics & Recreation'
}, 

{
  start: '2017-10-28 14:00',
  end: '2017-10-28 17:00',
  title: 'In the Heights',
  type: 'Community'  
}, 

{
  start: '2017-10-29 00:00',
  end: '2017-10-29 23:59',
  title: 'David Lamelas: A Life of Their Own',
  type: 'Arts & Culture'
}, 

{
  start: '2017-10-29 16:00',
  end: '2017-10-29 19:00',
  title: 'Jazz Lab Band with CornerPocket',
  type: 'Arts & Culture'
}, 

{
  start: '2017-10-29 20:00',
  end: '2017-10-29 23:00',
  title: 'Minwoon Ha Senior Racital',
  type: 'Arts & Culture'
}, 

{
  start: '2017-10-29 09:00',
  end: '2017-10-29 22:00',
  title: 'Women\'s Soccer - Long Beach State vs. UC Davis',
  type: 'Athletics & Recreation'
}, 

{
  start: '2017-10-29 14:00',
  end: '2017-10-29 18:00',
  title: 'LBSU Soccer Season - 2017',
  type: 'Athletics & Recreation'
}, 

{
  start: '2017-10-29 13:00',
  end: '2017-10-29 16:00',
  title: 'In the Heights',
  type: 'Community'  
}, 

{
  start: '2017-10-30 00:00',
  end: '2017-10-30 23:59',
  title: 'David Lamelas: A Life of Their Own',
  type: 'Arts & Culture'
}, 

{
  start: '2017-10-30 15:00',
  end: '2017-10-30 17:30',
  title: 'WBB 2018-18 Season',
  type: 'Athletics & Recreation'
}, 

{
  start: '2017-10-30 20:00',
  end: '2017-10-30 22:30',
  title: 'WBB 2018-18 Season',
  type: 'Athletics & Recreation'
}, 

{
  start: '2017-10-30 08:00',
  end: '2017-10-30 19:00',
  title: 'Musical WOKE',
  type: 'Campus Life'
}, 

{
  start: '2017-10-30 08:00',
  end: '2017-10-30 19:00',
  title: 'TECH DAY 2017 INFORMATION',
  type: 'Campus Life'
}, 

{
  start: '2017-10-30 14:00',
  end: '2017-10-30 15:00',
  title: 'Students in Fashion Meetings',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-10-30 11:00',
  end: '2017-10-30 12:00',
  title: 'Christians on Campus General Meetings',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-10-31 00:00',
  end: '2017-10-31 23:59',
  title: 'David Lamelas: A Life of Their Own',
  type: 'Arts & Culture'
}, 

{
  start: '2017-10-31 00:00',
  end: '2017-10-31 23:59',
  title: 'Artistic Manifest of the Day of the Dead Cultural Event',
  type: 'Arts & Culture'
}, 

{
  start: '2017-10-31 08:00',
  end: '2017-10-31 19:00',
  title: 'Musical WOKE',
  type: 'Campus Life'
}, 

{
  start: '2017-10-31 08:00',
  end: '2017-10-31 19:00',
  title: 'TECH DAY 2017 INFORMATION',
  type: 'Campus Life'
}, 

{
  start: '2017-10-31 09:00',
  end: '2017-10-31 14:00',
  title: 'Flu Shot Clinic',
  type: 'Campus Life'
}, 

{
  start: '2017-10-31 11:00',
  end: '2017-10-31 14:00',
  title: 'Octsoberfest',
  type: 'Campus Life'
}, 

{
  start: '2017-10-31 12:00',
  end: '2017-10-31 13:00',
  title: 'Coffee with a Career Counselor',
  type: 'Community'  
}, 

{
  start: '2017-10-31 12:00',
  end: '2017-10-31 13:30',
  title: 'Grad School Workshops',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-10-31 12:00',
  end: '2017-10-31 14:00',
  title: 'Leadership Academy Workshop',
  type: 'Meeting/Lecture/Workshop'  
}, 

//NOVEMBER//

{
  start: '2017-11-01',
  title: 'David Lamelas: A Life of Their Own',
  type: 'Arts & Culture'  
}, 

{
  start: '2017-11-01 20:00',
  end: '2017-11-01 23:00',
  title: 'New Music Ensemble',
  type: 'Arts & Culture'  
}, 

{
  start: '2017-11-01 15:30',
  end: '2017-11-01 17:00',
  title: 'Cyber Security Speaker Series: AnglerPhish',
  type: 'Academic'  
}, 

{
  start: '2017-11-01 08:00',
  end: '2017-11-01 19:00',
  title: 'Musical WOKE',
  type: 'Campus Life'  
}, 

{
  start: '2017-11-01 08:00',
  end: '2017-11-01 20:00',
  title: 'Tech Day',
  type: 'Campus Life'  
}, 

{
  start: '2017-11-01 08:00',
  end: '2017-11-01 19:00',
  title: 'TECH DAY 2017 INFORMATION',
  type: 'Campus Life'  
}, 

{
  start: '2017-11-01 08:00',
  end: '2017-11-01 22:00',
  title: 'The Future of Higher Education with Tavis Smiley',
  type: 'Campus Life'  
}, 

{
  start: '2017-11-01 10:00',
  end: '2017-11-01 12:00',
  title: 'Leadership Academy Workshop',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-01 11:30',
  end: '2017-11-01 14:00',
  title: 'Mini Review and Professional Development Plan Workshop',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-01 12:00',
  end: '2017-11-01 13:30',
  title: 'DSC Advisory Board Meeting',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-01 13:00',
  end: '2017-11-01 14:30',
  title: 'Grad School Workships',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-01 13:00',
  end: '2017-11-01 14:00',
  title: 'Model United Nations Training',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-02',
  title: 'David Lamelas: A Life of Their Own',
  type: 'Arts & Culture'  
}, 

{
  start: '2017-11-02 10:00',
  end: '2017-11-02 13:00',
  title: 'Tech Day',
  type: 'Arts & Culture'  
},

{
  start: '2017-11-02 20:00',
  end: '2017-11-02 23:00',
  title: 'Brass Emsemble',
  type: 'Arts & Culture'  
},

{
  start: '2017-11-02 20:00',
  end: '2017-11-02 21:30',
  title: 'WOKE! A Revolutionary Cabaret Performances',
  type: 'Arts & Culture'  
},

{
  start: '2017-11-02 17:30',
  end: '2017-11-02 18:00',
  title: 'Wellness Lectures',
  type: 'Academic'  
}, 

{
  start: '2017-11-02 06:00',
  end: '2017-11-02 22:00',
  title: 'Blind to History: Public Art Installation',
  type: 'Campus Life'  
}, 

{
  start: '2017-11-02 08:00',
  end: '2017-11-02 19:00',
  title: 'Musical WOKE',
  type: 'Campus Life'  
}, 

{
  start: '2017-11-02 08:00',
  end: '2017-11-02 20:00',
  title: 'Tech Day',
  type: 'Campus Life'  
}, 

{
  start: '2017-11-02 08:00',
  end: '2017-11-02 19:00',
  title: 'TECH DAY 2017 INFORMATION',
  type: 'Campus Life'  
},

{
  start: '2017-11-02 20:00',
  end: '2017-11-02 23:00',
  title: 'In the Heights',
  type: 'Community'  
},  

{
  start: '2017-11-02 10:00',
  end: '2017-11-02 12:00',
  title: 'Leadership Academy Workshop',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-02 09:00',
  end: '2017-11-02 12:00',
  title: 'The Future of Higher Education with Tavis Smiley',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-02 10:45',
  end: '2017-11-02 12:30',
  title: 'Student Organization Orintation & Food Handling Workshops',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-02 12:00',
  end: '2017-11-02 14:00',
  title: 'Lobby Corps Meetings',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-02 15:45',
  end: '2017-11-02 16:45',
  title: 'Model United Nations Training',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-03',
  title: 'David Lamelas: A Life of Their Own',
  type: 'Arts & Culture'  
}, 

{
  start: '2017-11-03 20:00',
  end: '2017-11-03 23:00',
  title: 'John Barcellona, Flute',
  type: 'Arts & Culture'  
}, 

{
  start: '2017-11-03 19:00',
  end: '2017-11-03 22:00',
  title: 'MSA Basketball Tournament',
  type: 'Athletics & Recreation',
}, 

{
  start: '2017-11-03 06:00',
  end: '2017-11-03 22:00',
  title: 'Blind to History: Public Art Installation',
  type: 'Campus Life'  
}, 

{
  start: '2017-11-03 08:00',
  end: '2017-11-03 19:00',
  title: 'Musical WOKE',
  type: 'Campus Life'  
}, 

{
  start: '2017-11-03 08:00',
  end: '2017-11-03 19:00',
  title: 'TECH DAY 2017 INFORMATION',
  type: 'Campus Life'  
}, 

{
  start: '2017-11-03 07:00',
  end: '2017-11-03 17:00',
  title: 'Internship Conference',
  type: 'Campus Life'  
}, 

{
  start: '2017-11-03 08:00',
  end: '2017-11-03 19:00',
  title: 'Musical WOKE',
  type: 'Campus Life'  
},

{
  start: '2017-11-03 20:00',
  end: '2017-11-03 23:00',
  title: 'In the Heights',
  type: 'Community'  
},  

{
  start: '2017-11-03 09:30',
  end: '2017-11-03 17:30',
  title: 'SCIENCE AND LANGAUGE NGSS IN PRACTICE',
  type: 'Academic'  
}, 

{
  start: '2017-11-03 07:30',
  end: '2017-11-03 17:00',
  title: 'CS Rugby - Fall Tournament',
  type: 'Athletics & Recreation',
}, 

{
  start: '2017-11-03 09:00',
  end: '2017-11-03 15:00',
  title: 'CS Baseball',
  type: 'Athletics & Recreation',
}, 

{
  start: '2017-11-03 16:00',
  end: '2017-11-03 20:00',
  title: 'MBB 2017-18 Season',
  type: 'Athletics & Recreation',
}, 

{
  start: '2017-11-03 16:00',
  end: '2017-11-03 22:00',
  title: 'MVB Fall Tournament',
  type: 'Athletics & Recreation',
}, 

{
  start: '2017-11-03 10:00',
  end: '2017-11-03 12:00',
  title: 'Leadership Academy Workshop',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-03 10:00',
  end: '2017-11-03 12:00',
  title: 'A SIMBOT Meeting',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-01 12:00',
  end: '2017-11-01 14:00',
  title: 'Life Project',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-03 12:30',
  end: '2017-11-03 14:00',
  title: 'DSS Leadership Meeting',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-03 14:00',
  end: '2017-11-03 17:00',
  title: 'President\'s Ambassador\'s Meeting',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-04',
  title: 'David Lamelas: A Life of Their Own',
  type: 'Arts & Culture'  
}, 

{
  start: '2017-11-04 06:00',
  end: '2017-11-04 22:00',
  title: 'Blind to History: Public Art Installation',
  type: 'Campus Life'  
}, 

{
  start: '2017-11-04 20:00',
  end: '2017-11-04 21:30',
  title: 'WOKE! A Revolutionary Cabaret Performances',
  type: 'Arts & Culture'  
},

{
  start: '2017-11-04 21:00',
  end: '2017-11-04 22:00',
  title: 'WOKE! A Revolutionary Cabaret',
  type: 'Arts & Culture'  
},

{
  start: '2017-11-04 20:00',
  end: '2017-11-04 23:00',
  title: 'Opera Masterpieces',
  type: 'Arts & Culture'  
},

{
  start: '2017-11-04 14:00',
  end: '2017-11-04 17:00',
  title: 'In the Heights',
  type: 'Community'  
},  

{
  start: '2017-11-04 9:30',
  end: '2017-11-04 12:30',
  title: 'SCIENCE AND LANGUAGE: NGSS IN PRACTION',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-05 ',
  title: 'David Lamelas: A Life of Their Own',
  type: 'Arts & Culture'  
}, 

{
  start: '2017-11-05 06:00',
  end: '2017-11-05 22:00',
  title: 'Blind to History: Public Art Installation',
  type: 'Campus Life'  
}, 

{
  start: '2017-11-05 13:00',
  end: '2017-11-05 16:00',
  title: 'In the Heights',
  type: 'Community'  
},  

{
  start: '2017-11-05 14:00',
  end: '2017-11-05 15:30',
  title: 'WOKE! A Revolutionary Cabaret Performances',
  type: 'Arts & Culture'  
},

{
  start: '2017-11-05 21:00',
  end: '2017-11-05 22:00',
  title: 'WOKE! A Revolutionary Cabaret',
  type: 'Arts & Culture'  
},

{
  start: '2017-11-05 16:00',
  end: '2017-11-05 19:00',
  title: 'Opera Masterpieces',
  type: 'Arts & Culture'  
},

{
  start: '2017-11-06 06:00',
  end: '2017-11-06 22:00',
  title: 'Blind to History: Public Art Installation',
  type: 'Campus Life'  
}, 

{
  start: '2017-11-06 08:00',
  end: '2017-11-06 19:00',
  title: 'Delta Zeta Blood Drive',
  type: 'Campus Life'  
}, 

{
  start: '2017-11-06',
  title: 'David Lamelas: A Life of Their Own',
  type: 'Arts & Culture'  
}, 

{
  start: '2017-11-06 20:00',
  end: '2017-11-06 23:00',
  title: 'Saxophone Ensemble',
  type: 'Arts & Culture'  
}, 

{
  start: '2017-11-06 08:00',
  end: '2017-11-06 17:00',
  title: 'IEEE Green Energy and Smart Systems Conference (IGESSC)',
  type: 'Academic'  
}, 

{ start: '2017-11-06 08:30',
  end: '2017-11-06 23:30',
  title: 'Native American Heritage Month Celebration',
  type: 'Academic'  
},

{
  start: '2017-11-06 11:00',
  end: '2017-11-06 12:00',
  title: 'Christians on Campus General Meetings',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-06 14:00',
  end: '2017-11-06 16:00',
  title: 'Leadership Academy Workshop',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-06 10:00',
  end: '2017-11-06 12:00',
  title: 'Students in Fashion Meetings',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-06 10:00',
  end: '2017-11-06 12:00',
  title: 'BPE Meetings',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-07 06:00',
  end: '2017-11-07 22:00',
  title: 'Blind to History: Public Art Installation',
  type: 'Campus Life'  
}, 

{
  start: '2017-11-07',
  title: 'David Lamelas: A Life of Their Own',
  type: 'Arts & Culture'  
}, 

{
  start: '2017-11-07 20:00',
  end: '2017-11-07 21:30',
  title: 'WOKE! A Revolutionary Cabaret Performances',
  type: 'Arts & Culture'  
},

{
  start: '2017-11-07 21:00',
  end: '2017-11-07 22:00',
  title: 'WOKE! A Revolutionary Cabaret',
  type: 'Arts & Culture'  
},

{
  start: '2017-11-07 20:00',
  end: '2017-11-07 23:00',
  title: 'World Percussion',
  type: 'Arts & Culture'  
},

{ 
  start: '2017-11-07 08:30',
  end: '2017-11-07 23:30',
  title: 'Native American Heritage Month Celebration',
  type: 'Academic'  
},

{ 
  start: '2017-11-07 17:00',
  end: '2017-11-07 19:00',
  title: 'Engineering Lecture: Service Robotics',
  type: 'Academic'  
},

{
  start: '2017-11-07 08:00',
  end: '2017-11-07 19:00',
  title: 'Delta Zeta Blood Drive',
  type: 'Campus Life'  
}, 

{
  start: '2017-11-07 08:00',
  end: '2017-11-07 19:00',
  title: 'Doctors Without Borders VR',
  type: 'Campus Life'  
}, 

{
  start: '2017-11-07 14:00',
  end: '2017-11-07 16:00',
  title: 'Leadership Academy Workshop',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-07 10:00',
  end: '2017-11-07 15:00',
  title: 'Focus Group Meeting',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-07 11:30',
  end: '2017-11-07 14:00',
  title: 'Mini Review and Professional Development Plan Workshop',
  type: 'Meeting/Lecture/Workshop'  
},

{
  start: '2017-11-07 12:30',
  end: '2017-11-07 13:30',
  title: 'LB State College Republicans General Meetings',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-07 15:30',
  end: '2017-11-07 16:30',
  title: 'NSCS Semester Meeting',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-08 06:00',
  end: '2017-11-08 22:00',
  title: 'Blind to History: Public Art Installation',
  type: 'Campus Life'  
}, 

{
  start: '2017-11-08 08:00',
  end: '2017-11-08 19:00',
  title: 'Delta Zeta Blood Drive',
  type: 'Campus Life'  
}, 

{
  start: '2017-11-08 08:00',
  end: '2017-11-08 19:00',
  title: 'Doctors Without Borders VR',
  type: 'Campus Life'  
},

{
  start: '2017-11-08 07:00',
  end: '2017-11-08 12:30',
  title: 'VET NET Ally',
  type: 'Campus Life'  
},

{
  start: '2017-11-08',
  title: 'David Lamelas: A Life of Their Own',
  type: 'Arts & Culture'  
}, 

{ 
  start: '2017-11-08 08:30',
  end: '2017-11-08 23:30',
  title: 'Native American Heritage Month Celebration',
  type: 'Academic'  
},

{ 
  start: '2017-11-08 12:00',
  end: '2017-11-08 13:00',
  title: 'Finding an Internship',
  type: 'Academic'  
},

{ 
  start: '2017-11-08 17:00',
  end: '2017-11-08 18:30',
  title: 'Comparative Migrations-3',
  type: 'Academic'  
},

{
  start: '2017-11-08 20:00',
  end: '2017-11-08 21:30',
  title: 'WOKE! A Revolutionary Cabaret Performances',
  type: 'Arts & Culture'  
},

{
  start: '2017-11-08 21:00',
  end: '2017-11-08 22:00',
  title: 'WOKE! A Revolutionary Cabaret',
  type: 'Arts & Culture'  
},

{
  start: '2017-11-08 17:00',
  end: '2017-11-08 18:30',
  title: 'Comparitive Migrations - 3',
  type: 'Arts & Culture'  
},

{
  start: '2017-11-08 20:00',
  end: '2017-11-08 23:00',
  title: 'Unversity String Chamber',
  type: 'Arts & Culture'  
},

{
  start: '2017-11-08 10:00',
  end: '2017-11-08 13:00',
  title: 'Focus Group Meeting',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-08 12:00',
  end: '2017-11-08 13:00',
  title: 'Finding an Internship',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-08 13:00',
  end: '2017-11-08 14:30',
  title: 'Grad School Workshop',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-08 13:15',
  end: '2017-11-08 15:00',
  title: 'Slam Team Auditions',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-09 06:00',
  end: '2017-11-09 22:00',
  title: 'Blind to History: Public Art Installation',
  type: 'Campus Life'  
}, 

{
  start: '2017-11-09 08:00',
  end: '2017-11-09 19:00',
  title: 'Delta Zeta Blood Drive',
  type: 'Campus Life'  
}, 

{
  start: '2017-11-09 08:00',
  end: '2017-11-09 19:00',
  title: 'Doctors Without Borders VR',
  type: 'Campus Life'  
},

{
  start: '2017-11-09',
  title: 'David Lamelas: A Life of Their Own',
  type: 'Arts & Culture'  
}, 

{ 
  start: '2017-11-09 08:30',
  end: '2017-11-09 23:30',
  title: 'Native American Heritage Month Celebration',
  type: 'Academic'  
},

{
  start: '2017-11-09 19:00',
  end: '2017-11-09 20:30',
  title: 'WOKE! A Revolutionary Cabaret Performances',
  type: 'Arts & Culture'  
},

{
  start: '2017-11-09 21:00',
  end: '2017-11-09 22:00',
  title: 'WOKE! A Revolutionary Cabaret',
  type: 'Arts & Culture'  
},

{
  start: '2017-11-09 20:00',
  end: '2017-11-09 23:00',
  title: 'University String Quartet',
  type: 'Arts & Culture'  
},

{
  start: '2017-11-09 07:30',
  end: '2017-11-09 11:00',
  title: 'College of Education, Staff Meetings',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-09 12:00',
  end: '2017-11-09 14:00',
  title: 'Lobby Corps Meeting',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-09 14:00',
  end: '2017-11-09 16:00',
  title: 'Leadership Academy Workshop',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-09 14:30',
  end: '2017-11-09 15:30',
  title: 'Operation Meeting',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-09 15:30',
  end: '2017-11-09 16:00',
  title: 'Sustain U Meeting',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-10 06:00',
  end: '2017-11-10 22:00',
  title: 'Blind to History: Public Art Installation',
  type: 'Campus Life'  
}, 

{
  start: '2017-11-10 08:00',
  end: '2017-11-10 19:00',
  title: 'Delta Zeta Blood Drive',
  type: 'Campus Life'  
}, 

{
  start: '2017-11-10 12:00',
  end: '2017-11-10 13:00',
  title: 'Jumma Prayer',
  type: 'Campus Life'  
}, 

{
  start: '2017-11-10',
  title: 'David Lamelas: A Life of Their Own',
  type: 'Arts & Culture'  
}, 

{
  start: '2017-11-10 21:00',
  end: '2017-11-10 22:00',
  title: 'WOKE! A Revolutionary Cabaret',
  type: 'Arts & Culture'  
},

{ 
  start: '2017-11-10 08:30',
  end: '2017-11-10 23:30',
  title: 'Native American Heritage Month Celebration',
  type: 'Academic'  
},

{
  start: '2017-11-10 10:00',
  end: '2017-11-10 22:00',
  title: 'Softball 2017 Season vs. Concordia',
  type: 'Athletics & Recreation',
}, 

{
  start: '2017-11-10 14:00',
  end: '2017-11-10 17:00',
  title: 'WBB 2017-18 Season',
  type: 'Athletics & Recreation',
}, 

{
  start: '2017-11-10 19:00',
  end: '2017-11-10 22:00',
  title: 'MVB 2017 Season',
  type: 'Athletics & Recreation',
}, 

{
  start: '2017-11-11 06:00',
  end: '2017-11-11 22:00',
  title: 'Blind to History: Public Art Installation',
  type: 'Campus Life'  
},

{
  start: '2017-11-11',
  title: 'David Lamelas: A Life of Their Own',
  type: 'Arts & Culture'  
}, 

{
  start: '2017-11-11 13:00',
  end: '2017-11-11 15:00',
  title: 'Matthew Esguerra Junior Recital',
  type: 'Arts & Culture'  
}, 

{
  start: '2017-11-11 14:00',
  end: '2017-11-11 15:30',
  title: 'WOKE! A Revolutionary Cabaret Performances',
  type: 'Arts & Culture'  
},

{
  start: '2017-11-11 21:00',
  end: '2017-11-11 22:00',
  title: 'WOKE! A Revolutionary Cabaret',
  type: 'Arts & Culture'  
},

{ 
  start: '2017-11-11 08:30',
  end: '2017-11-11 23:30',
  title: 'Native American Heritage Month Celebration',
  type: 'Academic'  
},

{
  start: '2017-11-11 09:00',
  end: '2017-11-11 15:00',
  title: 'CS Baseball',
  type: 'Athletics & Recreation',
}, 

{
  start: '2017-11-11 09:00',
  end: '2017-11-11 11:00',
  title: 'CS Rugby - Women',
  type: 'Athletics & Recreation',
}, 

{
  start: '2017-11-11 19:00',
  end: '2017-11-11 22:00',
  title: 'WVB 2017 Season',
  type: 'Athletics & Recreation',
}, 

{
  start: '2017-11-12 06:00',
  end: '2017-11-12 22:00',
  title: 'Blind to History: Public Art Installation',
  type: 'Campus Life'  
},

{
  start: '2017-11-12 14:00',
  end: '2017-11-12 16:00',
  title: 'The Doo Wop Project',
  type: 'Community'  
},  

{
  start: '2017-11-04 20:00',
  end: '2017-11-04 23:00',
  title: 'Quang Minh Pham Junior Recital',
  type: 'Community'  
},  

{
  start: '2017-11-12',
  title: 'David Lamelas: A Life of Their Own',
  type: 'Arts & Culture'  
}, 

{
  start: '2017-11-12',
  title: 'International Education Week 2017',
  type: 'Academic'  
}, 

{
  start: '2017-11-12 20:00',
  end: '2017-11-12 23:00',
  title: 'Collegium Musicum',
  type: 'Arts & Culture'  
}, 

{ 
  start: '2017-11-12 08:30',
  end: '2017-11-12 23:30',
  title: 'Native American Heritage Month Celebration',
  type: 'Academic'  
},

{
  start: '2017-11-12 13:00',
  end: '2017-11-12 16:00',
  title: 'WBB 2017 Season',
  type: 'Athletics & Recreation',
}, 

{
  start: '2017-11-13 06:00',
  end: '2017-11-13 22:00',
  title: 'Blind to History: Public Art Installation',
  type: 'Campus Life'  
},

{
  start: '2017-11-13 08:00',
  end: '2017-11-13 19:00',
  title: 'Moves on the House: IT',
  type: 'Campus Life'  
}, 

{
  start: '2017-11-13 08:00',
  end: '2017-11-13 19:00',
  title: 'Polaroid Stories',
  type: 'Campus Life'  
}, 

{
  start: '2017-11-13 10:00',
  end: '2017-11-13 11:00',
  title: 'Coffee with a Career Counselor',
  type: 'Community'  
}, 
{
  start: '2017-11-13',
  title: 'David Lamelas: A Life of Their Own',
  type: 'Arts & Culture'  
}, 

{ 
  start: '2017-11-13',
  title: 'International Education Week 2017',
  type: 'Academic'  
}, 

{  
  start: '2017-11-13 08:30',
  end: '2017-11-13 23:30',
  title: 'Native American Heritage Month Celebration',
  type: 'Academic'  
},

{ 
  start: '2017-11-13 12:00',
  end: '2017-11-13 14:00',
  title: 'How to Positively Address Microaggress in the Workplace',
  type: 'Academic'  
}, 

{ 
  start: '2017-11-13 16:00',
  end: '2017-11-13 19:00',
  title: 'Graduate Research Conference',
  type: 'Academic'  
}, 

{
  start: '2017-11-13 10:00',
  end: '2017-11-13 12:00',
  title: 'Leadership Academy Workshop',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-13 11:00',
  end: '2017-11-13 12:00',
  title: 'Christians on Campus',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-13 12:00',
  end: '2017-11-13 14:00',
  title: 'How to Positively Address Microagressions in a Workplace',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-14 06:00',
  end: '2017-11-14 22:00',
  title: 'Blind to History: Public Art Installation',
  type: 'Campus Life'  
},

{
  start: '2017-11-14 08:00',
  end: '2017-11-14 19:00',
  title: 'Moves on the House: IT',
  type: 'Campus Life'  
}, 

{
  start: '2017-11-14 08:00',
  end: '2017-11-14 19:00',
  title: 'Polaroid Stories',
  type: 'Campus Life'  
}, 

{
  start: '2017-11-14',
  title: 'David Lamelas: A Life of Their Own',
  type: 'Arts & Culture'  
}, 

{
  start: '2017-11-14 20:00',
  end: '2017-11-14 23:00',
  title: 'Composers Guild',
  type: 'Arts & Culture'  
}, 

{
  start: '2017-11-14 20:00',
  title: 'Composers Guild Concert',
  type: 'Arts & Culture'  
}, 

{ 
  start: '2017-11-14',
  title: 'International Education Week 2017',
  type: 'Academic'  
}, 

{ 
  start: '2017-11-14 08:30',
  end: '2017-11-14 23:30',
  title: 'Native American Heritage Month Celebration',
  type: 'Academic'  
},

{ 
  start: '2017-11-14 09:00',
  end: '2017-11-14 22:00',
  title: 'Pre-Health 101: Pathway to Success',
  type: 'Academic'  
},

{
  start: '2017-11-14 19:00',
  end: '2017-11-14 22:00',
  title: 'MBB 2017-18 Season',
  type: 'Athletics & Recreation',
}, 

{
  start: '2017-11-14 09:00',
  end: '2017-11-14 10:00',
  title: 'Pre-Health 101: Pathway to Success',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-14 09:45',
  end: '2017-11-14 11:30',
  title: 'Student Organization Orientation & Food Handling Workshops',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-14 11:00',
  end: '2017-11-14 02:00',
  title: 'International Education Week Kick-Off Event',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-14 11:30',
  end: '2017-11-14 14:30',
  title: 'CED Graduate Programs Community Development',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-15 06:00',
  end: '2017-11-15 22:00',
  title: 'Blind to History: Public Art Installation',
  type: 'Campus Life'  
},

{
  start: '2017-11-15 08:00',
  end: '2017-11-15 19:00',
  title: 'Moves on the House: IT',
  type: 'Campus Life'  
}, 

{
  start: '2017-11-15 08:00',
  end: '2017-11-15 19:00',
  title: 'Polaroid Stories',
  type: 'Campus Life'  
}, 

{
  start: '2017-11-15',
  title: 'David Lamelas: A Life of Their Own',
  type: 'Arts & Culture'  
}, 

{
  start: '2017-11-15 20:00',
  end: '2017-11-15 23:00',
  title: 'Fall Faculty Concert',
  type: 'Arts & Culture'  
}, 

{
  start: '2017-11-15 20:00',
  end: '2017-11-15 23:00',
  title: 'Woodwind Chamber Music',
  type: 'Arts & Culture'  
}, 

{ 
  start: '2017-11-15',
  title: 'International Education Week 2017',
  type: 'Academic'  
}, 

{ 
  start: '2017-11-15 08:30',
  end: '2017-11-15 23:30',
  title: 'Native American Heritage Month Celebration',
  type: 'Academic'  
},

{ 
  start: '2017-11-15 15:00',
  end: '2017-11-15 16:00',
  title: 'LinkedIN: The Employer Perspective',
  type: 'Academic'  
}, 

{
  start: '2017-11-15 08:30',
  end: '2017-11-15 10:00',
  title: 'Student Fee Advisory Committee Meeting',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-15 09:00',
  end: '2017-11-15 15:00',
  title: '2nd International Conference and Exihibition on Polymer Chemistry',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-15 10:00',
  end: '2017-11-15 12:00',
  title: 'Leadership Academy Workshop',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-15 11:00',
  end: '2017-11-15 14:00',
  title: 'Gobble Games',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-16 06:00',
  end: '2017-11-16 22:00',
  title: 'Blind to History: Public Art Installation',
  type: 'Campus Life'  
},

{
  start: '2017-11-16 08:00',
  end: '2017-11-16 19:00',
  title: 'Moves on the House: IT',
  type: 'Campus Life'  
}, 

{
  start: '2017-11-16 08:00',
  end: '2017-11-16 19:00',
  title: 'Polaroid Stories',
  type: 'Campus Life'  
}, 

{
  start: '2017-11-16 20:00',
  end: '2017-11-16 22:30',
  title: 'Polaroid Stories - Performances',
  type: 'Community'  
}, 

{
  start: '2017-11-16',
  title: 'David Lamelas: A Life of Their Own',
  type: 'Arts & Culture'  
}, 

{
  start: '2017-11-16 20:00',
  end: '2017-11-16 23:00',
  title: 'BCCM Percussion Ensemble',
  type: 'Arts & Culture'  
}, 

{
  start: '2017-11-16 20:00',
  end: '2017-11-16 23:00',
  title: 'Fall Faculty Concert',
  type: 'Arts & Culture'  
}, 

{ 
  start: '2017-11-16',
  title: 'International Education Week 2017',
  type: 'Academic'  
}, 

{ 
  start: '2017-11-16 08:30',
  end: '2017-11-16 23:30',
  title: 'Native American Heritage Month Celebration',
  type: 'Academic'  
},

{
  start: '2017-11-16 10:00',
  end: '2017-11-16 12:00',
  title: 'Leadership Academy Workshop',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-16 12:00',
  end: '2017-11-16 14:00',
  title: 'Lobby Corps Meeting',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-16 10:00',
  end: '2017-11-16 12:00',
  title: 'Beach Pride Interviews',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-16 16:45',
  end: '2017-11-16 17:45',
  title: 'Model United Nations Training',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-17 06:00',
  end: '2017-11-17 22:00',
  title: 'Blind to History: Public Art Installation',
  type: 'Campus Life'  
},

{
  start: '2017-11-17 08:00',
  end: '2017-11-17 19:00',
  title: 'Moves on the House: IT',
  type: 'Campus Life'  
}, 

{
  start: '2017-11-17 08:00',
  end: '2017-11-17 19:00',
  title: 'Polaroid Stories',
  type: 'Campus Life'  
}, 

{
  start: '2017-11-17 20:00',
  end: '2017-11-17 22:30',
  title: 'Polaroid Stories - Performances',
  type: 'Community'  
}, 

{
  start: '2017-11-17',
  title: 'David Lamelas: A Life of Their Own',
  type: 'Arts & Culture'  
}, 

{ 
  start: '2017-11-17',
  title: 'International Education Week 2017',
  type: 'Academic'  
}, 

{ 
  start: '2017-11-17 08:30',
  end: '2017-11-17 23:30',
  title: 'Native American Heritage Month Celebration',
  type: 'Academic'  
}, 

{
  start: '2017-11-17 20:00',
  end: '2017-11-17 23:00',
  title: 'Fall Faculty Concert',
  type: 'Arts & Culture'  
}, 

{
  start: '2017-11-17 20:00',
  end: '2017-11-17 23:00',
  title: 'Malila Hollow Grad Recital',
  type: 'Arts & Culture'  
}, 

{
  start: '2017-11-17 19:00',
  end: '2017-11-17 22:00',
  title: 'WBB 2017-18 Season',
  type: 'Athletics & Recreation',
}, 

{
  start: '2017-11-17 09:00',
  end: '2017-11-17 10:00',
  title: 'Maintenance Staff Meeting',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-17 10:00',
  end: '2017-11-17 14:00',
  title: 'CLA Internship Partners Workshop',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-17 10:00',
  end: '2017-11-17 10:30',
  title: 'HRMC Meeting',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-17 10:45',
  end: '2017-11-17 12:30',
  title: 'Student Organization Orientation & Food Handling Workshops',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-18 06:00',
  end: '2017-11-18 22:00',
  title: 'Blind to History: Public Art Installation',
  type: 'Campus Life'  
},

{
  start: '2017-11-18 07:00',
  end: '2017-11-18 13:30',
  title: 'GPE: Graduate Writing Assessment Requirement Placement Exam',
  type: 'Campus Life'  
}, 

{
  start: '2017-11-18 08:00',
  end: '2017-11-18 17:00',
  title: '49er Driven Charity Car Show',
  type: 'Campus Life'  
}, 

{
  start: '2017-11-18 20:00',
  end: '2017-11-18 22:30',
  title: 'Polaroid Stories - Performances',
  type: 'Community'  
}, 

{
  start: '2017-11-18',
  title: 'David Lamelas: A Life of Their Own',
  type: 'Arts & Culture'  
}, 

{
  start: '2017-11-18 12:00',
  end: '2017-11-18 23:00',
  title: 'Fall Faculty Concert',
  type: 'Arts & Culture'  
}, 

{
  start: '2017-11-18 20:00',
  end: '2017-11-18 22:00',
  title: 'MOMIX: Opus Cactus',
  type: 'Arts & Culture'  
}, 

{
  start: '2017-11-18 20:00',
  end: '2017-11-18 23:00',
  title: 'Opera Scenes',
  type: 'Arts & Culture'  
}, 

{
  start: '2017-11-18 20:00',
  end: '2017-11-18 23:00',
  title: 'Polaroid Stories',
  type: 'Arts & Culture'
}, 

{ 
  start: '2017-11-18 08:30',
  end: '2017-11-18 23:30',
  title: 'Native American Heritage Month Celebration',
  type: 'Academic'  
},

{
  start: '2017-11-18 09:00',
  end: '2017-11-18 15:00',
  title: 'CS Baseball',
  type: 'Athletics & Recreation',
}, 

{
  start: '2017-11-18 12:00',
  end: '2017-11-18 22:00',
  title: 'CS Grupo Folklorico',
  type: 'Athletics & Recreation',
}, 

{
  start: '2017-11-18 19:00',
  end: '2017-11-18 22:00',
  title: 'WVB 2017 Season',
  type: 'Athletics & Recreation',
}, 

{
  start: '2017-11-18 09:00',
  end: '2017-11-18 12:00',
  title: 'Theater Meeting',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-18 10:00',
  end: '2017-11-18 14:00',
  title: 'LSAT Study Group',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-19 06:00',
  end: '2017-11-19 22:00',
  title: 'Blind to History: Public Art Installation',
  type: 'Campus Life'  
},

{
  start: '2017-11-19',
  title: 'David Lamelas: A Life of Their Own',
  type: 'Arts & Culture'  
}, 

{
  start: '2017-11-19 16:00',
  end: '2017-11-19 19:00',
  title: 'Piano Showcase',
  type: 'Arts & Culture'  
}, 

{ 
  start: '2017-11-19 08:30',
  end: '2017-11-19 23:30',
  title: 'Native American Heritage Month Celebration',
  type: 'Academic'  
},

{
  start: '2017-11-19 09:00',
  end: '2017-11-19 13:00',
  title: 'COPA CSULB',
  type: 'Athletics & Recreation',
}, 

{
  start: '2017-11-20 06:00',
  end: '2017-11-20 22:00',
  title: 'Blind to History: Public Art Installation',
  type: 'Campus Life'  
},

{
  start: '2017-11-20',
  title: 'David Lamelas: A Life of Their Own',
  type: 'Arts & Culture'  
}, 

{ 
  start: '2017-11-20 08:30',
  end: '2017-11-20 23:30',
  title: 'Native American Heritage Month Celebration',
  type: 'Academic'  
},

{
  start: '2017-11-21 06:00',
  end: '2017-11-21 22:00',
  title: 'Blind to History: Public Art Installation',
  type: 'Campus Life'  
},


{
  start: '2017-11-21',
  title: 'David Lamelas: A Life of Their Own',
  type: 'Arts & Culture'  
}, 

{ 
  start: '2017-11-21 08:30',
  end: '2017-11-21 23:30',
  title: 'Native American Heritage Month Celebration',
  type: 'Academic'  
},

{
  start: '2017-11-22 06:00',
  end: '2017-11-22 22:00',
  title: 'Blind to History: Public Art Installation',
  type: 'Campus Life'  
},

{
  start: '2017-11-22',
  title: 'David Lamelas: A Life of Their Own',
  type: 'Arts & Culture'  
}, 

{ 
  start: '2017-11-22 08:30',
  end: '2017-11-22 23:30',
  title: 'Native American Heritage Month Celebration',
  type: 'Academic'  
},

{
  start: '2017-11-22 17:15',
  end: '2017-11-22 18:15',
  title: '22 West News Workshop',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-23 06:00',
  end: '2017-11-23 22:00',
  title: 'Blind to History: Public Art Installation',
  type: 'Campus Life'  
},

{
  start: '2017-11-23',
  title: 'David Lamelas: A Life of Their Own',
  type: 'Arts & Culture'  
}, 

{
  start: '2017-11-24 06:00',
  end: '2017-11-24 22:00',
  title: 'Blind to History: Public Art Installation',
  type: 'Campus Life'  
},

{
  start: '2017-11-24',
  title: 'David Lamelas: A Life of Their Own',
  type: 'Arts & Culture'  
}, 

{
  start: '2017-11-25 06:00',
  end: '2017-11-25 22:00',
  title: 'Blind to History: Public Art Installation',
  type: 'Campus Life'  
},

{
  start: '2017-11-25',
  title: 'David Lamelas: A Life of Their Own',
  type: 'Arts & Culture'  
}, 

{
  start: '2017-11-25 13:00',
  end: '2017-11-25 18:00',
  title: 'Hansel and Gretel: A Wickedly Delicious Musical Treat',
  type: 'Arts & Culture'  
}, 

{
  start: '2017-11-25 13:00',
  end: '2017-11-25 14:30',
  title: 'Hansel and Gretel',
  type: 'Community'  
}, 

{
  start: '2017-11-26 06:00',
  end: '2017-11-26 22:00',
  title: 'Blind to History: Public Art Installation',
  type: 'Campus Life'  
},

{
  start: '2017-11-26',
  title: 'David Lamelas: A Life of Their Own',
  type: 'Arts & Culture'  
}, 

{
  start: '2017-11-27 06:00',
  end: '2017-11-27 22:00',
  title: 'Blind to History: Public Art Installation',
  type: 'Campus Life'  
},

{
  start: '2017-11-27',
  title: 'David Lamelas: A Life of Their Own',
  type: 'Arts & Culture'  
}, 

{
  start: '2017-11-27 20:00',
  end: '2017-11-27 23:00',
  title: 'Piano Plus!',
  type: 'Arts & Culture'  
}, 

{ 
  start: '2017-11-27 08:30',
  end: '2017-11-27 23:30',
  title: 'Native American Heritage Month Celebration',
  type: 'Academic'  
},

{
  start: '2017-11-27 11:00',
  end: '2017-11-27 12:00',
  title: 'Christians on Campus General Meetings',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-27 14:00',
  end: '2017-11-27 16:00',
  title: 'Leadership Academy Workshop',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-27 14:00',
  end: '2017-11-27 15:00',
  title: 'Students in Fashion Meetings',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-27 15:30',
  end: '2017-11-27 17:00',
  title: 'BPE Meetings',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-27 17:00',
  end: '2017-11-27 19:30',
  title: 'Preparing a Curriculum Vitae',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-28 06:00',
  end: '2017-11-28 22:00',
  title: 'Blind to History: Public Art Installation',
  type: 'Campus Life'  
},

{
  start: '2017-11-28',
  title: 'David Lamelas: A Life of Their Own',
  type: 'Arts & Culture'  
}, 

{ 
  start: '2017-11-28 08:30',
  end: '2017-11-28 23:30',
  title: 'Native American Heritage Month Celebration',
  type: 'Academic'  
},

{
  start: '2017-11-28 14:00',
  end: '2017-11-28 16:00',
  title: 'Leadership Academy Workshop',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-28 14:00',
  end: '2017-11-28 16:00',
  title: 'CLA Dean\'s Office Staff Workshop',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-28 12:30',
  end: '2017-11-28 13:30',
  title: 'LB State College Replublicans General Meetings',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-28 14:00',
  end: '2017-11-28 15:00',
  title: 'Social Justice & Equity Committee',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-28 14:00',
  end: '2017-11-28 17:00',
  title: 'Staff FERPA Training',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-29 06:00',
  end: '2017-11-29 22:00',
  title: 'Blind to History: Public Art Installation',
  type: 'Campus Life'  
},

{
  start: '2017-11-29 12:00',
  end: '2017-11-29 13:00',
  title: 'Noon Concert',
  type: 'Campus Life'  
}, 

{
  start: '2017-11-29 15:30',
  end: '2017-11-29 22:30',
  title: 'Movies on the House',
  type: 'Campus Life'  
}, 

{
  start: '2017-11-29 20:00',
  end: '2017-11-25 22:30',
  title: 'Polaroid Stories - Performances',
  type: 'Community'  
}, 

{
  start: '2017-11-29',
  title: 'David Lamelas: A Life of Their Own',
  type: 'Arts & Culture'  
}, 

{
  start: '2017-11-29 20:00',
  end: '2017-11-29 23:00',
  title: 'Laptop Ensemble',
  type: 'Arts & Culture'  
}, 

{
  start: '2017-11-29 20:00',
  end: '2017-11-29 23:00',
  title: 'Polaroid Stories',
  type: 'Arts & Culture'  
}, 

{ 
  start: '2017-11-29 08:30',
  end: '2017-11-29 23:30',
  title: 'Native American Heritage Month Celebration',
  type: 'Academic'  
},

{ 
  start: '2017-11-29 16:00',
  end: '2017-11-29 17:00',
  title: 'Gap Year Opportunies',
  type: 'Academic'  
},

{
  start: '2017-11-29 11:30',
  end: '2017-11-29 13:30',
  title: 'Interfolio Info Session',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-29 13:30',
  end: '2017-11-29 14:45',
  title: 'President\'s Commision on the Status of Women Meeting',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-29 13:45',
  end: '2017-11-29 15:30',
  title: 'Student Organization Orientation & Food Handling Workshops',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-29 14:00',
  end: '2017-11-29 15:30',
  title: 'CLA Chairs Meeting',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-29 14:00',
  end: '2017-11-29 16:00',
  title: 'Leadership Academy Workshop',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-30 06:00',
  end: '2017-11-30 22:00',
  title: 'Blind to History: Public Art Installation',
  type: 'Campus Life'  
},

{
  start: '2017-11-30 10:00',
  end: '2017-11-30 13:00',
  title: 'HIV Mobile Unit (LB Health Dept)',
  type: 'Campus Life'  
}, 

{
  start: '2017-11-30 10:30',
  end: '2017-11-30 13:00',
  title: 'World AIDS Day',
  type: 'Campus Life'  
}, 

{
  start: '2017-11-30 19:00',
  end: '2017-11-30 21:30',
  title: 'Polaroid Stories - Performances',
  type: 'Community'  
}, 

{
  start: '2017-11-30',
  title: 'David Lamelas: A Life of Their Own',
  type: 'Arts & Culture'  
}, 

{
  start: '2017-11-30 20:00',
  end: '2017-11-30 23:00',
  title: 'Piano Con Brio!',
  type: 'Arts & Culture'  
}, 

{
  start: '2017-11-29 20:00',
  end: '2017-11-29 23:00',
  title: 'Polaroid Stories',
  type: 'Arts & Culture'  
}, 

{ 
  start: '2017-11-30 08:30',
  end: '2017-11-30 23:30',
  title: 'Native American Heritage Month Celebration',
  type: 'Academic'  
},

{
  start: '2017-11-30 11:30',
  end: '2017-11-30 13:30',
  title: 'Interfolio Info Session',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-30 12:00',
  end: '2017-11-30 14:00',
  title: 'Lobby Corps Meeting',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-30 14:00',
  end: '2017-11-30 16:00',
  title: 'Leadership Academy Workshop',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-30 16:00',
  end: '2017-11-30 17:00',
  title: 'KON Board Meeting',
  type: 'Meeting/Lecture/Workshop'  
}, 

{
  start: '2017-11-30 16:00',
  end: '2017-11-30 18:00',
  title: 'Student Media Internship Class',
  type: 'Meeting/Lecture/Workshop'  
}, 

//DECEMBER//

{
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