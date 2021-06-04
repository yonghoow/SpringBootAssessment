const productsControl = new ProductsController();

var storeImage;
//When user clicks on 'Save Item', calls API to add items to the database
//Add an 'onsubmit' event listener for productform to add a product
newItemForm.addEventListener('submit', (event) => {
    // self-invoked function, arrow function
    //preventing a default action that a form does - submit the form using POST/GET
    //method that is stated in the form tag
    event.preventDefault();
    //Select the inputs
    const newItemTitle = document.querySelector('#newItemTitle');
    const newItemDescription = document.querySelector('#newItemDescription');
    const newItemTargetDate = document.querySelector('#newItemTargetDate');

    /*
        DO the validation code
    */

    //get the values of the inputs - variable names to be same as MySQL columns
    const title = newItemTitle.value;
    const description = newItemDescription.value;
    const targetDate = newItemTargetDate.value;

    //clear the form
    newItemTitle.value = '';
    newItemDescription.value = '';
    newItemTargetDate.value = '';

    //add the task to the task manager
    productsControl.addItem(title, description, targetDate);

});

    //select file input
    //const input = document.querySelector('#imagefile')

    //add event listener
    /*
    input.addEventListener('change', () => {
        storeImage = input.files[0];
        console.log("input: " + storeImage);
        //uploadFile(input.files[0]);
    }); */