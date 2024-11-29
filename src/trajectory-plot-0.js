import * as d3p from "dynamic-3d-plots";

var HtmlSlides = HtmlSlides || {};

HtmlSlides.trajectoryPlot0 = {};

HtmlSlides.trajectoryPlot0.create = async function() {
  const trajectoryData =
    await d3p.loadSensorData("./data/trajectory-0.json");

  const container = document.getElementById("trajectory-plot-0");

  d3p.attachTrajectoryPlot(container, trajectoryData);
};

document.addEventListener("DOMContentLoaded", function() {
  HtmlSlides.trajectoryPlot0.create();
});


