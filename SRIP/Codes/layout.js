window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	
	axisX: {
		title:"X-axis",
		lineThickness: 2,
		minimum: -1.1,
		maximum: 1.1
	},
	axisY:{
		title: "Y-axis",
		lineThickness: 2,
		minimum: -1.1,
		maximum: 1.1
	},
	data: [{
		type: "scatter",
		toolTipContent: "<span style=\"color:blue \"><b>{name}</b></span><br/><b> X-axis:</b> {x}<br/><b> Y-axis:</b></span> {y} ",
		name: "Class-1",
		showInLegend: true,
		dataPoints: [
			{ x: 0.23, y:0.33 },
			
		]
	},
	{
		type: "scatter",
		name: "Class-2",
		showInLegend: true, 
		toolTipContent: "<span style=\"color:red \"><b>{name}</b></span><br/><b> X-axis:</b> {x}<br/><b> Y-axis:</b></span> {y} ",
		dataPoints: [
			{ x: 0.19, y: 0.2 },
			
		]
	}]
});
chart.render();
}