(function () {
  var data = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  d3.select("body").selectAll("div")
      .data(data)
      .enter()
      .append("div")
      .attr("class", "bar-chart")
      .style("width", function (d) {
        return "20px";
      })
      .style("height", function (d) {
        return d + "px";
      });

})();