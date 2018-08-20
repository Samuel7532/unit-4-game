<script>
            var jewel1 = 1;
            var jewel2 = 5;
            var jewel3 = 10;
            var jewel4 = 25;
            var wins1 = 0;
            var loss1 = 0;
            var curentNum = Math.floor(Math.random() * 125) + 1;
            console.log(curentNum);
            var goalNum = curentNum + Math.floor(Math.random() * 125) + 1;
            console.log(goalNum);
    
    
            function resetjewels() {
                // var jewel1 = 1;
                // var jewel2 = 5;
                // var jewel3 = 10;
                // var jewel4 = 25;
                var currentNum = Math.floor(Math.random() * 125) + 1;
                var goalNum = curentNum + Math.floor(Math.random() * 125) + 1;
            console.log(goalNum);
            }
    
    
            var blueJewel = document.getElementById("blueJewel");
            var redjewel = document.getElementById("redJewel");
            var purpleJewel = document.getElementById("purpleJewel");
            var greenJewel = document.getElementById("greenJewel");
            var displayNum = document.getElementById("displayNum");
            var win = document.getElementById("wins");
            var loss = document.getElementById("loss");
            // var goalNum = document.getElementById('winNum');
            displayNum.textContent = curentNum;
            wins.textContent = wins1;
            loss.textContent = loss1;
            winNum.textContent = goalNum;


            $("#blueJewel").on("click", function() {
                curentNum = curentNum + jewel1;
                displayNum.textContent = curentNum;

            if (curentNum === goalNum){
                alert("win");
                wins1 ++;
            }
            if (curentNum > goalNum){
                alert("loss");
                loss1 ++;
            }   
                console.log(curentNum);
                console.log(goalNum);
                console.log(wins1);
                console.log(loss1);
            
            });
            
    
            $("#redJewel").on("click", function() {
                curentNum = curentNum + jewel2;
                displayNum.textContent = curentNum
                console.log(curentNum);

            if (curentNum === goalNum){
                alert("win");
                wins1 ++;
            }
            if (curentNum > goalNum){
                alert("loss");
                loss1 ++;
            }   
                console.log(curentNum);
                console.log(goalNum);
                console.log(wins1);
                console.log(loss1);

            });
    
            $("#purpleJewel").on("click", function() {
                curentNum = curentNum + jewel3;
                displayNum.textContent = curentNum
                console.log(curentNum);

            if (curentNum === goalNum){
                alert("win");
                wins1 ++;
            }
            if (curentNum > goalNum){
                alert("loss");
                loss1 ++;
            }   
                console.log(curentNum);
                console.log(goalNum);
                console.log(wins1);
                console.log(loss1);
            });
    
            $("#greenJewel").on("click", function() {
                curentNum = curentNum + jewel4;
                displayNum.textContent = curentNum
                console.log(curentNum);

            if (curentNum === goalNum){
                alert("win");
                wins1 ++;
            }
            if (curentNum > goalNum){
                alert("loss");
                loss1 ++;
            }   
                console.log(curentNum);
                console.log(goalNum);
                console.log(wins1);
                console.log(loss1);
            });

            
            
            if (curentNum == goalNum){
                alert("win"),wins1 +=1;
            }
            if (displayNum > 125){
                alert("loss"),loss1 +=1;
            }
            
        </script>
