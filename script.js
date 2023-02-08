//Bootstrap Active Links 
//Links in nav bar becomes active when user is in the section pertaing to the nav item
var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar-example'
  });

function appear(){
var textAppear1 = document.getElementById('titleAppear');
var textAppear2 = document.getElementById('titleAppear2');
var lineslideOut = document.getElementById('disAppear');
}

function disappear(){

 


}

function getResults(){
 //const finalVerdict = document.querySelector('input[name="finalVerdict"]:checked').value;
  const underService = document.getElementsByName('input[name = "proCommunity"]:checked').value;
  const convictedDisqualifyingAnswer = document.getElementsByName('input[name = "convictedDisqualifying"]:checked').value;
  const expungmentAnswer = document.getElementsByName('input[name = "piorExpungment"]:checked').value;
  const courtOrderedQuestions= document.getElementsByName('input[name = "courtOrdedConditions"]:checked').value;
  const arrestFloridaAnswer = document.getElementsByName('input[name = "arrestFlorida"]:checked').value;
  const hillsboroughAnswer = document.getElementsByName('input[name = "Hillsborough":checked').value;
  const timeSinceArrest = document.getElementById('years').value;
  let  disqualify = document.getElementById('disqualify');
  let qualify = document.getElementById('qualify');

if(
  underService == true|| convictedDisqualifyingAnswer == true ||expungmentAnswer == true || courtOrderedQuestions == false ||  arrestFloridaAnswer == false ||  hillsboroughAnswer == true || timeSinceArrest < 5

  ){
  disqualify.innerText = ('You Do Not Qualify');
}
else{
  qualify.innerText = ('You Qualify');

}
}