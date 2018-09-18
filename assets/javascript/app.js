$(document).ready(function() {

    //These are global variables
    var number = 30;
    var intervalId;
    var gcount = 0;
    var wcount = 0;
    var unanswered = 0;
    
    //Start the coundown
    function run() {
        intervalId = setInterval(decrement, 1000);
    }
    
    //Hide the questions and other contents
    $(window).on("load", hide);
    
    $('#start').on('click', function(){
        $(this).hide();
        show();
        run();
    });
    
    $('#done').on('click', function(){
        $('#start').hide();
        hide();
        rSummary();
        stop();
    });
    
    //Create the elements for the result page
    function rSummary(){
        var alldone = $('<h2>').html('Game Over!');
        var canswers = $('<p>').html('Correct answers: ' + gcount);
        var wanswers = $('<p>').html('Incorrect answers: ' + wcount);
        var cunanswered = $('<p>').html('Unanswered: ' + unanswered);
        var newclass= $('<div class="col-lg-4 col-lg-offset-4 text-center" id="summary">');
        newclass.append(alldone);
        newclass.append(canswers);
        newclass.append(wanswers);
        newclass.append(cunanswered);
        $('.row:nth(2)').append(newclass);
    }
    
    function decrement() {
        //  Decrease number by one.
        number--;
         
         //  Show the number in the #show-number tag.
         $("#timer").html(" " + number + " seconds");
        
        //  Once number hits one...
        if (number === 1) {
            $("#timer").html(" " + number + " second");
        }
          //  Once number hits zero...
        else if (number === 0) {
            //  ...run the stop function.
            $('#start').hide();
            hide();
            rSummary();
            stop();
        }
    }
    
    function stop() {
        clearInterval(intervalId);
    }
    
    
    
    //This function will hide some contents
    function hide(){
        $('.form-group').hide();
        $('#time').hide();
        $('#done').hide();
    }
    
    //This function will hide some contents
    function show() {
        $('.form-group').show();
        $('#time').show();
        $('#done').show();
    }
    
    //Grab all radio buttons and calculate good and incorrect answers when a change occurs
    $('input[type=radio]').on("change", function() {
       gcount =  $('input[value=goodanswer]:checked').length;
       wcount = $('input[value=wrong]:checked').length;
       unanswered = (5-(gcount + wcount));
    });
    
    });




























