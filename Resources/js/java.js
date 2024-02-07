        var plusSign1 = document.querySelector("#q1");
        var plusSign2 = document.querySelector("#q2");
        var plusSign3 = document.querySelector("#q3");
        var plusSign4 = document.querySelector("#q4");
        var minusSign1 = document.querySelector("#a1");
        var minusSign2 = document.querySelector("#a2");
        var minusSign3 = document.querySelector("#a3");
        var minusSign4 = document.querySelector("#a4");
        var answer1 = document.querySelector("#answer1");
        var answer2 = document.querySelector("#answer2");
        var answer3 = document.querySelector("#answer3");
        var answer4 = document.querySelector("#answer4");



        plusSign1.addEventListener("click", showAnswer1);

        function showAnswer1() {
            answer1.classList.remove("hide");
            minusSign1.style.opacity = 1;
            plusSign1.style.opacity = 0;
        }

        plusSign2.addEventListener("click", showAnswer2);

        function showAnswer2() {
            answer2.classList.remove("hide");
            minusSign2.style.opacity = 1;
            plusSign2.style.opacity = 0;
        }

        plusSign3.addEventListener("click", showAnswer3);

        function showAnswer3() {
            answer3.classList.remove("hide");
            minusSign3.style.opacity = 1;
            plusSign3.style.opacity = 0;
        }

        plusSign4.addEventListener("click", showAnswer4);

        function showAnswer4() {
            answer4.classList.remove("hide");
            minusSign4.style.opacity = 1;
            plusSign4.style.opacity = 0;
        }



        minusSign1.addEventListener("click", removeAnswer1);

        function removeAnswer1() {
            answer1.classList.add("hide");
            minusSign1.style.opacity = 0;
            plusSign1.style.opacity = 1;
        }

        minusSign2.addEventListener("click", removeAnswer2);

        function removeAnswer2() {
            answer2.classList.add("hide");
            minusSign2.style.opacity = 0;
            plusSign2.style.opacity = 1;
        }

        minusSign3.addEventListener("click", removeAnswer3);

        function removeAnswer3() {
            answer3.classList.add("hide");
            minusSign3.style.opacity = 0;
            plusSign3.style.opacity = 1;
        }
        minusSign4.addEventListener("click", removeAnswer4);

        function removeAnswer4() {
            answer4.classList.add("hide");
            minusSign4.style.opacity = 0;
            plusSign4.style.opacity = 1;
        }
