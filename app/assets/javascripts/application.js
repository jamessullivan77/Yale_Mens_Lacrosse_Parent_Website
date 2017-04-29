// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .



// #############################################################################################
// #############################################################################################
// ##########################################################################################
// event_planning_show 
// ##########################################################################################
// #############################################################################################
// #############################################################################################
document.addEventListener('DOMContentLoaded', function(){

var state = 0
// ######################################################################################
// functions opening dropdowns 
// ######################################################################################
    document.getElementById('villanova').onclick = function(){
      console.log('click');
        state = 1
          console.log('state 1');
            document.addEventListener('click', function(){
              document.getElementById('dropdown_1').style.display = 'inline-block';
                document.getElementById('dropdown_2').style.display = 'none';
                document.getElementById('dropdown_3').style.display = 'none';
                document.getElementById('dropdown_4').style.display = 'none';
                document.getElementById('dropdown_5').style.display = 'none';
                document.getElementById('dropdown_6').style.display = 'none';
                document.getElementById('dropdown_7').style.display = 'none';
                document.getElementById('dropdown_8').style.display = 'none';
                document.getElementById('dropdown_9').style.display = 'none';
                document.getElementById('dropdown_10').style.display = 'none';
                document.getElementById('dropdown_11').style.display = 'none';
                document.getElementById('dropdown_12').style.display = 'none';
                document.getElementById('dropdown_13').style.display = 'none';
            });
    };

     document.getElementById('maryland').onclick = function(){
      console.log('click');
        state = 2
          console.log('state 2');
            document.addEventListener('click', function(){
              document.getElementById('dropdown_2').style.display = 'inline-block';
                document.getElementById('dropdown_1').style.display = 'none';
                document.getElementById('dropdown_3').style.display = 'none';
                document.getElementById('dropdown_4').style.display = 'none';
                document.getElementById('dropdown_5').style.display = 'none';
                document.getElementById('dropdown_6').style.display = 'none';
                document.getElementById('dropdown_7').style.display = 'none';
                document.getElementById('dropdown_8').style.display = 'none';
                document.getElementById('dropdown_9').style.display = 'none';
                document.getElementById('dropdown_10').style.display = 'none';
                document.getElementById('dropdown_11').style.display = 'none';
                document.getElementById('dropdown_12').style.display = 'none';
                document.getElementById('dropdown_13').style.display = 'none';
            });
    };

     document.getElementById('bryant').onclick = function(){
      console.log('click');
        state = 3
          console.log('state 3');
            document.addEventListener('click', function(){
              document.getElementById('dropdown_3').style.display = 'inline-block';
                document.getElementById('dropdown_2').style.display = 'none';
                document.getElementById('dropdown_1').style.display = 'none';
                document.getElementById('dropdown_4').style.display = 'none';
                document.getElementById('dropdown_5').style.display = 'none';
                document.getElementById('dropdown_6').style.display = 'none';
                document.getElementById('dropdown_7').style.display = 'none';
                document.getElementById('dropdown_8').style.display = 'none';
                document.getElementById('dropdown_9').style.display = 'none';
                document.getElementById('dropdown_10').style.display = 'none';
                document.getElementById('dropdown_11').style.display = 'none';
                document.getElementById('dropdown_12').style.display = 'none';
                document.getElementById('dropdown_13').style.display = 'none';
            });
    };

     document.getElementById('umass').onclick = function(){
      console.log('click');
        state = 4
          console.log('state 4');
            document.addEventListener('click', function(){
              document.getElementById('dropdown_4').style.display = 'inline-block';
                document.getElementById('dropdown_2').style.display = 'none';
                document.getElementById('dropdown_3').style.display = 'none';
                document.getElementById('dropdown_1').style.display = 'none';
                document.getElementById('dropdown_5').style.display = 'none';
                document.getElementById('dropdown_6').style.display = 'none';
                document.getElementById('dropdown_7').style.display = 'none';
                document.getElementById('dropdown_8').style.display = 'none';
                document.getElementById('dropdown_9').style.display = 'none';
                document.getElementById('dropdown_10').style.display = 'none';
                document.getElementById('dropdown_11').style.display = 'none';
                document.getElementById('dropdown_12').style.display = 'none';
                document.getElementById('dropdown_13').style.display = 'none';
            });
    };

     document.getElementById('fairfield').onclick = function(){
      console.log('click');
        state = 5
          console.log('state 5');
            document.addEventListener('click', function(){
              document.getElementById('dropdown_5').style.display = 'inline-block';
                document.getElementById('dropdown_2').style.display = 'none';
                document.getElementById('dropdown_3').style.display = 'none';
                document.getElementById('dropdown_4').style.display = 'none';
                document.getElementById('dropdown_1').style.display = 'none';
                document.getElementById('dropdown_6').style.display = 'none';
                document.getElementById('dropdown_7').style.display = 'none';
                document.getElementById('dropdown_8').style.display = 'none';
                document.getElementById('dropdown_9').style.display = 'none';
                document.getElementById('dropdown_10').style.display = 'none';
                document.getElementById('dropdown_11').style.display = 'none';
                document.getElementById('dropdown_12').style.display = 'none';
                document.getElementById('dropdown_13').style.display = 'none';
            });
    };

     document.getElementById('cornell').onclick = function(){
      console.log('click');
        state = 6
          console.log('state 6');
            document.addEventListener('click', function(){
              document.getElementById('dropdown_6').style.display = 'inline-block';
                document.getElementById('dropdown_2').style.display = 'none';
                document.getElementById('dropdown_3').style.display = 'none';
                document.getElementById('dropdown_4').style.display = 'none';
                document.getElementById('dropdown_5').style.display = 'none';
                document.getElementById('dropdown_1').style.display = 'none';
                document.getElementById('dropdown_7').style.display = 'none';
                document.getElementById('dropdown_8').style.display = 'none';
                document.getElementById('dropdown_9').style.display = 'none';
                document.getElementById('dropdown_10').style.display = 'none';
                document.getElementById('dropdown_11').style.display = 'none';
                document.getElementById('dropdown_12').style.display = 'none';
                document.getElementById('dropdown_13').style.display = 'none';
            });
    };

     document.getElementById('princeton').onclick = function(){
      console.log('click');
        state = 7
          console.log('state 7');
            document.addEventListener('click', function(){
              document.getElementById('dropdown_7').style.display = 'inline-block';
                document.getElementById('dropdown_2').style.display = 'none';
                document.getElementById('dropdown_3').style.display = 'none';
                document.getElementById('dropdown_4').style.display = 'none';
                document.getElementById('dropdown_5').style.display = 'none';
                document.getElementById('dropdown_6').style.display = 'none';
                document.getElementById('dropdown_1').style.display = 'none';
                document.getElementById('dropdown_8').style.display = 'none';
                document.getElementById('dropdown_9').style.display = 'none';
                document.getElementById('dropdown_10').style.display = 'none';
                document.getElementById('dropdown_11').style.display = 'none';
                document.getElementById('dropdown_12').style.display = 'none';
                document.getElementById('dropdown_13').style.display = 'none';
            });
    };

     document.getElementById('upenn').onclick = function(){
      console.log('click');
        state = 8
          console.log('state 8');
            document.addEventListener('click', function(){
              document.getElementById('dropdown_8').style.display = 'inline-block';
                document.getElementById('dropdown_2').style.display = 'none';
                document.getElementById('dropdown_3').style.display = 'none';
                document.getElementById('dropdown_4').style.display = 'none';
                document.getElementById('dropdown_5').style.display = 'none';
                document.getElementById('dropdown_6').style.display = 'none';
                document.getElementById('dropdown_7').style.display = 'none';
                document.getElementById('dropdown_1').style.display = 'none';
                document.getElementById('dropdown_9').style.display = 'none';
                document.getElementById('dropdown_10').style.display = 'none';
                document.getElementById('dropdown_11').style.display = 'none';
                document.getElementById('dropdown_12').style.display = 'none';
                document.getElementById('dropdown_13').style.display = 'none';
            });
    };

     document.getElementById('st_johns').onclick = function(){
      console.log('click');
        state = 9
          console.log('state 9');
            document.addEventListener('click', function(){
              document.getElementById('dropdown_9').style.display = 'inline-block';
                document.getElementById('dropdown_2').style.display = 'none';
                document.getElementById('dropdown_3').style.display = 'none';
                document.getElementById('dropdown_4').style.display = 'none';
                document.getElementById('dropdown_5').style.display = 'none';
                document.getElementById('dropdown_6').style.display = 'none';
                document.getElementById('dropdown_7').style.display = 'none';
                document.getElementById('dropdown_8').style.display = 'none';
                document.getElementById('dropdown_1').style.display = 'none';
                document.getElementById('dropdown_10').style.display = 'none';
                document.getElementById('dropdown_11').style.display = 'none';
                document.getElementById('dropdown_12').style.display = 'none';
                document.getElementById('dropdown_13').style.display = 'none';
            });
    };

     document.getElementById('dartmouth').onclick = function(){
      console.log('click');
        state = 10
          console.log('state 10');
            document.addEventListener('click', function(){
              document.getElementById('dropdown_10').style.display = 'inline-block';
                document.getElementById('dropdown_2').style.display = 'none';
                document.getElementById('dropdown_3').style.display = 'none';
                document.getElementById('dropdown_4').style.display = 'none';
                document.getElementById('dropdown_5').style.display = 'none';
                document.getElementById('dropdown_6').style.display = 'none';
                document.getElementById('dropdown_7').style.display = 'none';
                document.getElementById('dropdown_8').style.display = 'none';
                document.getElementById('dropdown_9').style.display = 'none';
                document.getElementById('dropdown_1').style.display = 'none';
                document.getElementById('dropdown_11').style.display = 'none';
                document.getElementById('dropdown_12').style.display = 'none';
                document.getElementById('dropdown_13').style.display = 'none';
            });
    };

     document.getElementById('brown').onclick = function(){
      console.log('click');
        state = 11
          console.log('state 11');
            document.addEventListener('click', function(){
              document.getElementById('dropdown_11').style.display = 'inline-block';
                document.getElementById('dropdown_2').style.display = 'none';
                document.getElementById('dropdown_3').style.display = 'none';
                document.getElementById('dropdown_4').style.display = 'none';
                document.getElementById('dropdown_5').style.display = 'none';
                document.getElementById('dropdown_6').style.display = 'none';
                document.getElementById('dropdown_7').style.display = 'none';
                document.getElementById('dropdown_8').style.display = 'none';
                document.getElementById('dropdown_9').style.display = 'none';
                document.getElementById('dropdown_10').style.display = 'none';
                document.getElementById('dropdown_1').style.display = 'none';
                document.getElementById('dropdown_12').style.display = 'none';
                document.getElementById('dropdown_13').style.display = 'none';
            });
    };

     document.getElementById('albany').onclick = function(){
      console.log('click');
        state = 12
          console.log('state 12');
            document.addEventListener('click', function(){
              document.getElementById('dropdown_12').style.display = 'inline-block';
                document.getElementById('dropdown_2').style.display = 'none';
                document.getElementById('dropdown_3').style.display = 'none';
                document.getElementById('dropdown_4').style.display = 'none';
                document.getElementById('dropdown_5').style.display = 'none';
                document.getElementById('dropdown_6').style.display = 'none';
                document.getElementById('dropdown_7').style.display = 'none';
                document.getElementById('dropdown_8').style.display = 'none';
                document.getElementById('dropdown_9').style.display = 'none';
                document.getElementById('dropdown_10').style.display = 'none';
                document.getElementById('dropdown_11').style.display = 'none';
                document.getElementById('dropdown_1').style.display = 'none';
                document.getElementById('dropdown_13').style.display = 'none';
            });
    };

     document.getElementById('harvard').onclick = function(){
      console.log('click');
        state = 13
          console.log('state 13');
            document.addEventListener('click', function(){
              document.getElementById('dropdown_13').style.display = 'inline-block';
                document.getElementById('dropdown_2').style.display = 'none';
                document.getElementById('dropdown_3').style.display = 'none';
                document.getElementById('dropdown_4').style.display = 'none';
                document.getElementById('dropdown_5').style.display = 'none';
                document.getElementById('dropdown_6').style.display = 'none';
                document.getElementById('dropdown_7').style.display = 'none';
                document.getElementById('dropdown_8').style.display = 'none';
                document.getElementById('dropdown_9').style.display = 'none';
                document.getElementById('dropdown_10').style.display = 'none';
                document.getElementById('dropdown_11').style.display = 'none';
                document.getElementById('dropdown_12').style.display = 'none';
                document.getElementById('dropdown_1').style.display = 'none';
            });
    };



// #############################################################################################       
// ############################################################################################# 
// Pregame tailgate button add text and column
// ############################################################################################# 
// ############################################################################################# 

document.getElementById('items_button').addEventListener('click',
    function(event){
    event.preventDefault();
    var table = document.getElementById('pregame_tailgate_table');
    var newItems = document.getElementById('items_text').value;
    var row = table.insertRow(2);
    // var cell1 = row.insertCell(0);
    
    document.getElementById('items_text').value = ""
    
    cell1.innerText = newItems;

    }); 

document.getElementById('parent_button').addEventListener('click',
    function(event){
    event.preventDefault();
    var table = document.getElementById('pregame_tailgate_table');
    var newParent = document.getElementById('parent_text').value;
    var row = table.insertRow(2);
    // var cell2 = row.insertCell(1);

    document.getElementById('parent_text').value = ""
    
    cell2.innerText = newParent;

 
    });
var table = document.getElementById('pregame_tailgate_table');
var row = table.insertRow(2);
var cell1 = row.insertCell(0); 
var cell2 = row.insertCell(1);   

});



