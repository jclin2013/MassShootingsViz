let tooltipEffect = node => {
  node.on("mouseover", function(d) {
          d3.select(this).append("line")

          d3.select(this).append("text")
            .attr("id", "tooltip")
            .attr("x", d => d.r/2)
            // .attr("y", yPosition)
            .attr("text-anchor", "middle")
            .attr("font-family", "sans-serif")
            .attr("font-size", "11px")
            .attr("font-weight", "bold")
            .attr("fill", "white")
            .text(d => d.data.date);
        })
        .on("mouseout", () => {
          d3.select("#tooltip").remove();
        });
}
