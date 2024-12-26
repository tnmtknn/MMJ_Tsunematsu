//音ボタン
const buttonContainer = document.getElementById('Cbutton');
buttonContainer.addEventListener('click', (event) =>{
    const audio = new Audio(event.target.id);
    audio.play();
})

//csv読み込み
// CSV読み込みとパース処理

console.log("aiueo1");

let csvArray = [];
// async function readCSV() {
//     console.log("aiueo2");
//     let csv = await fetch("C:\Users\knntn\vsCode\metamoji\Theory.csv");
    
    

//     try {
//         console.log("aiueo3");
//         let lines = csv.response.text().split(/\r\n|\n/);
        

//         // CSVをオブジェクト配列に変換
//         const headers = lines[0].split(",");
//         console.log(headers);
//         for (let i = 1; i < lines.length; i++) {
//             let cells = lines[i].split(",");
//             if (cells.length === headers.length) {
//                 let rowObj = {};
//                 headers.forEach((header, index) => {
//                     rowObj[header.trim()] = cells[index];
//                 });
//                 csvArray.push(rowObj);
//             }
//         }

//     } catch (err) {
//         console.log("aiueo4");
//         console.error("CSVファイルの読み込みに失敗しました:", err);
//     }
// }


// readCSV()

// console.log("aiueo5");
// console.log("csvArray : ");
// console.log(csvArray);

const input = document.getElementById('upload-file');
const reader = new FileReader();
input.addEventListener('change', (e) => {
    const file = e.target.files[0];
    console.log(file);

    if(file.type == "text/csv"){
        console.log("aiueo2");

        reader.onload = () => {

            // CSVをオブジェクト配列に変換
            console.log("aiueo3");
            const csv = reader.result;
            console.log(csv);
            let lines = csv.split(/\r\n|\n/);
            console.log(lines);
            const headers = lines[0].split(",");
            console.log(headers);
            for (let i = 1; i < lines.length; i++) {
                let cells = lines[i].split(",");
                if (cells.length === headers.length) {
                    let rowObj = {};
                    headers.forEach((header, index) => {
                        rowObj[header.trim()] = cells[index];
                    });
                    csvArray.push(rowObj);
                }
            }
            console.log("csvArray : ");
            console.log(csvArray);
        }
        reader.readAsText(file);   
    }
});

// 検索処理
const inputField = document.getElementById("inputCode");
const searchButton = document.getElementById("theory");
const result = document.getElementById("result");

searchButton.addEventListener("click", () => {
    const inputValue = inputField.value;

    for(let i=0; i<csvArray.length; i++){
        // const match = csvArray.find(row => row.input === inputValue);
        if(row.input === inputValue){
            
        }
    }
    

    if (match) {
        result.textContent = `Theory: ${match.next}`;
    } else {
        result.textContent = "一致するデータが見つかりません。";
    }
});
