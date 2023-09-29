## Features of the Project
* Selected Courses List
> The homepage of the project shows all the available courses along with a select button. If you click the select button of a course, the course will be listed as selected and the title of the course will be shown on the cart.

* Credits and Prices
> Each course has a price and a duration in hours which is named "credit" here. When you select a course, the credit of the course will be added with the total credit hour in the cart. Initially, you're permitted to buy a maximum of 20 credits, means that you can't buy more than 20 credits. Each time, you select a course, the price will be added with the total price.

* React Toast (Toastify)
> Whenever you select a course but it's not permitted because the total credits exceeds the credits limit (maximum 20 credits), a toast appears at the bottom left corner of the window showing that you can't select more than 20 credits. To show the toast, I've used the Toastify library and customized the toast.


## Managing the State of the Project
> To manage the states in the project, I've used the useState hook of react. The useState hook lets us to hide the inner complicated processes and give us a higher level access to manage the states. And to manage the side effects, I've used the useState hook.