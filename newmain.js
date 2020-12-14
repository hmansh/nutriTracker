function hideNutri() {
    var item = document.getElementById("nutri-table");
    item.style.display = "none";
    var item1 = document.getElementById("nutri-new");
    item1.style.display = "block";

}

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Item', 'Content'],
        ['Protein', 5.9],
        ['Saturated Fat', 8.2],
        ['Monosaturated Fat', 3.8],
        ['Polysaturated Fat', 1.1],
        ['Trans Fat', 0],
        ['Sugar', 35]
    ]);

    var options = {
        title: 'Content'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}


function playAudio(){
    var audio = new Audio('996d9580-3ddb-11eb-b1a3-7919efe520c6.mp3');
    audio.play();
    // audio.pause();
}

function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}