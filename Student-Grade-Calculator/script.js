function createInputs() {

    const subjects = document.getElementById("subjects").value;
    const marksInputs = document.getElementById("marksInputs");

    marksInputs.innerHTML = "";

    if(subjects <= 0){
        alert("Enter valid number of subjects.");
        return;
    }
    else if(subjects>5){
      alert("Enter only 5 subjects not more than that");
      return;
    }

    for(let i=1;i<=subjects;i++){
        marksInputs.innerHTML +=
        `<div class="subject">
            <label>Marks of Subject ${i}</label>
            <input type="number" id="mark${i}" min="0" max="100"
            placeholder="Enter marks (0-100)" required>
        </div>`;
    }

    document.getElementById("calculateBtn").style.display="block";
}

function calculateResult(){

    const subjects=parseInt(document.getElementById("subjects").value);
    let total=0;
    let pass=true;

    for(let i=1;i<=subjects;i++){
        let mark=parseFloat(document.getElementById(`mark${i}`).value);
        if(isNaN(mark) || mark<0 || mark>100){
            alert("Please enter valid marks between 0 and 100.");
            return;
        }

        if(mark<33){
            pass=false;
        }
        total+=mark;

    }

    let average=total/subjects;
    let grade="";
    if(average>=90)
        grade="A+";

    else if(average>=80)
        grade="A";

    else if(average>=70)
        grade="B";

    else if(average>=60)
        grade="C";

    else if(average>=50)
        grade="D";

    else
        grade="F";
      
    let result=pass ? "PASS " : "FAIL ";

    document.getElementById("result").innerHTML=`

        <h2>Result</h2>
        <p>Total Marks : <strong>${total}</strong></p>
        <p>Average : <strong>${average.toFixed(2)}</strong></p>
        <p>Grade : <strong>${grade}</strong></p>
        <p>Status : <strong>${result}</strong></p>
    `;
}