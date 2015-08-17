(function () {
  var data = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  //d3.select("body").selectAll("div")
  //    .data(data)
  //    .enter()
  //    .append("div")
  //    .attr("class", "bar")
  //    .style("height", function (d) {
  //      return d + "px";
  //    })
  //    .style("width", function (d) {
  //      return "20px";
  //    })
  //    .append("text")

  var w = 400,
      h = 110;

  var svg = d3.select("body")
      .append("svg")
      .attr("width", w)
      .attr("height", h);


  svg.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", function(d, i) {
        return i * (w / data.length)
      })
      .attr("y", function(d) {
        return h - d;
      })
      .attr("width", w / data.length - 1)
      .attr("height", function(d) {
        return d;
      })
      .attr("fill", function(d) {
        return "hotpink";
      });

  svg.selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .text(function(d) {
        return d;
      })
      .attr("x", function(d, i) {
        return i * (w / data.length) + (w / data.length) / 2;
      })
      .attr("y", function(d) {
        return h - d + 10;
      })
      .attr("font-family", "sans-serif")
      .attr("font-size", "11px")
      .attr("fill", "black")
      .attr("text-anchor", "middle");


})();