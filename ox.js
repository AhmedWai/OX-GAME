let title= document.querySelector(".title")
let turn = "x"
let squase = [];

function end(num1,num2,num3){
    
    title.innerHTML = `${squase[1] }winner`
    document.getElementById("item" + num1).style.background="#000"
    document.getElementById("item" + num2).style.background="#000"
    document.getElementById("item" + num3).style.background="#000"

    setInterval(function() {title.innerHTML += `.`},1000 )
    setTimeout(function(){location.reload()} , 4000)


}

function winner(){
    for(let i=1; i<10; i++ ){
       squase [i]= document.getElementById("item" + i).innerHTML
    }
    if(squase[1]==squase[2]&&squase[2]==squase[3] && squase[1]!= ""){

        end(1,2,3)
    }

    if(squase[4]==squase[5]&&squase[5]==squase[6] && squase[5]!= ""){
      
        end(4,5,6)


    }
    if(squase[7]==squase[8]&&squase[8]==squase[9] && squase[8]!= ""){
       
        end(7,8,9)

    }


    if(squase[1]==squase[4]&&squase[4]==squase[7] && squase[1]!= ""){
     end(1,4,7)

    }


    if(squase[2]==squase[5]&&squase[5]==squase[8] && squase[5]!= ""){
    
        end(2,5,8)


    }

    if(squase[3]==squase[6]&&squase[6]==squase[9] && squase[6]!= ""){
     
        end(3,6,9)

    }

    if(squase[1]==squase[5]&&squase[5]==squase[9] && squase[5]!= ""){
    
        end(1,5,9)

    }

    if(squase[3]==squase[5]&&squase[5]==squase[7] && squase[5]!= ""){
    
        end(3,5,7)

    }




}



function game (id){
    let elment = document.getElementById(id)
    if(turn=== "x" && elment.innerHTML== ""){
        elment.innerHTML = "x"
        turn = "o";
        title.innerHTML = "o"

      
    }  else if(turn=== "o" &&  elment.innerHTML== ""){
        elment.innerHTML = "o"
        turn = "x";
        title.innerHTML = "x"

    }
    winner()
    
}