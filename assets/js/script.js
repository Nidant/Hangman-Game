
//Starting Variables===============================================================================================

	var wordPost = document.getElementById("wordPost"),
		wrongPost = document.getElementById("lettersGuessed"),
		catigoryPost = document.getElementById("catigory"),
		guessLeftPost = document.getElementById("guessLeft"),
		guessedCount = document.getElementById("wrongGuess"),
		winPost = document.getElementsByClassName("wins")[0],
		winPopUpPost = document.getElementById("win"),
		lossPost = document.getElementById("losses"),
		newGameBtn = document.getElementsByClassName("btn")[0],
		messageBoard = document.getElementById("messageBoard"),
		loadScreen = document.getElementsByClassName("startScreen")[0], 
		winScreen = document.getElementsByClassName("winScreen")[0],
		lossScreen = document.getElementsByClassName("lossScreen")[0],
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
		guessedWordArray = [" "],
		categoryList = ["characters", "levels"],
		characters = ["Genji", "McCree", "Pharah", "Reaper", "Solder: 76", "Sombara", "Tracer", "Bastion", "Hanzo", "Junkrat", "Mei", "Torbjorn", "Widowmaker", "D.VA", "Orisa", "Reinhardt", "Roadhog", "Winston", "Zarya", "Ana", "Lucio", "Mercy", "Symmetra", "Zenyatta"],
		levels = ["Hanamura","Horizon Lunar Colony"," Temple of Anubis","Volskaya Industries","Dorado","Route 66","Watchpoint Gibraltar","Hollywood","Kings Row","Numbani","Eichenwalde","Ilios","Lijang Tower","Nepal","Oasis","Black Forest","Castillo","Encopoint Antarctica","Necropolis",];



//Listeners=====================================================================================================

	window.addEventListener('keyup', function(event){

		//load event into local var
		var letter = event.key;
		console.log("Letter is now " + letter);
		
		//check if flagStart is true
		if(!flagStart||flagWin||flagLoss){

			//reset vars for next game
			guessedWordArray = [];
			wordArray = [];
			wrongGuessCount = 0;
			guessedwordArray = [];

			//print words to screen
			pressAnyKey();
			//selects the subject catigory, selects word and loads it, prints word to the screen
			Selector();

		//Check if a word has been selected
		}else{

			//compares code and updats screen
			guessCompare(letter);

			//for testing
			console.log("guessArray is now: " + guessArray);


			printWord();


			}

	},true );

	//restarts the game
	newGameBtn.addEventListener('click', function(){
		newGame();
	},true );

