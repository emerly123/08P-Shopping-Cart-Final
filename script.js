var products;
products=[];

var costs;
costs=[];


$(".newItem").click(function() {
    var itemPrice = $(".itemPrice").val();
    var itemName=$(".itemName").val();
    products.push(itemName);
    var numProducts= products.length;
    $(".number").text("Items in Cart: " + numProducts);
    costs.push(itemPrice);
    $(".leftRow").append("<li>" + itemName+ "</li>");
    var total = 0;
    $(".rightRow").append("<li>" + "$" + itemPrice + "</li>");
    costs.forEach(function(cost){
        total = total + parseInt(cost);
        $(".total").text("itemPrice: "+ total);
        
    
    console.log(total);
});
    });
    
  $(".purchase").click(function(){
      alert("thank you for your purchase your items will come soon!");
  });
