// 25 line of code
document.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        myFunction();

    }
})
function myFunction() {
    let input = (document.getElementById('input').value);
    let result = "";
     let Series = 0;
    for(i=1; i<=input; i+=2){
     Series = Series + i + "<br>";
     console.log(Series, "main series hon");
     console.log(i, "main i hon");
    }
    
    result = `You Entered ${input} & Your Series Upto ${input} is:<br>${Series}`
    
    document.getElementById('output').style.display = "flex";
    document.getElementById('output').innerHTML = result;
}