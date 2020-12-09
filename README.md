# Welcome to GitHub Desktop!

This is your README. READMEs are where you can communicate what your project is and how to use it.

Frontend folder has the Angular frontend service for the pizza shop. 
  Landing page is '/pizza' where the two items are shown. Clicking each item "Add to cart" button will display a message and add one pizza to the cart service (cart.service.ts).
  Moving to cart component it displays a list with both items either in 0 or with the added items pulled from cart service. User can change the amount of pizzas.
  Clicking on the button "Place order" posts the order through http to the springboot server and the new order is added to the database. If the cart is empty no order will be saved and the user will be alerted.
  Inside the history component a table with the order history is displayed. Pulled from the spring server under orderserv.service.
  
  
Order model is:
  ID (number)
  #Pepperoni (number)
  #Cheese (number)
  Date (Date in database, String in Angular)
