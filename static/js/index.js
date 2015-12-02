window.onload = function() {
    var costs = [
        "$1 for the app",
        "a penny per transaction",
        "a dime per transaction",
        "a quarter per transaction",
        "a 1% fee per transaction"
    ];
    document.getElementById("cost").innerHTML = costs[Math.floor(Math.random() * costs.length)];
    document.getElementById("form_cost").value = costs[Math.floor(Math.random() * costs.length)];
};
