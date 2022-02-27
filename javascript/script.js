const daily_toggle = document.getElementById('daily');
const weekly_toggle = document.getElementById('weekly');
const monthly_toggle = document.getElementById('monthly');

var activities;

fetch('javascript/data.json').then(function(response){
    return response.json();
}).then(function(response){
    activities = response;
    console.log(activities);
}).then(function(){

    activateWeekly();

    daily_toggle.addEventListener('click', activateDaily);
    weekly_toggle.addEventListener('click', activateWeekly);
    monthly_toggle.addEventListener('click', activateMonthly);
});

function activateDaily(){
    daily_toggle.setAttribute('data-active', 'true');
    weekly_toggle.setAttribute('data-active', 'false');
    monthly_toggle.setAttribute('data-active', 'false');
    for(const activity of activities){
        const current = document.querySelector("#"+activity.title+" .current");
        const previous = document.querySelector("#"+activity.title+" .previous");
        current.textContent = activity.timeframes.daily.current+"hrs";
        previous.textContent = "Yesterday - "+activity.timeframes.daily.previous+"hrs";
    }
}
function activateWeekly(){
    weekly_toggle.setAttribute('data-active', 'true');
    daily_toggle.setAttribute('data-active', 'false');
    monthly_toggle.setAttribute('data-active', 'false');
    for(const activity of activities){
        const current = document.querySelector("#"+activity.title+" .current");
        const previous = document.querySelector("#"+activity.title+" .previous");
        current.textContent = activity.timeframes.weekly.current+"hrs";
        previous.textContent = "Last week - "+activity.timeframes.weekly.previous+"hrs";
    }
}
function activateMonthly(){
    monthly_toggle.setAttribute('data-active', 'true');
        daily_toggle.setAttribute('data-active', 'false');
        weekly_toggle.setAttribute('data-active', 'false');
        for(const activity of activities){
            const current = document.querySelector("#"+activity.title+" .current");
            const previous = document.querySelector("#"+activity.title+" .previous");
            current.textContent = activity.timeframes.monthly.current+"hrs";
            previous.textContent = "Last month - "+activity.timeframes.monthly.previous+"hrs";
        }
}