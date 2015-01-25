# TrafficLights.js

Script to calculate nutrition traffic lights.

Usage (command line): 

```
$ rhino use_generate_tl.js

(Insert data for food nutrients into use_generate_tl.js)

```

Else use in web application

```

<script>

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

  tl_data = define_tl_limits();
  food_data = generate_food_data();
  traffic_lights = generate_all_tls(tl_data, food_data);

  json_tl = return_json_traffic_lights(traffic_lights);

</script>


```
