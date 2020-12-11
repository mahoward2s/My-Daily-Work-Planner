// Object to hold time
var timeSlots = [
    {
        id: '0',
        hour: '08',
        time: '08',
        meridian: 'am',
        reminder: "",
    },
    {
        id: '1',
        hour: '09',
        time: '09',
        meridian: 'am',
        reminder: "",
    },
    {
        id: '2',
        hour: '10',
        time: '10',
        meridian: 'am',
        reminder: "",
    },
    {
        id: '3',
        hour: '11',
        time: '11',
        meridian: 'am',
        reminder: "",
    },
    {
        id: '4',
        hour: '12',
        time: '12',
        meridian: 'pm',
        reminder: "",
    },
    {
        id: '5',
        hour: '01',
        time: '01',
        meridian: 'pm',
        reminder: "",
    },
    {
        id: '6',
        hour: '02',
        time: '02',
        meridian: 'pm',
        reminder: "",
    },
    {
        id: '7',
        hour: '03',
        time: '03',
        meridian: 'pm',
        reminder: "",
    },
    {
        id: '8',
        hour: '04',
        time: '04',
        meridian: 'pm',
        reminder: "",
    },
];

//local storage to hold user input
localStorage.setItem("userInput", "");
document.getElementById("result").innerHTML = localStorage.getItem("userInput");


timeSlots.forEach(function (thishour) {
    var hourRow = $("<form>").attr({
        "class": "row"
    });
    $(".container").append(hourRow);

    var hourField = $("<div>")
        .text('${thisHour.hour}${thisHour.meridian}')
        .attr({
            "class": "col-md-2 hour"
        });

    var hourPlan = $("<div>")
        .attr({
            "class": "col-md-9 description p-0"
        });
    var planData = $("<textarea>");
    hourPlan.append(planData);
    planData.attr("id", thisHour.id);
    if (thisHour.time < moment().format("HH")) {
        planData.attr({
            "class": "past",
        })
    } else if (thisHour.time === moment().format("HH")) {
        planData.attr({
            "class": "present"
        })
    } else if (thisHour.time > moment().format("HH")) {
        planData.attr({
            "class": "future"
        })
    }
    var saveButton = $("<i class='far fa-save fa-lg'></i>")
    var savePlan = $("<button>")
        .attr({
            "class": "col-md-1 saveBtn"
        });
    savePlan.append(saveButton);
    hourRow.append(hourField, hourPlan, savePlan);
})
init();

$(".saveBtn").on("click", function (event) {
    event.preventDefault();
    var saveIndex = $(this).siblings(".description").children(".future").attr("id");
    timeSlots[saveIndex].reminder = $(this).siblings(".description").children(".future").val();
    console.log(saveIndex);
    saveReminders();
    displayReminders();
})
