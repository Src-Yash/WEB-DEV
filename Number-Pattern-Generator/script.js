function generatePattern(){

    let n = parseInt(document.getElementById("number").value);
    if(isNaN(n) || n<=0){
        alert("Please enter a valid positive number.");
        return;

    }

    let pattern="";

    for(let i=1;i<=n;i++){
        for(let j=1;j<=i;j++){
            pattern += j;
        }

        pattern += "\n";

    }
    document.getElementById("pattern").textContent = pattern;

}