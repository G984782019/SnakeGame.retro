let ncmb = new NCMB(APPLICATION_KEY, CLIENT_KEY);
ranking.style.display = "none";

function rank(){
  main.style.display = "none"

  ranking.style.display = "block";
  checkRanking();

}

function toMain() {
  main.style.display = "block"

  ranking.style.display = "none";
}

function checkRanking() {

  let highScore = ncmb.DataStore("SnakeGame");

  highScore.order("score",true).limit(5)
  .fetchAll()

  .then(function(results){

    console.log("検索に成功しました。");

    setData(results);
  })
  .catch(function(error){

    console.log("検索に失敗しました。エラー:" +error);
  });

}


function setData(scoreData) {
  let table = document.getElementById("rankingTable");

    for(let i=0; i<scoreData.length; i++){
    let name = table.rows[i].cells[1];
    name.innerHTML = scoreData[i].name;
  }

    for(let i=0; i<scoreData.length; i++){
    let name = table.rows[i].cells[2];
    name.innerHTML = "SCORE " + scoreData[i].score;
  }
}

function saveScore (name, score) {
  let SnakeGame = ncmb.DataStore("SnakeGame");
  const DBName = "SnakeGame"

  let test = new SnakeGame();
  let key = "name";
  test.set(key,name);

  let key2 = "score";
  test.set(key2,score);

  test.save()

  .then(function (){
    console.log("保存に成功しました。");
  })
  .catch(function (error){
    console.log("保存に失敗しました。エラー:" + error);
  });
}

function imputName(count){
  let name = window.prompt("Please enter your name", "");
  if (name == null || name == "") {
  } else {
    saveScore(name, score);
  }
}
