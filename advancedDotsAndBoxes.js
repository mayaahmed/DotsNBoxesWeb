//Advanced Game script

// m is number of rows and  n is number of columns

var m= 6; 
var n = 5;
var i=0; var j=0;
var computer =0;
var computerScore=0;
var playerScore=0;
var middleScore=0;

var topArray = new Array(m+1);
for(i=0;i<m+1;i++)
  topArray[i]=new Array(n);

for(i=0;i<m+1;i++){
  for(j=0;j<n; j++){
  topArray[i][j]=document.getElementById('topcell'+i+j);
  topArray[i][j].disabled=false;
  }
}


var leftArray = new Array(m);
for(i=0;i<m;i++)
  leftArray[i]=new Array(n+1);

for(i=0;i<m;i++){
  for(j=0;j<n+1; j++){
  leftArray[i][j]=document.getElementById('leftcell'+i+j);
  leftArray[i][j].disabled=false;
  }}


var middleArray = new Array(m);
for(i=0;i<m;i++)
  middleArray[i]=new Array(n);

for(i=0;i<m;i++){
  for(j=0;j<n; j++){
  middleArray[i][j]=document.getElementById('middlecell'+i+j);
  middleArray[i][j].value=0;}
}

function updateColor(){
   color="#99FF33"; 
   var i=0; var j=0;
   for(i=0;i<m+1;i++){
     for(j=0;j<n;j++){
       if(topArray[i][j].style.backgroundColor=="red") 
         topArray[i][j].style.backgroundColor=color;
    }
  }        

   for(i=0;i<m;i++){
     for(j=0;j<n+1;j++){
       if(leftArray[i][j].style.backgroundColor=="red") 
         leftArray[i][j].style.backgroundColor=color;
    }
  }        
 }//end of fn


function changeColor(s,r,c,color){
  updateColor();
  if(s=='top'){
      topArray[r][c].style.backgroundColor=color;
      topArray[r][c].disabled=true;
  }  
  if(s=='left'){
    leftArray[r][c].style.backgroundColor=color; 
    leftArray[r][c].disabled=true;
   }
}//end of fn

function run(s,r,c){
  var check=0;
  
  if(s=='top'){
    if(topArray[r][c].disabled==false){
      changeColor(s,r,c,"skyblue");
      check =  checkMiddleOn(s,r,c,"skyblue", "U")
        if(check==0)  computerTurn();
    }
  }

  if(s=='left'){
    if(leftArray[r][c].disabled==false){
      changeColor(s,r,c,"skyblue");
      check = checkMiddleOn(s,r,c,"skyblue","U")
        if(check==0) computerTurn();
    }  
  }
} // end of function run




function middleOn(r,c,color,text){
 
     middleArray[r][c].innerHTML=text;
     middleArray[r][c].style.color= color;
     middleScore=middleScore+1;
     if(text=='C') computerScore=computerScore+1;
     else if(text=='U') playerScore=playerScore+1;
     checkresult(); 
}


function checkMiddleOn(s,r,c,color,text){
  var check =0;
  if(s=='top'){
      if(r<m && topArray[r+1][c].disabled==true &&  leftArray[r][c].disabled==true && leftArray[r][c+1].disabled==true){
     check=1;
     middleOn(r,c,color,text);
      }
   
   if(r>0 && topArray[r-1][c].disabled==true &&  leftArray[r-1][c].disabled==true && leftArray[r-1][c+1].disabled==true){
     check=1;
     middleOn(r-1,c,color,text);
     }
}

if(s=='left'){

  if(c<n && topArray[r][c].disabled==true && topArray[r+1][c].disabled==true && leftArray[r][c+1].disabled==true){
    check=1;
    middleOn(r,c,color,text);
     }
  
  if(c>0 && topArray[r][c-1].disabled==true && topArray[r+1][c-1].disabled==true && leftArray[r][c-1].disabled==true){
    check=1;
    middleOn(r,c-1,color,text);
    
  }
}
return check;
}//end of fn


