console.log('File Connected');


document.getElementById('player').addEventListener('click',function(event){
    console.log(event);
})

function getPlayerBudget(){
    const perPlayer = document.getElementById('per-player');
    const playerExpenses = document.getElementById('player-expenses');


    const perPlayerValue = parseFloat(perPlayer.value);
    
    const perPlayerCost = 5*perPlayerValue;
    playerExpenses.innerText = perPlayerCost;

    return perPlayerCost;
}

function getTotalBudget (){

    const perPlayerCost = getPlayerBudget();
    const manager = document.getElementById('manager');
    const coach = document.getElementById('coach');
    const totalBudget = document.getElementById('total');


    const managerValue = parseFloat(manager.value);
    const coachValue = parseFloat(coach.value);

    const total = perPlayerCost+managerValue+coachValue;

    totalBudget.innerText = total;
}



document.getElementById('calculate').addEventListener('click',function(){
    getPlayerBudget()
})


document.getElementById('subtotal').addEventListener('click',function(){
    getTotalBudget();
})

document.getElementById('btn-1').addEventListener('click',function(){
   const rightArea = document.getElementById('right');

   const heading = document.getElementById('heading');



  const b = document.createElement('div');
  let a = document.createAttribute('div');

  const c = document.createElement('p');

  a.value = 'hi'


  console.log(a);
  console.log(c);

  b.innerText='Hello'

    rightArea.innerHTML =`<p>Hello this is bishal </p>`

    heading.innerHTML = `<div><h1>Hello </h1> </div>`

   
})