/*var questionsArray = [
  "What is the name of the U.S. president who served in 1789–1797 ?",
  "What is the name of the U.S. president who served in 1797–1801 ?",
  "What is the name of the U.S. president who served in 1801–1809 ?",
  "What is the name of the U.S. president who served in 1809–1817 ?",
  "What is the name of the U.S. president who served in 1817–1825 ?",
  /*"What is the name of the U.S. president who served in 1825–1829 ?",
  "What is the name of the U.S. president who served in 1829–1837 ?",
  "What is the name of the U.S. president who served in 1837–1841 ?",
  "What is the name of the U.S. president who served in 1841 ?",
  "What is the name of the U.S. president who served in 1841–1845 ?",
  "What is the name of the U.S. president who served in 1845–1849 ?",
  "What is the name of the U.S. president who served in 1849–1850 ?",
  "What is the name of the U.S. president who served in 1850–1853 ?",
  "What is the name of the U.S. president who served in 1853–1857?",
  "What is the name of the U.S. president who served in 1857–1861?",
  "What is the name of the U.S. president who served in 1861–1865?",
  "What is the name of the U.S. president who served in 1865–1869 ?",
  "What is the name of the U.S. president who served in 1869–1877?",
  "What is the name of the U.S. president who served in 1877–1881 ?",
  "What is the name of the U.S. president who served in 1881?",
  "What is the name of the U.S. president who served in 1881–1885 ?",
  "What is the name of the U.S. president who served in 1885–1889 ?",
  "What is the name of the U.S. president who served in 1889–1893 ?",
  "What is the name of the U.S. president who served in 1893–1897 ?",
  "What is the name of the U.S. president who served in 1897–1901 ?",
  "What is the name of the U.S. president who served in 1901–1909 ?",
  "What is the name of the U.S. president who served in 1909–1913 ?",
  "What is the name of the U.S. president who served in 1913–1921 ?",
  "What is the name of the U.S. president who served in 1921–1923 ?",
  "What is the name of the U.S. president who served in 1923–1929 ?",
  "What is the name of the U.S. president who served in 1929–1933 ?",
  "What is the name of the U.S. president who served in 1933–1945 ?",
  "What is the name of the U.S. president who served in 1945–1953 ?",
  "What is the name of the U.S. president who served in 1953–1961 ?",
  "What is the name of the U.S. president who served in 1961–1963 ?",
  "What is the name of the U.S. president who served in 1963–1969 ?",
  "What is the name of the U.S. president who served in 1969–1974 ?",
  "What is the name of the U.S. president who served in 1974–1977 ?",
  "What is the name of the U.S. president who served in 1977–1981 ?",
  "What is the name of the U.S. president who served in 1981–1989 ?",
  "What is the name of the U.S. president who served in 1989–1993 ?",
  "What is the name of the U.S. president who served in 1993–2001?",
  "What is the name of the U.S. president who served in 2001–2009?",
  "What is the name of the U.S. president who served in 2009–2017 ?",
  "What is the name of the U.S. president who served in 2017–present ?"
];*/
var answersArray = [
  ["A. Donald J. Trump", "B. George Washington", "C. Woodrow Wilson ", "D. Abraham Lincoln"],
  ["A. John Adams", "B. Warren Harding", "C. William J. Clinton ", "D. John F. Kennedy "],
  ["A. Benjamin Harrison ", "B. Thomas Jefferson", "C. Donald J. Trump", "D. Ronald Reagan"],
  ["A. George H. W. Bush ", "B. Thomas Jefferson", "C. Richard Nixon", "D.James Madison "],
  ["George Washington ", "William J. Clinton ", "James Monroe  ", "Barack Obama "],
  /*["John Quincy Adams", "Rutherford B. Hayes", " John F. Kennedy", " Dwight Eisenhower"],
  ["Woodrow Wilson ", " Warren Harding", "Harry S. Truman ", "Andrew Jackson "],
  ["Gerald Ford ", "Martin Van Buren", "Donald J. Trump ", "William H. Taft "],
  ["William Henry Harrison ", "Jimmy Carter ", "Richard Nixon ", " Lyndon Johnson"],
  ["George H. W. Bush", "Herbert Hoover ", " John Tyler", "Abraham Lincoln "],
  ["James Polk", "John F. Kennedy ", " Barack Obama", " Franklin D. Roosevelt"],
  ["Ronald Reagan", "William H. Taft", "Zachary Taylor", "Rutherford B. Hayes "],
  ["Calvin Coolidge ", "Millard Fillmore", " Woodrow Wilson", " Thomas Jefferson"],
  ["Franklin Pierce", "William J. Clinton ", "Harry S. Truman ", "Martin Van Buren "],
  ["Benjamin Harrison ", "James Buchanan", " Warren Harding ", "Gerald Ford "],
  ["Franklin D. Roosevelt", "George Washington", "Herbert Hoover  ", "Abraham Lincoln "],
  ["Andrew Johnson ", "Harry S. Truman", "Lyndon Johnson ", "George H. W. Bush "],
  ["Calvin Coolidge", "William McKinley", "Dwight Eisenhower ", "Ulysses S. Grant"],
  [" John F. Kennedy", "Donald J. Trump", "Rutherford B. Hayes ", " George H. W. Bush"],
  ["Lyndon Johnson", "James Garfield", "Abraham Lincoln ", " Chester Arthur"],
  [" Chester Arthur", "William J. Clinton ", "Jimmy Carter ", "Woodrow Wilson "],
  ["Grover Cleveland", "Thomas Jefferson", "William H. Taft ", " Herbert Hoover "],
  ["Ronald Reagan ", "Barack Obama", " Warren Harding ", "Benjamin Harrison"],
  ["Richard Nixon", "Franklin Pierce", "Grover Cleveland ", "William H. Taft "],
  [" William McKinley", "Chester Arthur", "Franklin Pierce ", " Lyndon Johnson"],
  ["Chester Arthur", "Theodore Roosevelt", "Donald J. Trump ", " William McKinley"],
  ["George H. W. Bush ", "Martin Van Buren", "William H. Taft", "Jimmy Carter "],
  ["George Washington", "Woodrow Wilson", " John F. Kennedy", " Calvin Coolidge"],
  [" Benjamin Harrison", "William McKinley", "Gerald Ford ", " Warren Harding"],
  ["Calvin Coolidge", "William McKinley", "William H. Taft ", "Lyndon Johnson "],
  ["Herbert Hoover ", "William J. Clinton ", "Harry S. Truman ", "George Washington "],
  ["Dwight Eisenhower", "Franklin D. Roosevelt", " Chester Arthur", "Woodrow Wilson "],
  ["Harry S. Truman", "Barack Obama", "Gerald Ford ", "Martin Van Buren "],
  ["William H. Taft", "Donald J. Trump", " Dwight Eisenhower", "Jimmy Carter "],
  ["William J. Clinton  ", "Thomas Jefferson", "Rutherford B. Hayes ", "John F. Kennedy "],
  ["Abraham Lincoln", "Lyndon Johnson", "Chester Arthur ", "Calvin Coolidge "],
  ["Rutherford B. Hayes ", "Richard Nixon", "William McKinley ", " Calvin Coolidge"],
  ["William H. Taft", "William McKinley", "George Washington ", " Gerald Ford"],
  [" Herbert Hoover ", "Barack Obama", " Benjamin Harrison", " Jimmy Carter"],
  ["Ronald Reagan", "Calvin Coolidge", " Dwight Eisenhower", "Franklin D. Roosevelt "],
  [" Harry S. Truman", "Gerald Ford", "George H. W. Bush ", "George Washington "],
  ["Benjamin Harrison", "Franklin D. Roosevelt", "William J. Clinton ", "Herbert Hoover  "],
  ["  Warren Harding", "Rutherford B. Hayes", " Lyndon Johnson", "George W. Bush "],
  ["Barack Obama", "Abraham Lincoln", "Richard Nixon ", " George Washington"],
  ["Barack Obama ", "Thomas Jefferson", "Donald J. Trump ", " Martin Van Buren"],*/
  
];
var correctAnswersArray = [
  "B. George Washington ",
  "A. John Adams",
  "B. Thomas Jefferson",
  "D. James Madison",
  "C. James Monroe ",
 /* "A. John Quincy Adams",
  "D. Andrew Jackson",
  "B. Martin Van Buren",
  "A. William Henry Harrison",
  "C. John Tyler",
  "A. James Polk",
  "C. Zachary Taylor",
  "B. Millard Fillmore",
  "A. Franklin Pierce",
  "B. James Buchanan",
  "D. Abraham Lincoln ",
  "A. Andrew Johnson ",
  "D. Ulysses S. Grant",
  "C. Rutherford B. Hayes",
  "B. James Garfield",
  "A. Chester Arthur",
  "A. Grover Cleveland",
  "D. Benjamin Harrison",
  "C. Grover Cleveland ",
  "A. William McKinley",
  "B. Theodore Roosevelt",
  "C. William H. Taft",
  "B. Woodrow Wilson",
  "D. Warren Harding",
  "A. Calvin Coolidge",
  "A. Herbert Hoover",
  "B.Franklin D. Roosevelt",
  "A. Harry S. Truman",
  "C. Dwight Eisenhower",
  "D. John F. Kennedy ",
  "B. Lyndon Johnson",
  "B. Richard Nixon",
  "D. Gerald Ford",
  "D.Jimmy Carter",
  "A. Ronald Reagan",
  "C. George H. W. Bush ",
  "C. William J. Clinton",
  "D. George W. Bush",
  "A. Barack Obama",
  "C. Donald J. Trump"*/
];

