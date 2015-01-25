#!/usr/bin/env node

function capitaliseFirstLetter(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function define_tl_limits(){

  var limits = 
  {
    'food': 
    {
      'fat': { 'serving': 21, 'upper': 17.5, 'lower': 3 }, 
      'sat': { 'serving': 6, 'upper': 5, 'lower': 1.5 },
      'sugar': { 'serving': 27, 'upper': 22.5, 'lower': 5 },
      'salt': { 'serving': 1.8, 'upper': 1.5, 'lower': 0.3 }   
    },
    'drink':
    {
      'fat': { 'serving': 10.5, 'upper': 8.75, 'lower': 1.5 }, 
      'sat': { 'serving': 3, 'upper': 2.5, 'lower': 0.75 },
      'sugar': { 'serving': 13.5, 'upper': 11.25, 'lower': 2.5 },
      'salt': { 'serving': 0.9, 'upper': 0.75, 'lower': 0.3 }         
    }
  }

  return limits

};

function generate_single_tl(serving_value, hundred_value, serving_limit, upper_limit, lower_limit){

  try {
    if (serving_value > serving_limit){
      return 'Red'
    }
    else{
      if (hundred_value > upper_limit){
        return 'Red'
      }
      else if (hundred_value <= lower_limit){
        return 'Green'
      }
      else{
        return 'Amber'      
      }
    }
  }
  catch (e) {
    // statements to handle any exceptions
    // logMyErrors(e); // pass exception object to error handler
    throw "myException"; // generates an exception
  }
  finally {
    // closeMyFile(); // always close the resource
  }

};

function generate_all_tls(tl_data, fd_data){

  // Get traffic light data according to type of data (determined by food)
  tl = tl_data[fd_data.type]

  // Initialise object to hold data for traffic light colours
  colours = {}

  for (var l in tl){
    light = generate_single_tl(fd_data[l]['serving_g'], fd_data[l]['hundred_g'], tl[l]['serving'], tl[l]['upper'], tl[l]['lower']);
    colours[capitaliseFirstLetter(l)] = light
  }

  return colours

};

function print_tl(tl_colours, labels) {

  labels = typeof labels !== 'undefined' ? labels : true;

  if (labels) {
    print("Fat: " + tl_colours.Fat + " || Sat: " + tl_colours.Sat + " || Sugar: " + tl_colours.Sugar + " || Salt: " + tl_colours.Salt);
  }
  else {
    print(tl_colours.Fat + " " + tl_colours.Sat + " " + tl_colours.Sugar + " " + tl_colours.Salt);
  };

};

function return_json_traffic_lights(traffic_lights){

  return JSON.stringify(traffic_lights);

};
