
//array for the suits and cards
let values=["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
let suits=["♥","♦","♣","♠"]

//vars for making the cards
let cardCounter=0;
let suitCounter=1;

//function to start the game
function start(){
    genCard();
}

//function to create all the cards on screen
function genCard(){

    //loops 29 times to create the 29 cards of a solitaire game
    for ( let i = 0; i < 29; i++ ) {
        

        //counts the card
        cardCounter++;

        //picks a random suit and face
        let value = Math.floor(Math.random()*13);
        let suit = Math.floor(Math.random()*4);
        
        //assigns each set of cards to a stack class for style reasons (UNFINISHED)
        let card = document.createElement("div");
        if(cardCounter<2){
            card.setAttribute("class","stack1")
        }
        if(cardCounter<4){
            card.setAttribute("class","stack2")
        }
        if(cardCounter<7){
            card.setAttribute("class","stack3")
        }
        if(cardCounter<11){
            card.setAttribute("class","stack4")
        }
        if(cardCounter<16){
            card.setAttribute("class","stack5")
        }
        if(cardCounter<22){
            card.setAttribute("class","stack6")
        }
        if(cardCounter<29){
            card.setAttribute("class","stack7")
        }
        //sets id to be c"number of card"
        card.setAttribute("id","c"+i)

        //sets suit and face
        card.setAttribute("suit",suits[suit])
        card.setAttribute("value",values[value])

        //makes it so only the bottom card of each stack shows
        if(cardCounter==1||cardCounter==3||cardCounter==6||cardCounter==10||cardCounter==15||cardCounter==21||cardCounter==29){
            card.setAttribute("show","true")
        }
        else{
            card.setAttribute("show","fasle")
        }

        //(UNFINISHED) attempt at making the cards appear in columns
        card.style.backgroundColor = "rgb(173, 173, 173)"
        card.style.width = "150px"
        card.style.height = "225px"
        card.style.fontSize = "100px"
        card.style.margin = "15px"
        card.style.display = "flex"
        card.style.flexDirection = "column"
        card.style.textAlign = "center"

        //adds the card to the doc and sets the inner text on if showing or not
        document.body.appendChild(card);
        let cardt=document.getElementById("c"+i);
        let flip=cardt.getAttribute("show")
        console.log(flip);
        if (flip=="true"){
            cardt.innerHTML=suits[suit]+values[value]
        }
        else{
            cardt.innerHTML="?"
        }
    } 
}
