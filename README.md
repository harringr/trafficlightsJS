# TrafficLights.js

Script to calculate nutrition traffic lights.

Usage (command line): 

```
$ rhino use_generate_tl.js

(Insert data for food nutrients into use_generate_tl.js)

```

Else use in web application

```javascript

<script>

  function generate_food_data(){
    var food_data = 
    {
      // variables added dynamically in webpage
      'type': food_type,
      'size_g': size_g,
      'serving_size': serving_size,
      'fat': { 'serving_g': fat_serving_g, 'hundred_g': fat_hundred_g }, 
      'sat': { 'serving_g': sat_serving_g, 'hundred_g': fat_hundred_g },
      'sugar': { 'serving_g': sugar_serving_g, 'hundred_g': sugar_hundred_g },
      'salt': { 'serving_g': salt_serving_g, 'hundred_g': salt_hundred_g }
    }
    return food_data
  };

  tl_data = define_tl_limits();
  food_data = generate_food_data();
  traffic_lights = generate_all_tls(tl_data, food_data);

  json_tl = return_json_traffic_lights(traffic_lights);

</script>


```
