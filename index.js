import { placeholderPropertyObj } from '/properties/placeholderProperty.js'
import { propertyForSaleArr } from '/properties/propertyForSaleArr.js'

console.log(placeholderPropertyObj,propertyForSaleArr)
const getPropertyHtml =
    propertyForSaleArr.map(function(value){
        const { image, propertyLocation, priceGBP, comment } = value
        const newArr = value.roomsM2
        const total = newArr.reduce(function(total, current){
            return total + current
        })
        return        `
    <section class="card">
        <img src="/images/${image}">
        <div class="card-right">
            <h2>${propertyLocation}</h2>
            <h3>${priceGBP}</h3>
            <p>${comment}</p>
            <h3>${total}</h3>
        </div>
    </section> 
        `
        }
    ).join('')

/*
SUPER CHALLENGE 💪

Render out a card for each of the properties in the propertyForSaleArr array (in the 'properties' folder). Each card should have an image, a property location, a price, a comment and the TOTAL property size in square metres (each object has an array with the size in square metres of the individual rooms).

If no array of properties is passed to getPropertyHtml, the placeholder property stored in placeholderPropertyObj (in the 'properties' folder) should be rendered instead.

This is the JS I want you to use to complete this challenge 👇
- import/export - done
- .map() - done
- .join() - done
- Object destructuring - done
- .reduce() - done
- Default parameters

The HTML and CSS have been done for you. 
This is the HTML template 👇. Replace everything in UPPERCASE with property data.

<section class="card">
    <img src="/images/IMAGE">
    <div class="card-right">
        <h2>PROPERTY LOCATION</h2>
        <h3>PRICE GBP</h3>
        <p>COMMENT</p>
        <h3>TOTAL SIZE IN SQUARE METRES m&sup2;</h3>
    </div>
</section> 
*/


/***** Modify 👇 by adding an argument to the function call ONLY. *****/
document.getElementById('container').innerHTML = getPropertyHtml