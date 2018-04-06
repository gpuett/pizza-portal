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
  $("#order").submit(function(event) {
    event.preventDefault();

    var inputSize = $("#size").val();
    var inputToppings = $("input:checkbox[name=toppings]:checked").each(function() {
       += parseInt($(this).val());
    });
    console.log(inputToppings);
    var newPizza = new Pizza(inputSize, inputToppings);
    console.log(newPizza.price());
    $("#output").text("The price of your order will be $" + newPizza.price() +".");
  });
});
