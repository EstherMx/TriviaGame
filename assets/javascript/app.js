
    //display 3 answers option for each of the 5 questions. 
    // the user can select only one answer

    var rightAns = 0;
    var wrongAns = 0;
    var notAns = 0;



    $("#startBtn").on("click", function() { //this function starts the game
       
        $("#game").show();
        $(".beginning").hide();
    });


    $("#doneBtn").on("click", function() {
        // $("#doneBtn").click(timer.reset);
        // clearInterval(counter);

        $("#response").show(); // display the total answers that the user got
        $("#game").hide();


//if the user clicks the first button, then he gets a right answer
// if the user one of the 'else if' button, then he gets a wrong answer
// if the user does not answer a question, he will get an unanswered question


        if ($('#q1').prop('checked')) {
            rightAns++;
            $("#right").html("<h4>" + rightAns + "</h4>");
        } else if (($('#q2').prop('checked')) || ($('#q3').prop('checked'))) {
            wrongAns++;
            $("#wrong").html("<h4>" + wrongAns + "</h4>");
        } else {
            notAns++;
            $("#zero").html("<h4>" + notAns + "</h4>");
        }


        if ($('#a2').prop('checked')) {
            rightAns++;
            $("#right").html("<h4>" + rightAns + "</h4>");
        } else if (($('#a1').prop('checked')) || ($('#a3').prop('checked'))) {
            wrongAns++;
            $("#wrong").html("<h4>" + wrongAns + "</h4>");
        } else {
            notAns++;
            $("#zero").html("<h4>" + notAns + "</h4>");
        }


        if ($('#b3').prop('checked')) {
            rightAns++;
            $("#right").html("<h4>" + rightAns + "</h4>");
        } else if (($('#b1').prop('checked')) || ($('#b2').prop('checked'))) {
            wrongAns++;
            $("#wrong").html("<h4>" + wrongAns + "</h4>");
        } else {
            notAns++;
            $("#zero").html("<h4>" + notAns + "</h4>");
        }


        if ($('#c2').prop('checked')) {
            rightAns++;
            $("#right").html("<h4>" + rightAns + "</h4>");
        } else if (($('#c1').prop('checked')) || ($('#c3').prop('checked'))) {
            wrongAns++;
            $("#wrong").html("<h4>" + wrongAns + "</h4>");
        } else {
            notAns++;
            $("#zero").html("<h4>" + notAns + "</h4>");
        }

        if ($('#d1').prop('checked')) {
            rightAns++;
            $("#right").html("<h4>" + rightAns + "</h4>");
        } else if (($('#d2').prop('checked')) || ($('#d3').prop('checked'))) {
            wrongAns++;
            $("#wrong").html("<h4>" + wrongAns + "</h4>");
        } else {
            notAns++;
            $("#zero").html("<h4>" + notAns + "</h4>");
        }
    });

    var number = 65;
    var intervalId;
    $("#doneBtn").on("click", stop);
    function run() {
      intervalId = setInterval(decrement, 1000);
    }
    function decrement() {
      number--;
      $("#display").html("<h2>" + number + "</h2>");
      if (number === 0) {
        stop();
      }
    }

    function stop() {
      clearInterval(intervalId);
    }
    run();

    