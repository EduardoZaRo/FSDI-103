document.write(`
    <h1>Table 2</h1>
    <p>2 X 0 = 0</p>
    <p>2 X 1 = 2</p>
    <p>2 X 2 = 4</p>
    <p>2 X 3 = 6</p>
    <p>2 X 4 = 8</p>
    <p>2 X 5 = 10</p>
    <p>2 X 6 = 12</p>
    <p>2 X 7 = 14</p>
    <p>2 X 8 = 16</p>
    <p>2 X 9 = 18</p>
    <p>2 X 10 = 20</p>
    <hr>
`);
for(let i = 1; i < 4; i++){
    document.write(`<p>Is my for working></p>`);
}
document.write(`<hr>`);
for(let i = 1; i <= 10; i++){
    document.write(`<p>${i}</p>`);
}
document.write(`<hr>`);
for(let i = 2; i <= 21; i+=2){
    document.write(`<p>${i}</p>`);
}
document.write(`<hr>`);
const base = 2;
let result = 0;
document.write("<h1>Activities with for: Table 2</h1>")
for(let i = 1; i <= 10; i++){
    result = base*i;
    document.write(`<p>${base} X ${i} = ${result}</p>`);
}
