
function getSelectedValue(){
    let symptomOne = document.getElementById("symptom1").value
    let symptomTwo = document.getElementById("symptom2").value
    let symptomThree = document.getElementById("symptom3").value

    if(symptomOne === "option 1" && symptomTwo === "option A" && symptomThree === "option X"){
        console.log("Tuberculosis")
    }
}