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
  while(i<d.length)
  {
  if (!listOfSpecies.includes(d[i].classification))
  {

      listOfSpecies.push(d[i].classification);

  }
  i++;
  }
  var numSpecies = listOfSpecies.length;
  d3.select('#numSpecies')
        .append("td")
        .text(numSpecies);

})
//////////////////////////////
var people=d3.json("https://ghibliapi.herokuapp.com/people")
people.then(function(data){
  var p=data.map(function(ele){
    return[ele.name,ele.gender,ele.age,ele.eye_color,ele.hair_color]
  })
  var title=["name","gender","age","eye_color","hair_color"]
  var table=d3.select("body")
    .append("div")
    .append("table")
    .classed("chart",true)
  table.append("thead")
       .append("tr")
       .selectAll("th")
       .data(title)
       .enter()
       .append("th")
       .text(function(d){return d})
  table.append("tbody")
       .selectAll("t")
       .data(p)
       .enter()
       .append("tr")
       .selectAll("td")
       .data(function(d){return d})
       .enter()
       .append("td")
       .text(function(d){return d})
},function(err){console.log(err)})
