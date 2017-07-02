
//Starting Variables===============================================================================================

	var wordPost = document.getElementById("wordPost"),
		wrongPost = document.getElementById("wrongGuess"),
		guessLeftPost = document.getElementById("guessLeft"),
		winPost = document.getElementById("wins"),
		lossPost = document.getElementById("losses"),
		pressAnyKey = document.getElementById(""), 
		winGame = document.getElementById(""),
		lossGame = document.getElementById(""),
		flagStart = false,
		winCount = 0,
		lossCount = 0,
		wrongGuessCount = 0,
		maxGuess = 13,
		category = "",
		word = "",
		wordArray = [],
		guessArray = [],
		guessedWordArray = [],
		categoryList = ["characters", "levels"],
		characters = ["Genji", "McCree", "Pharah", "Reaper", "Solder: 76", "Sombara", "Tracer", "Bastion", "Hanzo", "Junkrat", "Mei", "Torbjorn", "Widowmaker", "D.VA", "Orisa", "Reinhardt", "Roadhog", "Winston", "Zarya", "Ana", "Lucio", "Mercy", "Symmetra", "Zenyatta"],
		maps = ["Hanamura","Horizon Lunar Colony"," Temple of Anubis","Volskaya Industries","Dorado","Route 66","Watchpoint Gibraltar","Hollywood","Kings Row","Numbani","Eichenwalde","Ilios","Lijang Tower","Nepal","Oasis","Black Forest","Castillo","Encopoint Antarctica","Necropolis",];





//Listeners=====================================================================================================

	document.onKeyUp = function(event){

		//load event into local var
		var letter = event;
		
		//check if flagStart is true
		if(!flagStart){
			flagStart = true;
			
		}
	}
















//functions=====================================================================================================
	
	//Prints guessed word to the Viewpoint
	function printWord(guessArray){
		wordPost.innerText = guessArray;
	}


	//---------------------------------------------------------------------------------------------

	//press any key to start the game
	function pressAnyKey(){
		flagStat = true;
		pressAnyKey.style.display = "none";
	}


	//---------------------------------------------------------------------------------------------

	//Selects Category
	function catigorySelector(){

		//selects random category
		category = categoryList[Math.floor(math.random()*categoryList.length)]

	}


	//---------------------------------------------------------------------------------------------

	//selects word and loads it into wordArray, and word
	function wordSelectLoad (category){

		//selects word
		word = category[Math.floor(Math.random()*category.length)];

		//loads word into wordArray
		wordArray = word.split("");

		//Loads into Guess word
		for (var i = 0; i < wordArray.length; i++) {

			//tests if Word array is alphanumeric
			if(wordArray[i].test(/[^0-9a-z]/i)){

				//if alphanumeric load "_" into guessArray
				guessArray.push("_");
			}else{

				//load special character or white space into array
				guessArray[i] = wordArray[i];
			}
		}
	}


	//---------------------------------------------------------------------------------------------

	//Compares letter guessed to wordArray
	function guessCompare(letter){

		//variable to log wrong guess (true = wrong guess)
		var test = true;

		//for each letter in wordArray
		for (var i = 0; i < wordArray.length; i++) {

			//test if letter is = to array[i] value
			if(wordArray[i].toUpperCase()===letter.toUpperCase()){

				//set test to false as guess if correct
				test = false;

				//set guessArray[i] value = to wordArray[i] value
				guessArray[i] = wordArray[i];
			}
		}

		//if Guessed wrong 
		if(test){

			//see wrong guess
			wrongGuess();

		}else{

			//check if the game is won
			win();
		}

	}


	//---------------------------------------------------------------------------------------------

	//check if game is won
	function win(){
		if(wordArray===guessArray){
			winGame.style.display = "block";
			winCount++;
		}
	}


	//---------------------------------------------------------------------------------------------

	//checks if the game is lost
	function loss(){
		if(wrongGuessCount >= maxGuess){
			lossGame.style.display = "block";
			lossCount++;
		}

	}


	//---------------------------------------------------------------------------------------------

	//If guess is wrong do the following
	function wrongGuess(){

		//Increase the wrongGuessCount
		wrongGuessCount++;

		//Check if the game is lost
		loss();
	}


	//---------------------------------------------------------------------------------------------

	//start a new game
	function newGame(){

		//reload the web-page from the source (!from cash)
		location.reload(true);
	}

	//---------------------------------------------------------------------------------------------