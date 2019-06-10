window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	
	axisX: {
		title:"X-axis",
		lineThickness: 2,
		minimum: -1.1,
		maximum: 1.1,
		interval: 0.25
	},
	axisY:{
		title: "Y-axis",
		lineThickness: 2,
		minimum: -1.1,
		maximum: 1.1,
		interval: 0.1
	},
	data: [{
		type: "scatter",
		Legend: "<span style=\"color:blue \"><b>{name}</b></span>",
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
		Legend: "<span style=\"color:red \"><b>{name}</b></span>",
		dataPoints: [
			{ x: 0.19, y: null },
			
		]
	}]
});
chart.render();


}