var randomQuestion;
var randomQuestionOptions;
var newRandomQuestion;
var newRandomQuestionOptions;
var buttonAlert;
var randomIndex;
var previousQuetions = []; 
var newRandomIndex;
/********************************************* */
/*$('#formDiv').hide();

var timer;
var correctAnswers =0;
var wrongAnswers =0;
var noAnswers =0;

//timer
function run() {
  timer = setInterval(decrement, 1000);
}
//onclick start button
$('#start').on("click", function(){
   $('#start').hide();
$('#formDiv').show();
run();

 });
//getting user input
 $('input[type=radio]').on("change", function() {
  correctAnswers =  $('input[value=correctAnswers]:checked').length;
  wrongAnswers = $('input[value=wrong]:checked').length;
  noAnswers = (7-(gcount + wcount));
});
//checking work
console.log(correctAnswers);
console.log(wrongAnswers);
console.log(noAnswers);


/******************************** */
/*$(document).ready(function() {

  //These are global variables
  var number = 30;
  var intervalId;
  var gcount = 0;
  var wcount = 0;
  var unanswered = 0;
  
  //Start the coundown
  function run() {
      intervalId = setInterval(decrement, 1000);
  }
  */
  //Hide the questions and other contents
 /* $(window).on("load", hide);
  
  $('#start').on('click', function(){
      $(this).hide();
      show();
      run();
  });
  
  $('#done').on('click', function(){
     // $('#start').hide();
      hide();
      rSummary();
      stop();
  });
  
  //Create the elements for the result page
  function rSummary(){
      var alldone = $('<h2>').html('All Done!');
      var canswers = $('<p>').html('Correct answers: ' + gcount);
      var wanswers = $('<p>').html('Incorrect answers: ' + wcount);
      var cunanswered = $('<p>').html('Unanswered: ' + unanswered);
      var newclass= $('<div class="col-lg-4 col-lg-offset-4 text-center" id="summary">');
      newclass.append(alldone);
      newclass.append(canswers);
      newclass.append(wanswers);
      newclass.append(cunanswered);
      $('.row:nth(2)').append(newclass);
  }
  
  function decrement() {
      //  Decrease number by one.
      number--;
       
       //  Show the number in the #show-number tag.
       $("#timer").html(" " + number + " seconds");
      
      //  Once number hits one...
      if (number === 1) {
          $("#timer").html(" " + number + " second");
      }
        //  Once number hits zero...
      else if (number === 0) {
          //  ...run the stop function.
          $('#start').hide();
          hide();
          rSummary();
          stop();
      }
  }
  
  function stop() {
      clearInterval(intervalId);
  }
  */
  
  
  //This function will hide some contents
  /*function hide(){
      $('.form-group').hide();
      $('#time').hide();
      $('#done').hide();
  }*/
  
  //This function will hide some contents
 /* function show() {
      $('.form-group').show();
      $('#time').show();
      $('#done').show();
  }*/
  
  //Grab all radio buttons and calculate good and incorrect answers when a change occurs
 /* $('input[type=radio]').on("change", function() {
     gcount =  $('input[value=goodanswer]:checked').length;
     wcount = $('input[value=wrong]:checked').length;
     unanswered = (7-(gcount + wcount));
  });
  
  });
*/


