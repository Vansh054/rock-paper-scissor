class Form {
    constructor(){
      this.inputBox = createInput("                   Enter the name")
      this.button = createButton("PLAY")
      this.greeting = createElement('h2')
      this.reset = createButton("Reset")
    }
    hideForm(){
      this.inputBox.hide();
      this.button.hide();
      this.greeting.hide();
    }
    display(){
       var heading = createElement('h1') 
       heading.html("ROCK PAPER SCISSOR")
       heading.position(displayWidth/2 - 155,20)
       this.inputBox.position(displayWidth/2 - 115,displayHeight/2 - 100)
       this.inputBox.size(250,25)
       this.button.position(displayWidth/2 - 40,displayHeight/2 - 60)
       this.button.size(100,25)
       this.reset.position(displayWidth/2 + 400, 42)
       player.readCount();
       this.button.mousePressed(()=>{
           this.inputBox.hide();
           this.button.hide();
           player.name = this.inputBox.value();
           playerCount = playerCount + 1;
           player.index = playerCount;
           player.updateplayerCount(playerCount);
           this.greeting.html("Welcome! " + player.name)
           this.greeting.position(displayWidth/2 - 155,55)
          player.updateName();
     
       })
       
      this.reset.mousePressed(()=>{
        game.updateState(0);
        player.updateplayerCount(0);
        var p = database.ref('allPlayer')
        p.remove();
    })
  }
  check(){
    var rockButton = createButton("ROCK")
    rockButton.position(displayWidth / 2 - 250, displayHeight/2 + 100)
    var paperButton = createButton("PAPER")
    paperButton.position(displayWidth / 2 - 150, displayHeight/2 + 100)
    var scissorButton = createButton("SCISSOR")
    scissorButton.position(displayWidth / 2 - 50, displayHeight/2 + 100)
    rockButton.mousePressed(()=>{
      var object = "rock";
      player.Image = loadImage("images/rock.png")
      paperButton.hide();
      scissorButton.hide();
      return object;
    })
    paperButton.mousePressed(()=>{
      console.log("hi")
     var object = "paper";
     console.log(object)
     player.Image = loadImage("images/paper.png")
     rockButton.hide();
     scissorButton.hide();
     return object;
   })
   scissorButton.mousePressed(()=>{
     var object = "scissor";
     player.Image = loadImage("images/scissor.png")
     paperButton.hide();
     rockButton.hide();
     return object;
   })
  }
}