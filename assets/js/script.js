var submitButtonEl = $('#custom_submit');
var hoursOver = $('input[name="hours-over"]');
var salaryGross = $('input[name="salary"]');
var resultEl = $('#result');

submitButtonEl.on('click', function (event) {
    var weekHours = hoursOver.val() - 7.5;
    console.log(weekHours);
    next(weekHours);
});

function next(weekHours) {
    var totalOvertime = weekHours * 230;
    next2(totalOvertime);
}

function next2(totalOvertime) {
    var dailySalary = salaryGross.val() /
        260;
    next3(dailySalary, totalOvertime);
}

function next3(dailySalary, totalOvertime) {
    var hourlySalary = dailySalary / 7.5;
    var result = totalOvertime * hourlySalary;
    var resultRound = Math.round(result)
    console.log(resultRound);
    $("#result").append("You have not been paid $" + resultRound + " for your " + totalOvertime + " hours of overtime");
}