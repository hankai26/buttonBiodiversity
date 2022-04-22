const url = "https://api.spacexdata.com/v2/launchpads";
d3.json(url).then(receivedData => console.log(receivedData));
d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));
d3.json(url).then();

// ?? Use map() to print only the latitude and longitude coordinates 
// of each SpaceX launch station
// list=[];
// list = d3.json(url).then(data => data.location.region);
// console.log(list);


// Load a JSON file with D3.json()
// ?? https://courses.bootcampspot.com/courses/1159/pages/12-dot-3-2-load-a-json-file-with-d3-dot-json?module_item_id=440262
d3.json("samples.json").then(function(data){
    console.log(data);
});

d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq);
    console.log(wfreq);
});

d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>
    person.wfreq).sort((a,b) => b - a);
    console.log(wfreq);
});

//delete null values from the sorted wfreq array
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>
    person.wfreq).sort((a,b) => b - a);
    filteredWfreq = wfreq.filter(element => element != null);
    console.log(filteredWfreq);
});

//??-------------------------------------------
researcher1 = {
    name: 'Roza',
    age: 34,
    hobby: 'Hiking'
};
console.log(Object.entries(researcher1));
//-------------------------------------------

d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>
      {console.log(key + ': ' + value);});
});