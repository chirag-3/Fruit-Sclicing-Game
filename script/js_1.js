$(function(){
  var life = 4;
  var score = 0;
  var fx;
  var fy;
  var nf = 0;
  var cf=0;
  var r = null;
  $("#start-reset").button();
  $("#start-reset").text("START");

  $("#start-reset").click(function(){
    s = $(this).text();
    if(s=="RESET")
      location.reload();  
    $(this).text("RESET");
    begin();
  });

  function endGame(){
   
    clearInterval(r);
    $("#play-area").html(`
       <div id="final-score">
        GAME OVER<br>    
       SCORE : `+score+`</div>`
    
    );
  }

  $("#img1").mouseover(function(){
    clearInterval(r);
    life++;
    score++;
    $("#score span").text(score);
    $("#img1").hide("explode",500);
    setTimeout(function(){begin();},500);
  });

  function begin(){
    var move = 1;
    if(score<=10)
      move = move + 5;
    else if(score<=20)
      move = move + 7;
    else if(score<=40)
      move = move + 12;
    else if(score<=50)
      move = move + 15;
    else if(score<=60)
      move = move + 17;
    else if(score<=70)
      move = move + 19;
    else if(score<=80)
      move = move + 23;
    else
      move = move + 27;  
    

    fy =  $("#play-area").height()+10;
    r = setInterval(function(){
      if(fy>$("#play-area").height())
      {
        // window.console.log("once look here \n");
        $("#l"+life).removeClass("ui-icon ui-icon-heart");
        life--;
        if(life==0)
        {
          endGame();
        }
        fx =  Math.random()*($("#play-area").width()-85);
        // window.console.log(" new x coordinate generated "+fx);
        if(fx<0)
          fx = 0;
        fy = -62;
        $("#img1").attr({"src":"fruit/fruit"+(Math.floor(Math.random()*7)+1)+".png"});       
        $("#img1").css({"left":fx,"top":fy});
        
      }
      $("#img1").show();
      fy = fy+move;   
      if(score>40)
          fx =  Math.random()*($("#play-area").width()-85);
      $("#img1").css({"left":fx,"top":fy});  

  },50)
  }

 
});