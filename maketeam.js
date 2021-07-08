const makeTeamForm = document.getElementById("maketam-Form")
const makeTeamBtn = document.getElementById("maketeam-Btn")
//const numOfMem = document.getElementById("numof-mem")

makeTeamBtn.addEventListener("click",(e) => {
    e.preventDefault();
    const makeTeam = makeTeamForm.makeTeam.value;
    const teamMemNum = makeTeamForm.teamMemNum.value;})