//Doing a Product web app, in product page to 
//display the name, description, imageUrl, style, price, ..., ...,.....,....


//const createHTMLList = (index, name, description, imageURL) =>
const createHTMLList = (title, description, targetDate) =>
`
<tr>
    <td>${title}</td>
    <td>${description}</td>
    <td>${targetDate}</td>
</tr>
`;

class ProductsController 
{
    constructor()
    {
        this._items = [];       //create an array to store the details of product items
    }

    //method to add the items into the array
    addItem(title, description, targetDate)
    {
        var productController = this;

            const item = {
                title: title,
                description: description,
                targetDate: targetDate
            };

            //push the item to the item property
            //need to pass the value and file object using @RequestParam
            const formData = new FormData();
            formData.append('title', title);
            formData.append('description', description);
            formData.append('targetDate', targetDate);

            fetch('http://localhost:8080/item/add', {
                method: 'POST', // or 'PUT'
                body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                    alert("Successfully added to To Do List")
                    //this.displayItem();  //to display in the table from ProductFrom.html
                })
                .catch((error) => {
                    console.error('Error:', error);
                    alert("Error adding item to To Do List")
                    });
    }

    displayItem() //this method is used to fetch data from API
    {
        //fetch data from database using the REST API endpoint from Spring Boot
        var productController = this;
        productController._items = [];

        fetch('http://127.0.0.1:8080/item/all')
            .then((resp) => resp.json())
            .then(function(data) {
                console.log("2. receive data")
                console.log(data);

                data.forEach(function (item, index) {

                    const itemObj = {
                        oId: item.id,
                        oTitle: item.title,
                        oDescription: item.description,
                        oTargetDate: item.targetDate
                        };

                    productController._items.push(itemObj);
                    });

                    productController.render();

                    })
                    .catch(function(error) {
                        console.log(error);
                    });
    }//end of display item

    render() //Display the fetched data from the API
    {
        var productController = this;
        const productHTMLList = [];

            for (var i=0; i < productController._items.length; i++)
            {
                const item = productController._items[i];            //assign the individual item to the variable

                //var loc = window.location.href;
                //var full = item.oImageUrl.pathname;

                const productHTML = createHTMLList(item.oTitle, item.oDescription, item.oTargetDate);

                productHTMLList.push(productHTML);
            }

            //Join all the elements/items in my productHTMLList array into one string, and separate by a break
            const pHTML = productHTMLList.join('\n');
            const itemsContainer = document.querySelector('#row');
            itemsContainer.innerHTML = pHTML;


            //addEventListener - click
            /*
            for (var i=0; i < productController._items.length; i++)
            {
                const item = productController._items[i];
                document.getElementById(i).addEventListener("click", function() { displayProductDetails(item);});
            }*/
    }

}   //End of ProductsController class