//functions=====================================================================================================
	
	//Prints guessed word to the Viewpoint
	function printWord(){

		//clears on screen test before repost
		wordPost.innerHTML = "";
		wrongPost.innerHTML = "";

		//Print guessedWordArray to Word Post
		for (var i = 0; i < guessedWordArray.length; i++) {
		
			//holds letter to be printed
			var temp1 = guessedWordArray[i] + " ";

			//prints the word to the display with a space between letters
			addWordPost(temp1);

			//prints test logs to the Console
			console.log("guessWordArray printed " + guessedWordArray);
			console.log("guessWordArray value is now " + guessedWordArray);
		}

		if (typeof guessArray !== 'undefined' && guessArray.length > 0) {
			//Print guessedWordArray to Word Post
			for (var i = 0; i < guessArray.length; i++) {
			
				//holds letter to be printed
				var temp2 = guessArray[i] + " ";

				//prints the word to the display with a space between letters
				addWrongGuessPost(temp2);

				//prints test logs to the Console
				console.log("guessArray printed " + guessArray);
				console.log("guessArray value is now " + guessArray);
			}
		}

		guessLeftPost.innerHTML = wrongGuessCount;
	}


	//---------------------------------------------------------------------------------------------

	//press any key to start the game
	function pressAnyKey(){
		if(!flagStart){
			//resets flagStart's value
			flagStart = true;
			console.log("flagStart is now: " + flagStart);

			//Hide message
			messageBoard.style.display = "none";
			loadScreen.style.display = "none";

		}else if(flagWin){
			//resets flagWinvalues
			flagWin = false;
			console.log("flagWin is now: " + flagWin);

			//Hide Message
			messageBoard.style.display = "none";
			winScreen.style.display = "none";

		}else if(flagLoss){
			//resets flagWinvalues
			flagLoss = false;
			console.log("flagWin is now: " + flagWin);

			//Hide Message
			messageBoard.style.display = "none";
			lossScreen.style.display = "none";

		}
	}


	//---------------------------------------------------------------------------------------------

	//Selects Category
	function Selector(){

		//selects random category
		category = categoryList[Math.floor(Math.random()*categoryList.length)]
		console.log("Category Var is set to: " + category);

		//posts the Catigory
		catigoryPost.innerText = category;

		//runs wordSelectLoad
		wordSelectLoad(category);
	}


	//---------------------------------------------------------------------------------------------

	//selects word and loads it into wordArray, and word
	function wordSelectLoad(category){

		if(category === "characters"){
			//selects word
			word = characters[Math.floor(Math.random()*characters.length)];
			console.log("Word is set to: " + word);

			//loads word into wordArray
			wordArray = word.split("");
			console.log("wordArray is set to: " +  wordArray);

			//Loads into Guess word
			for (var i = 0; i < wordArray.length; i++) {
				var word = wordArray[i];
				var patt = /^[a-z0-9]+$/i;
				var test = patt.test(word);

				//tests if Word array is alphanumeric
				if(test){

					//if alphanumeric load "_" into guessedWordArray
					guessedWordArray.push("_");
					console.log("guessedWordArray is now set to: " + guessedWordArray);
				}else{

					//load special character or white space into array
					guessedWordArray[i] = wordArray[i];
					console.log("guessedWordArray is now set to: " +  guessedWordArray);
				}
			}
		}
		else{
			//selects word
			word = levels[Math.floor(Math.random()*levels.length)];
			console.log("Word is set to: " + word);

			//loads word into wordArray
			wordArray = word.split("");
			console.log("wordArray is set to: " +  wordArray);

			//Loads into Guess word
			for (var i = 0; i < wordArray.length; i++) {
				var word = wordArray[i];
				var patt = /^[a-z0-9]+$/i;
				var test = patt.test(word);

				//tests if Word array is alphanumeric
				if(test){

					//if alphanumeric load "_" into guessedWordArray
					guessedWordArray.push("_");
					console.log("guessedWordArray is now set to: " + guessedWordArray);
				}else{

					//load special character or white space into array
					guessedWordArray[i] = wordArray[i];
					console.log("guessedWordArray is now set to: " +  guessedWordArray)
				}
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

				//set guessedWordArray[i] value = to wordArray[i] value
				guessedWordArray[i] = wordArray[i];
				//console.log("Letter: " + letter + " was a match");
				console.log("guessedWordArray: " + guessedWordArray[i] + " was a match");
			}
		}

		//if Guessed wrong 
		if(test){

			//tests if alphanumeric			
			var patt = /^[a-z0-9]+$/i;
			var check = patt.test(letter);


			if(check){

				//see wrong guess
				wrongGuess(letter);

			}

		}else{

			//check if the game is won
			win();
		}

	}


	//---------------------------------------------------------------------------------------------

	//check if game is won
	function win(){

		var a = guessedWordArray.toString();
		var b = wordArray.toString();

		if(b===a){
			//sets flagWin

			flagWin = true;

			//show messgae
			winScreen.style.display = "block";
			messageBoard.style.display = "block";

			//update winCount
			winCount++;
			console.log("winCount is now: " + winCount);

			//updates winCount in HTML
			winPost.innerHTML = winCount;
		}
	}


	//---------------------------------------------------------------------------------------------

	//checks if the game is lost
	function loss(){
		if(wrongGuessCount >= maxGuess){

			//sets flagLoss 
			flagLoss = true;

			//show messgae
			lossScreen.style.display = "block";
			messageBoard.style.display = "block";

			//update lossCount
			lossCount++;
			console.log("lossCount is now: " + lossCount);

			//Update lossCount in HTML
			lossPost.innerHTML = lossCount;

		}

	}

	//---------------------------------------------------------------------------------------------

	//If guess is wrong do the following
	function wrongGuess(letter){

		//var if word has not been tried
		var test = true;

		//test if the guessArray null
		if (guessArray.length > 1) {
			for (var i = 0; i < guessArray.length; i++) {
				console.log("guessArray is now: " + guessArray)
				if(guessArray[i].toUpperCase()===letter.toUpperCase()){
					test = false;
					console.log("test is now: " + test);
				}
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

	//add 
	function addWordPost(text) {
	  var newtext = document.createTextNode(text);
	  wordPost.appendChild(newtext);
	}

	//add 
	function addWrongGuessPost(text) {
	  var newtext = document.createTextNode(text);
	  wrongPost.appendChild(newtext);
	}