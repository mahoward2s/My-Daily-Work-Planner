//Adds current date and time every second to HTML
function updateTime() {
    var date = moment().format('MMMM Do YYYY, h:mm:ss a');
    console.log(date);
    $('#currentDay').html(date);
};
updateTime();
setInterval(function () {
    updateTime();
}, 1000);

// Object to hold time
var daySlots = [
    {
        id: '0',
        hour: '08',
        time: '08',
        meridian:
        reminder:
    },
    {
        id: '1',
        hour: '09',
        time: '09',
        meridian:
        reminder:
    },
    {
        id: '2',
        hour: '10',
        time: '10',
        meridian:
        reminder:
    },
    {
        id: '3',
        hour: '11',
        time: '11',
        meridian:
        reminder:
    },
    {
        id: '4',
        hour: '12',
        time: '12',
        meridian:
        reminder:
    },
    {
        id: '5',
        hour: '01',
        time: '01',
        meridian:
        reminder:
    },
    {
        id: '6',
        hour: '02',
        time: '02',
        meridian:
        reminder:
    },
    {
        id: '7',
        hour: '03',
        time: '03',
        meridian:
        reminder:
    },
    {
        id: '8',
        hour: '04',
        time: '04',
        meridian:
        reminder:
    },
]