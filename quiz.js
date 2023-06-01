document.getElementById("btn").addEventListener("click", btnclicked);

//function
function btnclicked() {
  let score = 0;

  // Input
  let quiz1 = document.getElementById("q1").value.toLowerCase();

  let quiz2 = document.getElementById("q2").value.toLowerCase();

  let quiz3 = +document.getElementById("q3").value;

  let quiz4 = +document.getElementById("q4").value;

  let quiz5 = document.getElementById("q5").value;
  // Process

  if (quiz1 === "crybaby") {
    score++;
  } else {
    quiz1.innerHTML = `  her new form is also the name of her first single and album!`;
  }
  if (quiz2 === "k-12") {
    score++;
  } else {
    score + 0;
  }
  if (quiz3 === 4) {
    score++;
  } else {
    score + 0;
  }
  if (quiz4 === 3) {
    score++;
  } else {
    score + 0;
  }
  if (quiz5 == "mm3") {
    score++;
  } else {
    score + 0;
  }
  if (quiz5 === "portals") {
    score++;
  } else {
    score + 0;
  }

  let final = score * 20;
  //Output

  if (score <= 3) {
    document.getElementById(
      "result"
    ).innerHTML = ` your results are ${score}/5 (${final}%). nice try! dont forget to read the about page `;
  } else {
    document.getElementById(
      "result"
    ).innerHTML = ` your results are ${score}/5 (${final}%!), nice job!`;

    console.log(score);
  }
}
