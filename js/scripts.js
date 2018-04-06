// business logic
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.price = function() {
  return parseInt(this.size) + parseInt(this.toppings) + 10;
}




// user interface logic
$(document).ready(function() {

  $("#add-pizza").click(function() {
    $("#pizza").append('<div class="new-pizza">' +
                        '<div class="row">' +
                          '<div class="col col-md">' +
                            '<label for="size">Choose your size:</label>' +
                            '<select class="form-control" id="size">' +
                              '<option value="2">Small</option>' +
                              '<option value="4">Medium</option>' +
                              '<option value="8">Large</option>' +
                              '<option value="10">Family</option>' +
                            '</select>' +
                          '</div>' +
                          '<div class="col col-md">' +
                            '<label for="toppings">Choose your toppings:</label>' +
                            '<div class="form-check">' +
                              '<input class="form-check-input" type="checkbox" name="toppings" value="1">Red Onion<br>' +
                              '<input class="form-check-input" type="checkbox" name="toppings" value="1">Jalapeno Peppers<br>' +
                              '<input class="form-check-input" type="checkbox" name="toppings" value="1">Roasted Garlic<br>' +
                              '<input class="form-check-input"  type="checkbox" name="toppings" value="1">Green Peppers<br>' +
                              '<input class="form-check-input" type="checkbox" name="toppings" value="1">Black Olives<br>' +
                              '<input class="form-check-input" type="checkbox" name="toppings" value="1">Kalamata Olives<br>' +
                              '<input class="form-check-input" type="checkbox" name="toppings" value="1">Mushrooms<br>' +
                              '<input class="form-check-input" type="checkbox" name="toppings" value="1">Spinach<br>' +
                              '<input class="form-check-input" type="checkbox" name="toppings" value="1">Extra Cheese<br>' +
                              '<input class="form-check-input" type="checkbox" name="toppings" value="1">Feta Cheese<br>' +
                              '<label for="dietary">Dietary Options</label><br>' +
                              '<input class="form-check-input" type="checkbox" name="toppings" value="2">Gluten Free<br>' +
                              '<input class="form-check-input" type="checkbox" name="toppings" value="-2">Dairy Free<br>' +
                            '</div>' +
                          '</div>' +
                        '</div>' +
                      '</div>');
  });

  $("#order").submit(function(event) {
    event.preventDefault();

    // var inputSize = $("#size").val();
    // var inputToppings = 0;
    // $("input:checkbox[name=toppings]:checked").each(function() {
    //    inputToppings += parseInt($(this).val());
    // });

    $("#pizza").each(function() {
      var newPizza = new Pizza(inputSize, inputToppings);
      var inputSize = 0;
      $(this).find("#size").each(function() {
        inputSize += parseInt($(this).val());
      });
      var inputToppings = 0;
      $("input:checkbox[name=toppings]:checked").each(function() {
        inputToppings += parseInt($(this).val());
      });
      $("#output").text("The price of your order will be $" + newPizza.price() +".");
      console.log(inputToppings);
      console.log(inputSize);
      console.log(newPizza);
    });

  });
});
