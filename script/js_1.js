$(function(){
  var life = 4;
  var score = 0;
  $("#start-reset").button();
  $("#start-reset").text("START");

  $("#start-reset").click(function(){
    s = $(this).text();
    if(s=="RESET" || life==0)
      location.reload();
    $("#final-score").hide();  
    $("#final-score").remove();  
    var fx = Math.floor(Math.random()*$("#play-area").width()-85);
    $(this).text("RESET");
    if(fx<0)
      fx = 0;
    var fy =  $("#play-area").height()+10;  
    var r = setInterval(function(){
      if(fy>$("#play-area").height())
      {
        window.console.log("once look here \n");
        $("#l"+life).removeClass("ui-icon ui-icon-heart");
        life--;
        if(life==0)
        {
          endGame();
        }
        fx =  Math.random()*($("#play-area").width()-85);
        // fx=0;
        if(fx<0)
          fx = 0;
        fy = -62;
        // fy = 0;
        $("#img1").attr({"src":"fruit/fruit"+(Math.floor(Math.random()*7)+1)+".png"});
        $("#img1").css({"left":fx,"top":fy});
        // window.console.log("calling show"+$("#img1").show());
        // window.console.log("deciding ("+fx+","+fy+")");
      }
      $("#img1").show();
      fy = fy+10;
      // window.console.log("moving ("+fx+","+fy+")");
      $("img").css("top",fy);  
  },50)
  $("#img1").mouseover(function(){
    score++;
    $("#score span").text(score);
    $("#img1").hide("explode",50);
    fy = $("#play-area").height()+10;
    life++;
  });
  function endGame(){
    clearInterval(r);
    $("#play-area").html(`
       <div id="final-score">
        GAME OVER<br>    
       SCORE : `+score+`</div>`
    
    );
    $("#start-reset").text("START");
  }


  });


 
});