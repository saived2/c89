player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer turn - " + player2_name;

function send () {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();

    w1=word.charAt(1);
    
    len = Math.floor(word.length/2);
    w2 = word.charAt(len);

    len2 = word.length-1;
    w3 = word.charAt(len2);

    x1 = word.replace(w1,"_");
    x2 = x1.replace(w2,"_");
    x3 = x2.replace(w3,"_");

    y1 = "<h4 id= 'word_display'> Q. "+x3+"</h4>";
    y2 = "<br>Answer : <input type='text' id='input_check_box'>";
    y3 = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = y1 + y2 + y3 ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}

question_turn="player1"
answer_turn="player2"
function check() {
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();

    if (answer == word) {
        if (answer_turn == "player1" ) {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else{
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }

    if(question_turn == "player1"){
        question_turn = "player2";
            document.getElementById("player_question").innerHTML ="Question Turn - " + player2_name;
    }
    else{
        question_turn = "player1";
            document.getElementById("player_question").innerHTML ="Question Turn - " + player1_name;
    }

    if(answer_turn == "player1"){
        answer_turn = "player2";
            document.getElementById("player_answer").innerHTML ="Answer Turn - " + player2_name;
    }
    else{
        answer_turn = "player1";
            document.getElementById("player_answer").innerHTML ="Answer Turn - " + player1_name;
    }

    document.getElementById("output").innerHTML = "";
}