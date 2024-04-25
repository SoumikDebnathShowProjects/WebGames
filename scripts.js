var n1=Math.floor((Math.random()*6)+1);
var n2=Math.floor((Math.random()*6)+1);
document.getElementById('player1').src=`./Assets/dice${n1}.png`;
document.getElementById('player2').src=`./Assets/dice${n2}.png`;
if(n1>n2){
    document.querySelector('h1').textContent="🚩 Play 1 Wins!";
}
else if(n1===n2){
    document.querySelector('h1').textContent="Draw";

}
else{
    document.querySelector('h1').textContent="Play 2 Wins!🚩 ";
    
}
