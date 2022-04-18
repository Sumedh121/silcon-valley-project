class Form {


    constructor() {
        this.input = createInput("").attribute("placeholder", "Enter the answer");
        this.questionOne = createElement("h1");
        this.questionTwo = createElement("h1");
        this.submitButton = createButton("Submit");
        this.resetButton = createButton("Attack");
        this.message = createElement("h2");
    }

    position() {
        this.questionOne.position(windowWidth / 2 + 100, windowHeight - 600);
        this.questionOne.html(number1);
        this.questionOne.class("greeting");

        this.questionTwo.position(windowWidth / 2 + 130, windowHeight - 600);
        this.questionTwo.html(" + " + number2 + " = ?");
        this.questionTwo.class("greeting");

        this.input.position(windowWidth / 2 + 10, windowHeight - 500);
        this.input.class("customInput");

        this.submitButton.position(windowWidth / 2 + 10, windowHeight - 400);
        this.submitButton.class("customButton");

        this.resetButton.position(windowWidth / 2 + 490, windowHeight - 400);
        this.resetButton.class("customButton");
    }

    question() {
        number1 = Math.round(random(0, 9));
        number2 = Math.round(random(0, 9));
        sum = number1 + number2;

        this.submitButton.mouseClicked(() => {
            answer = this.input.value();
            if (answer == sum) {
                check = true;
                this.message.html("Thank You, Your Answer is correct");
                this.message.position(350, 350);
            } else {
                check = false;

                this.message.html("Thank You, Your Answer is not correct");
                this.message.position(350, 450);
            }
    
        })
    }

}

//questionDisplay() {
   // this.submitButton.mouseClicked(() => {
        //this.question();
        // display output next class task
   // })
//}