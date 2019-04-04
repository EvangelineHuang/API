var malesP = d3.json("https://ghibliapi.herokuapp.com/people?gender=Male");
var speciesP = d3.json("https://ghibliapi.herokuapp.com/species")
malesP.then(function(d)
{
  var numMales = d.length;
  d3.select('#maleName')
    .selectAll("td")
    .data(d)
    .enter()
    .append("td")
    .append("a")
    .attr("href",function(d)
    {return d.url;})
    .text(function(d)

    {return d.name});
  d3.select('#numMales')
      .append("td")
      .text(numMales);
})
var femalesP = d3.json("https://ghibliapi.herokuapp.com/people?gender=Female");
femalesP.then(function(d)
{
  var numFemales = d.length;
  d3.select('#femaleName')
    .selectAll("td")
    .data(d)
    .enter()
    .append("td")
    .append("a")
    .attr("href",function(d)
    {return d.url;})
    .text(function(d)
    {return d.name});
  d3.select('#numFemales')
        .append("td")
        .text(numFemales);
})
speciesP.then(function(d)
{
  var listOfSpecies = []
  var i = 0
  console.log(d[i].classification);
  while(i<d.length)
  {
  if (!listOfSpecies.includes(d[i].classification))
  {

      listOfSpecies.push(d[i].classification);

  }
  i++;
  }
  var numSpecies = listOfSpecies.length;
  console.log(listOfSpecies);
  d3.select('#numSpecies')
        .append("td")
        .text(numSpecies);

})
