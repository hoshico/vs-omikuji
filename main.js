const btn = document.getElementById("btn");
btn.addEventListener('click',function() {

      let scores = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2];
      const random_1 = Math.floor(Math.random() * 21);
      const random_2 = Math.floor(Math.random() * 21);
      const random_3 = Math.floor(Math.random() * 21);
      const random_4 = Math.floor(Math.random() * 21);
      const random_5 = Math.floor(Math.random() * 21);
      const random_6 = Math.floor(Math.random() * 21);
      const random_7 = Math.floor(Math.random() * 21);
      const random_8 = Math.floor(Math.random() * 21);
      const random_9 = Math.floor(Math.random() * 21);
      const score_1 = scores[random_1]; 
      const score_2 = scores[random_2]; 
      const score_3 = scores[random_3]; 
      const score_4 = scores[random_4]; 
      const score_5 = scores[random_5]; 
      const score_6 = scores[random_6]; 
      const score_7 = scores[random_7]; 
      const score_8 = scores[random_8]; 
      const score_9 = scores[random_9]; 

      let cpu_scores = [1, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 1, 1, 2, 2]; 
      const random_1_r = Math.floor(Math.random() * 21);
      const random_2_r = Math.floor(Math.random() * 21);
      const random_3_r = Math.floor(Math.random() * 21);
      const random_4_r = Math.floor(Math.random() * 21);
      const random_5_r = Math.floor(Math.random() * 21);
      const random_6_r = Math.floor(Math.random() * 21);
      const random_7_r = Math.floor(Math.random() * 21);
      const random_8_r = Math.floor(Math.random() * 21);
      const random_9_r = Math.floor(Math.random() * 21);
      const cpu_score_1 = cpu_scores[random_1_r]; 
      const cpu_score_2 = cpu_scores[random_2_r]; 
      const cpu_score_3 = cpu_scores[random_3_r]; 
      const cpu_score_4 = cpu_scores[random_4_r]; 
      const cpu_score_5 = cpu_scores[random_5_r]; 
      const cpu_score_6 = cpu_scores[random_6_r]; 
      const cpu_score_7 = cpu_scores[random_7_r]; 
      const cpu_score_8 = cpu_scores[random_8_r]; 
      const cpu_score_9 = cpu_scores[random_9_r]; 

      setInterval(function(){
          document.getElementById("1_inning").innerHTML = score_1;
        }, 100);
      setInterval(function(){
          document.getElementById("1_inning_r").innerHTML = cpu_score_1;
        }, 220);
      setInterval(function(){
          document.getElementById("2_inning").innerHTML = score_2;
        }, 340);
      setInterval(function(){
          document.getElementById("2_inning_r").innerHTML = cpu_score_2;
        }, 460);
      setInterval(function(){
          document.getElementById("3_inning").innerHTML = score_3;
        }, 580);
      setInterval(function(){
          document.getElementById("3_inning_r").innerHTML = cpu_score_3;
        }, 700);
      setInterval(function(){
          document.getElementById("4_inning").innerHTML = score_4;
        }, 820);
      setInterval(function(){
          document.getElementById("4_inning_r").innerHTML = cpu_score_4;
        }, 940);
      setInterval(function(){
          document.getElementById("5_inning").innerHTML = score_5;
        }, 1060);
      setInterval(function(){
          document.getElementById("5_inning_r").innerHTML = cpu_score_5;
        }, 1180);
      setInterval(function(){
          document.getElementById("6_inning").innerHTML = score_6;
        }, 1300);
      setInterval(function(){
          document.getElementById("6_inning_r").innerHTML = cpu_score_6;
        }, 1420);
      setInterval(function(){
          document.getElementById("7_inning").innerHTML = score_7;
        }, 1540);
      setInterval(function(){
          document.getElementById("7_inning_r").innerHTML = cpu_score_7;
        }, 1660);
      setInterval(function(){
          document.getElementById("8_inning").innerHTML = score_8;
        }, 1780);
      setInterval(function(){
          document.getElementById("8_inning_r").innerHTML = cpu_score_8;
        }, 1900);
      setInterval(function(){
          document.getElementById("9_inning").innerHTML = score_9;
        }, 2020);
      my_scores = score_1 + score_2 + score_3 + score_4 + score_5 + score_6 + score_7 + score_8 + score_9
      cpu_score_1_8 = cpu_score_1 + cpu_score_2 + cpu_score_3 + cpu_score_4 + cpu_score_5 + cpu_score_6 + cpu_score_7 + cpu_score_8
      setInterval(function(){
         if(my_scores < cpu_score_1_8){            
            document.getElementById("9_inning_r").innerHTML = "X";  
         } else { 
            document.getElementById("9_inning_r").innerHTML = cpu_score_9;
         }
      }, 2140);

      setInterval(function(){
        cpu_scores = cpu_score_1_8 + cpu_score_9
        document.getElementById("my_result").innerHTML = my_scores;
        
        document.getElementById("var").innerHTML = "-";

        if(my_scores > cpu_scores){
          document.getElementById("win_or_lose").innerHTML = "勝利";
          document.getElementById("cpu_result").innerHTML = cpu_scores;
        } else if (my_scores === cpu_scores){
          document.getElementById("win_or_lose").innerHTML = "引き分け";
          document.getElementById("cpu_result").innerHTML = cpu_scores;
        } else {
          document.getElementById("win_or_lose").innerHTML = "敗北";
          document.getElementById("cpu_result").innerHTML = cpu_score_1_8
        }
      }, 2145);

      
})