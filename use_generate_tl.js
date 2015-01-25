// Example of use of generate_tl.js
// Use rhino's function load() to 
// https://developer.mozilla.org/en-US/docs/Mozilla/Projects/Rhino/Shell
// $ rhino use_generate_tl.js


load("generate_tl.js")

function generate_food_data(){
  var food_data = 
  {
    'type': 'food',
    'size_g': 400,
    'serving_size': '1/2 pizza',
    'fat': { 'serving_g': 16.9, 'hundred_g': 4.5 }, 
    'sat': { 'serving_g': 4.5, 'hundred_g': 1.2 },
    'sugar': { 'serving_g': 12.8, 'hundred_g': 3.4 },
    'salt': { 'serving_g': 1.6, 'hundred_g': 0.4 }
  }
  return food_data
};

function main(){

  tl_data = define_tl_limits();
  food_data = generate_food_data();
  traffic_lights = generate_all_tls(tl_data, food_data);

  print_tl(traffic_lights, true);

  json_tl = return_json_traffic_lights(traffic_lights);
  print(json_tl)

};

main()