function computerTurn(){
  var row = Math.random(); 
  var col = Math.random();
  var i=0; var j=0; 
  var r=0;  var c=0; var s; var check=0;
  var decide=0; color="red";
  
   while(decide==0 && i<m){
     while(j<n){
       if(topArray[i][j].disabled==false && leftArray[i][j].disabled==true && leftArray[i][j+1].disabled==true 
          && topArray[i+1][j].disabled==true)
         {r=i; c=j; s="top"; decide=1;}

       else if(topArray[i][j].disabled==true && leftArray[i][j].disabled==false && leftArray[i][j+1].disabled==true 
               && topArray[i+1][j].disabled==true)
         {r=i; c=j; s="left"; decide=1;}

       else if(topArray[i][j].disabled==true && leftArray[i][j].disabled==true && leftArray[i][j+1].disabled==false 
               && topArray[i+1][j].disabled==true)
         {r=i; c=j+1; s="left"; decide=1;}

       else if(topArray[i][j].disabled==true && leftArray[i][j].disabled==true && leftArray[i][j+1].disabled==true 
               && topArray[i+1][j].disabled==false)
         {r=i+1; c=j; s="top"; decide=1;}

      j=j+1;
    }
    i=i+1; j=0;
   }
  
 


   i=1; j=1;
while(decide==0 && i<m){
     while(j<n){


        if(topArray[i][j].disabled==false && leftArray[i][j].disabled==false && leftArray[i][j+1].disabled==false 
          && topArray[i+1][j].disabled==false  && leftArray[i-1][j].disabled==false 
&& leftArray[i-1][j+1].disabled==false   && topArray[i-1][j].disabled==false  )
         {r=i; c=j; s="top"; decide=1;}
       
       else if(topArray[i][j].disabled==false && leftArray[i][j].disabled==true && leftArray[i][j+1].disabled==false 
          && topArray[i+1][j].disabled==false  && leftArray[i-1][j].disabled==false 
&& leftArray[i-1][j+1].disabled==false   && topArray[i-1][j].disabled==false  )
         {r=i; c=j; s="top"; decide=1;}
  
else if(topArray[i][j].disabled==false && leftArray[i][j].disabled==false && leftArray[i][j+1].disabled==true 
          && topArray[i+1][j].disabled==false  && leftArray[i-1][j].disabled==false 
&& leftArray[i-1][j+1].disabled==false   && topArray[i-1][j].disabled==false  )
         {r=i; c=j; s="top"; decide=1;}

else if(topArray[i][j].disabled==false && leftArray[i][j].disabled==false && leftArray[i][j+1].disabled==false
          && topArray[i+1][j].disabled==true  && leftArray[i-1][j].disabled==false 
&& leftArray[i-1][j+1].disabled==false   && topArray[i-1][j].disabled==false  )
         {r=i; c=j; s="top"; decide=1;}
     
else if(topArray[i][j].disabled==false && leftArray[i][j].disabled==false && leftArray[i][j+1].disabled==false 
          && topArray[i+1][j].disabled==false  && leftArray[i-1][j].disabled==true 
&& leftArray[i-1][j+1].disabled==false   && topArray[i-1][j].disabled==false  )
         {r=i; c=j; s="top"; decide=1;}


else if(topArray[i][j].disabled==false && leftArray[i][j].disabled==false && leftArray[i][j+1].disabled==false 
          && topArray[i+1][j].disabled==false  && leftArray[i-1][j].disabled==false 
&& leftArray[i-1][j+1].disabled==true   && topArray[i-1][j].disabled==false  )
         {r=i; c=j; s="top"; decide=1;}

else if(topArray[i][j].disabled==false && leftArray[i][j].disabled==false && leftArray[i][j+1].disabled==false 
          && topArray[i+1][j].disabled==false  && leftArray[i-1][j].disabled==false 
&& leftArray[i-1][j+1].disabled==false   && topArray[i-1][j].disabled==true  )
         {r=i; c=j; s="top"; decide=1;}

else if(topArray[i][j].disabled==true && leftArray[i][j].disabled==false && leftArray[i][j+1].disabled==false 
          && topArray[i+1][j].disabled==false  && leftArray[i-1][j].disabled==false 
&& leftArray[i-1][j+1].disabled==false   && topArray[i-1][j].disabled==false  )
         {r=i; c=j; s="left"; decide=1;}





      j=j+1;
    }
    i=i+1; j=0;
 }
  

 i=0; j=0;
while(decide==0 && i<m){
     while(j<n){
       if(topArray[i][j].disabled==false && leftArray[i][j].disabled==false && leftArray[i][j+1].disabled==false 
          && topArray[i+1][j].disabled==false)
         {r=i; c=j; s="top"; decide=1;}
       
       else if(topArray[i][j].disabled==false && leftArray[i][j].disabled==true && leftArray[i][j+1].disabled==false 
          && topArray[i+1][j].disabled==false)
         {r=i; c=j; s="top"; decide=1;}
       
       else   if(topArray[i][j].disabled==false && leftArray[i][j].disabled==false && leftArray[i][j+1].disabled==true
          && topArray[i+1][j].disabled==false)
         {r=i; c=j; s="top"; decide=1;}

else if(topArray[i][j].disabled==false && leftArray[i][j].disabled==false && leftArray[i][j+1].disabled==false 
          && topArray[i+1][j].disabled==true)
         {r=i; c=j; s="top"; decide=1;}
       
else if(topArray[i][j].disabled==true && leftArray[i][j].disabled==false && leftArray[i][j+1].disabled==false 
          && topArray[i+1][j].disabled==false)
         {r=i; c=j; s="left"; decide=1;}
       
       
      j=j+1;
    }
    i=i+1; j=0;
 }
  


// random computer moves

  if(decide==0){
      row = Math.random(); 
      col = Math.random();
      if(row < 0.16) r=0; 
      else if(row < 0.32) r=1;  
      else if(row < 0.48) r=2;
      else if(row < 0.64) r=4;
      else if(row < 0.8) r=5;
      else r=6;
      if(col < 0.2) c=0;
      else if(col < 0.4) c=1; 
      else if(col < 0.6) c=2; 
      else if(col < 0.8) c=3; 
      else c=4;  

      if(r<6 && c<4){
        if(topArray[r][c].disabled==false)
        {s="top"; decide=1;}
        else if(leftArray[r][c].disabled==false)
         {var s="left"; decide=1;} 
       }
      if(r==6 && c<4){
        if(topArray[r][c].disabled==false)
         {var s="top"; decide=1;} 
      }
      if(r<6 && c==4){
        if(leftArray[r][c].disabled==false)
         {var s="left"; decide=1;} 
      }
  } 
 
    
  
  // fill first blank

  i=0; j=0;  

  while(decide==0 && i<m+1){
    
    while(decide==0 && j<n){
      if(topArray[i][j].disabled==false)
        {r=i; c=j; s="top"; decide=1;}
      j=j+1;
    }
    
    i=i+1; j=0;
  }        

  i=0; j=0;
  while(decide==0 && i<m){
    while(decide==0 && j<n+1){
      if(leftArray[i][j].disabled==false)
        {r=i; c=j; s="left"; decide=1;}
      
      j=j+1;
    }
    i=i+1; j=0;
  }       

  

 
  changeColor(s,r,c,color);
    check = checkMiddleOn(s,r,c,color,"C");
    if(check==1) computerTurn();
    
   
} //end of function


function checkresult(){
  if(middleScore==30){
    if(playerScore > computerScore){
         alert('Congratulations! You won.'+ '\n' +'Computer Score: '+computerScore +'\n'+ 'Player Score:' + playerScore);
         applaud(1);
    }
    else if(playerScore < computerScore){
         alert('Game Over! You lose.'+ '\n Computer Score: '+computerScore +'\n Player Score:' + playerScore);
         applaud(0);
    }
    else {
      alert('Game is a draw.'+ '\n Computer Score: '+computerScore +'\n Player Score:' + playerScore);
      applaud(1);
    }
  }
}


function applaud(n){
  if(n==1)
var audio = new Audio('applause.mp3');
  if(n==0)
var audio = new Audio('boo.mp3');
audio.play();
}