/********************************************* */
































































































 ///////////////////////////////////////////////////
/*$('#start').on("click", function(){
   $('#start').hide();
$('#firsthide').show();

 });


    buttonAlert = setTimeout(function() {
      for (let i = 0; i < questionsArray.length; i++) {
   
        $('#question1').empty();
        $('#options').empty();
        $('#question1').append(questionsArray[i]);
        $('#options').append(answersArray[i]);
      
       }
    },3000)

    
  });*/
//   buttonAlert = setInterval(function() {
//     randomIndex = (Math.floor(Math.random()*questionsArray.length)) ;
//       randomQuestion = questionsArray[randomIndex];
//       randomQuestionOptions = answersArray[randomIndex];
//       console.log(randomIndex);
//       previousQuetions.push(randomIndex);
//       console.log(randomQuestion);
//       console.log(randomQuestionOptions);
//       console.log(previousQuetions);
// while (true) {
//   if (previousQuetions.includes(randomIndex)) {
//     randomIndex = (Math.floor(Math.random()*questionsArray.length));
//     continue;
//   }
//   previousQuetions.push(randomIndex); 
//   break;
// }
  
//         $('#question1').empty();
//         $('#options').empty();
//         randomQuestion = questionsArray[randomIndex];
//         randomQuestionOptions = answersArray[randomIndex];
       
//         $('#question1').append(randomQuestion);
//       $('#options').append(randomQuestionOptions);
        
    
      //   $('#question1').empty();
      //   $('#options').empty();
      //   $('#question1').append(randomQuestion);
      // $('#options').append(randomQuestionOptions);




// set timer for each question. when question array is empty then stop the game aand ask user option to play again, also give an option to pause the game or leave the game. reset the game if the user wants to leave or if the game is over. 
// /////////////////////////////////////////////

