var currentDate = moment().format("dddd, MMMM Do YYYY");
var date = document.getElementById("currentDay")
date.textContent = currentDate

$(".saveBtn").click(function(){
console.log($(this).siblings(".col-10").val().trim())
});
