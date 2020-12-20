class Player {
    constructor(){
     this.index = null;
     this.name = null;
     this.Image = null;
     this.object = null;
     this.Rock = createButton("ROCK")
     this.Paper = createButton("PAPER")
     this.Scissor = createButton("SCISSOR")
}
    readCount(){
        var playerCountvalue = database.ref('playerCount')
        playerCountvalue.on("value",function(data){
            playerCount = data.val();
        })
    }
    updateplayerCount(a){
        database.ref('/').update({
            'playerCount': a
        })
    }
    updateName(){
        var PlayerNumber = "allPlayer/Player" + this.index;
        database.ref(PlayerNumber).set({
           'name' : this.name,
           'choosenObject': this.object
        })  
    }
    static getallPlayer(){
       var fetchallPlayers = database.ref('allPlayer')
       fetchallPlayers.on("value",(data)=>{
           allPlayers = data.val();
       })
    }
}