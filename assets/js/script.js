
//Starting Variables===============================================================================================

	var wordPost = document.getElementById("wordPost"),
		wrongPost = document.getElementById("wrongGuess"),
		guessLeftPost = document.getElementById("guessLeft"),
		winPost = document.getElementById("wins"),
		lossPost = document.getElementById("losses"),
		loadScreen = document.getElementById(""), 
		winScreen = document.getElementById(""),
		lossScreen = document.getElementById(""),
		flagStart = false,
		flagWin = false,
		flagLoss = false,
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

	window.addEventListener('keyup', function(event){

		//load event into local var
		var letter = event.key;
		console.log(letter);
		
		//check if flagStart is true
		if(!flagStart||flagWin||flagloss){
			pressAnyKey();
			//selects the subject catigory, selects word and loads it, prints word to the screen
			Selector();

		//Check if a word has been selected
		}else{

			//compares code and updats screen
			guessCompare(letter);
			}

	},true );

//functions=====================================================================================================
	
	//Prints guessed word to the Viewpoint
	function printWord(guessArray){
		wordPost.innerText = guessArray;
		console.log("" + guessArray);
	}


	//---------------------------------------------------------------------------------------------

	//press any key to start the game
	function pressAnyKey(){
		if(!flagStart){
			//resets flagStart's value
			flagStart = true;
			console.log("flagStart is now: " + flagStart);

			//Hide message
			loadScreen.style.display = "none";

		}else if(flagWin){
			//resets flagWinvalues
			flagWin = false;
			console.log("flagWin is now: " + flagWin);

			//Hide Message
			winScreen.style.display = "none";

		}else if(flagLoss){
			//resets flagWinvalues
			flagLoss = false;
			console.log("flagWin is now: " + flagWin);

			//Hide Message
			lossScreen.style.display = "none";
		}
	}


	//---------------------------------------------------------------------------------------------

	//Selects Category
	function Selector(){

		//selects random category
		category = categoryList[Math.floor(math.random()*categoryList.length)]
		console.log("Category Var is set to: " + category);

		//runs wordSelectLoad
		wordSelectLoad(category);
	}


	//---------------------------------------------------------------------------------------------

	//selects word and loads it into wordArray, and word
	function wordSelectLoad(category){

		//selects word
		word = category[Math.floor(Math.random()*category.length)];
		console.log("Word is set to: " + word)

		//loads word into wordArray
		wordArray = word.split("");
		console.log("wordArray is set to: " +  wordArray)

		//Loads into Guess word
		for (var i = 0; i < wordArray.length; i++) {

			//tests if Word array is alphanumeric
			if(wordArray[i].test(/[^0-9a-z]/i)){

				//if alphanumeric load "_" into guessArray
				guessArray.push("_");
				console.log("guessArray is now set to: " + guessArray)
			}else{

				//load special character or white space into array
				guessArray[i] = wordArray[i];
				console.log("guessArray is now set to: " +  guessArray)
			}
		}

		//prints the word to the center view port
		printWord();
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

				//set test to false
				test = false;

				//set guessArray[i] value = to wordArray[i] value
				guessArray[i] = wordArray[i];
				console.log("Letter: " + letter + " was a match");
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
			//sets flagWin
			flagWin = true;
			//show messgae
			winScreen.style.display = "block";
			//update winCount
			winCount++;
			console.log("winCount is now: " + winCount)
		}
	}


	//---------------------------------------------------------------------------------------------

	//checks if the game is lost
	function loss(){
		if(wrongGuessCount >= maxGuess){
			//sets flagloss
			flagWin = true;
			//show messgae
			lossScreen.style.display = "block";
			//update lossCount
			lossCount++;
			console.log("lossCount is now: " + lossCount)
		}

	}

	//---------------------------------------------------------------------------------------------

	//If guess is wrong do the following
	function wrongGuess(letter){

		//var if word has not been tried
		var test = true;

		for (var i = 0; i < guessArray.length; i++) {
			if(guessArray[i].toUpperCase()===letter.toUpperCase()){
				test = false;
				console.log("test is now: " + test);
			}
		}

		if(test){
			//Increase the wrongGuessCount
			wrongGuessCount++;
			console.log("wrongGuessCount is now " + wrongGuessCount);

			console.log("Pushing " + letter + " to guessArray");
			guessArray.push(letter);
			console.log("guessArray now reads: " + guessArray);		
		}

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


