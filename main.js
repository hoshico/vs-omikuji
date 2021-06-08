const btn = document.getElementById("btn");
btn.addEventListener('click',function() {
      results = [];
      for(let i = 0; i < 27; i++){
            const arry = ["安打", "アウト", "アウト", "ホームラン", "アウト", "アウト", "２塁打", "アウト", "アウト"]
            const random = Math.floor(Math.random() * arry.length);
            let result = arry[random];
            
            results.push(result);
      
      }
      document.getElementById("result").innerHTML = results;
})