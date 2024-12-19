
// function butotn(){
//     const audio = new Audio("My Song (mp3cut.net) (0).mp3");
//     audio.play();
// }

// let button = document.getElementById('playButton0');
// button.addEventListener('click', butotn);


// function music(number){
for(const number = 0; number < 5; number++){
    const fileName = `My Song (${number}).mp3`;

    const button = document.getElementById('playButton${number}');
    button.addEventListener('click', () =>{
    const audio = new Audio(fileName);
    audio.play();
    });
}

// for(let i=0; i<5; i++){
//     music(${i});
// }

// music(0);

//csv読み込み
// CSV読み込みとパース処理
let csvArray = [];
let csv = new XMLHttpRequest();
csv.open("GET", "Theory.csv", false);

try {
    csv.send(null);
    let lines = csv.responseText.split(/\r\n|\n/);

    // CSVをオブジェクト配列に変換
    const headers = lines[0].split(",");
    for (let i = 1; i < lines.length; i++) {
        let cells = lines[i].split(",");
        if (cells.length === headers.length) {
            let rowObj = {};
            headers.forEach((header, index) => {
                rowObj[header.trim()] = cells[index].trim();
            });
            csvArray.push(rowObj);
        }
    }
} catch (err) {
    console.error("CSVファイルの読み込みに失敗しました:", err);
}

// 検索処理
const inputField = document.getElementById("inputCode");
const searchButton = document.getElementById("Theory");
const result = document.getElementById("result");

searchButton.addEventListener("click", () => {
    const inputValue = inputField.value.trim();
    const match = csvArray.find(row => row.Input === inputValue);

    if (match) {
        result.textContent = `Theory: ${match.Theory}`;
    } else {
        result.textContent = "一致するデータが見つかりません。";
    }
});
