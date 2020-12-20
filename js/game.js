class Game 
{
    constructor(){

    }
    readState(){
        var gameStatevalue = database.ref('gameState')
        gameStatevalue.on("value",function(data){
            gameState = data.val();
        })
    }
    updateState(a){
        database.ref('/').update({
            'gameState': a
        })
    }
     startGame(){
     if (gameState == 0)
      {
        player =new Player();
        form = new Form();
        form.display();

      }

      player1 = createSprite(displayWidth - 1180,200,50,50)
      player2 = createSprite(displayWidth - 280,200,50,50)
      
    }
    playGame(){
        form.hideForm();
        Player.getallPlayer();
    if (player.object != undefined){
       for (var p in allPlayers) 
       {
         var abc = allPlayers[p].choosenObject
         console.log(abc)
         playerMove.push(abc)
       }
    }
        console.log(playerMove)
       if (player.index == 1){
           player.Rock.position(displayWidth - 1300,300)
           player.Paper.position(displayWidth - 1200,325)
           player.Scissor.position(displayWidth - 1100,300)
       }

       if (player.index == 2){
        player.Rock.position(displayWidth - 400,300)
        player.Paper.position(displayWidth - 300,325)
        player.Scissor.position(displayWidth - 200,300)
    }
      drawSprites();
      player.Rock.mousePressed(()=>{
        var object = "rock";
        player.object = object;
        player.updateName();
      })

      player.Paper.mousePressed(()=>{
        var object = "paper";
        player.object = object;
        player.updateName();
      })

      player.Scissor.mousePressed(()=>{
        var object = "scissor";
        player.object = object;
        player.updateName();
      })
    }
}