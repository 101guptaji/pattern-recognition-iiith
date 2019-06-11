window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	zoomEnabled: true,
	axisX: {
		title:"X-axis",
		titleFontColor: "black",
		lineThickness: 2,
		minimum: -1000,
		maximum: 1000,
		viewportMinimum: -1.1,
        viewportMaximum: 1.1, 
		interval: 0.25,
	},
	axisY:{
		title: "Y-axis",
		titleFontColor: "black",
		lineThickness: 2,
		minimum: -1000,
		maximum: 1000,
		viewportMinimum: -1.1,
        viewportMaximum: 1.1, 
		interval: 0.1
	},
	data: [{
		type: "scatter",
		Legend: "<span style=\"color:red \"><b>{name}</b></span>",
		name: "Class-1",
		showInLegend: true,
		dataPoints: [
			{ x: 0.23, y:null },
			
		]
	},
	{
		type: "scatter",
		name: "Class-2",
		showInLegend: true, 
		Legend: "<span style=\"color:blue \"><b>{name}</b></span>",
		dataPoints: [
			{ x: 0.79, y: null },
			
		]
	}]
});
chart.render();


}