// 1. Create HTML page for main screen
    // A. Header "Coding Quiz Challenge"
    // B. High score text in top left
    // C. Timer in top right
    // D. game explamnation paragraph
    // E. Start Button
        // 1. Begins games
//2. 5 Question pages - HTML
    // A. H1 with question in bold
    // B. 4 Buttions for each answer
        // 1. Click on button leads to next HTML page
    // C. High score in top left
    // D. Timer in top right
//3. Finished page - HTML
    // A. All done Header
    // B. Text "Your score is ...."
    // C. Text box to insert name
        // 1. Save to local storage
    // D. Submit Button
        // 1. Leads to high score page
//4. High score page - HTML
    // A. High scores header
    // B. List of high scores from local storage.
    // C. Go back button
    // D. Clear High scores Button

    

// * The user arrives at the landing page and is presented with a call-to-action to "Start Quiz." Also note the navigation option to "View Highscores" and the "Time" value set at 0.

// * Clicking the "Start Quiz" button presents the user with a series of questions. The timer is initialized with a value and immediately begins countdown.

var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    }
  ]

  var totalSeconds = 75;

  

function selectQuestion(){
    
    for (var i = 0; i < questions.length; i++){
        
        $("#question").html(questions[i].title)
        $("#a1").html(questions[i].choices[0])
        $("#a2").html(questions[i].choices[1])
        $("#a3").html(questions[i].choices[2])
        $("#a4").html(questions[i].choices[3])
    }    

}

$("#begin").on("click", selectQuestion)
$("#begin").on("click", startTimer)
 

function playGame(){
   
    
    }

function startTimer(){
    var timerInterval = setInterval(function() {
        totalSeconds--;
        if(totalSeconds === 0){
                console.log (true);
                totalSeconds = 0;
                clearInterval(timerInterval);
            }
        $("#secondsLeft").html(totalSeconds);}    , 1000);
    }

    

    



// * Score is calculated by time remaining. Answering quickly and correctly results in a higher score. Answering incorrectly results in a time penalty (for example, 15 seconds are subtracted from time remaining).

// * When time runs out and/or all questions are answered, the user is presented with their final score and asked to enter their initials. Their final score and initials are then stored in `localStorage`.

// * Your application should also be responsive, ensuring that it adapts to multiple screen sizes.