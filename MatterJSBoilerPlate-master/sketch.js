var gameState = "start";
var number1;
var number2;
var sum;

function preload() {
	logoImage = loadImage("images/logo.png");
	character_right = loadImage("images/character right.png");
	character_left = loadImage("images/character left.png");
	petImg = loadImage("images/pet.png");
	questionImg = loadImage("images/question.png");
	questBg = loadImage("images/quest background.png");
	enemy1 = loadImage("images/enemy 1.png");
	question1 = loadImage("images/question.png");
	questionBg = loadImage("images/question.png")
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	if (gameState == "start") {

		start = createImg("images/start.png");
		start.size(300, 300);
		start.position(windowWidth / 2 - 150, windowHeight - 300);
		start.mouseClicked(levelOneIntro);

		logo = createSprite(windowWidth / 2 - 10, windowHeight - 500);
		logo.addImage(logoImage);
		logo.scale = 5;


		ground = createSprite(windowWidth / 2 + 10, windowHeight - 10, windowWidth);
		ground.visible = false;
		ground.shapeColor = "green";

		sun = createSprite(windowWidth / 2 - 750, 50);
		sun.visible = false;


		player = createSprite(windowWidth / 2 - 500, windowHeight - 60);
		player.addImage(character_right);
		player.scale = 3;
		player.visible = false;

		pet = createSprite(windowWidth / 2 - 600, windowHeight - 80);
		pet.scale = 3;
		pet.addImage(petImg);
		pet.visible = false;

		questBackground = createSprite(windowWidth / 2 - 100, windowHeight / 2);
		questBackground.addImage(questBg);
		questBackground.scale = 10;
		questBackground.visible = false;

		questBtn = createImg("images/quest btn.png");
		questBtn.position(windowWidth / 2 - 30, windowHeight - 700);
		questBtn.size(200, 200);
		questBtn.mouseClicked(questOpen);
		questBtn.hide();

		backButton = createImg("images/backBtn.png");
		backButton.position(windowWidth / 2 + 230, windowHeight / 2 - 380);
		backButton.hide();

		questOneBtn = createImg("images/quest 1.png");
		questOneBtn.position(windowWidth / 2 - 200, windowHeight - 500);
		questOneBtn.size(400, 400);
		questOneBtn.hide();

		enemyOne = createSprite(windowWidth / 2 + 490, windowHeight - 10);
		enemyOne.addImage(enemy1);
		enemyOne.scale = 6;
		enemyOne.visible = false;

		questionBackground = createSprite(windowWidth / 2 - 10, windowHeight - 500);
		questionBackground.addImage(questionBg);
		questionBackground.visible = false;
		questionBackground.scale = 6;


		form = new Form();

		

	}
}

function draw() {
	drawSprites();
}

function levelOneIntro() {
	background("skyBlue");

	//removing start screen
	start.remove();
	backButton.hide();
	logo.visible = false;

	//sprites for intro
	ground.visible = true;
	sun.visible = true;
	player.visible = true;
	pet.visible = true;
	questBtn.show();

	//remove questThings
	questOneBtn.hide();
	questBackground.visible = false;

	questBtn.mouseClicked(questOpen);
	ground.shapeColor = "green";
}

function questOpen() {
	background("gray");
	questBtn.hide();
	ground.shapeColor = "gray";
	sun.visible = false;
	player.visible = false;
	pet.visible = false;
	questOneBtn.show();
	backButton.show();
	questBackground.visible = true;
	
	backButton.mouseClicked(levelOneIntro);
	questOneBtn.mouseClicked(battleOpen);
}

function battleOpen(){
	hideAll();
	background("darkRed");
	player.visible = true;
	pet.visible = true;
	enemyOne.visible = true;
	questionBackground.visible = true;

	form.position();
	form.question();
}

function hideAll() {
	player.visible = false;
	pet.visible = false;
	questBtn.hide();
	questOneBtn.hide();
	backButton.hide();
	questBackground.visible = false;
	start.hide();
	ground.visible = false;
	logo.visible = false;
	sun.visible = false;
	questionBackground.visible = false;
}



