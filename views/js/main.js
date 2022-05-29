
const productButtons = document.querySelectorAll('.introItem button');
const buyButton = document.querySelector('#buy');
let items = [];

for(productButton of productButtons){
    productButton.addEventListener('click', (e) =>{
        const button = e.target;
        const productId = button.parentElement.id;
        const inputs = document.querySelectorAll(`#${productId} .products input`);
        items.push(createItem(inputs));
    })
}

buyButton.addEventListener('click', async (e) =>{ 
    getUrl();
});

const getValue = (id) => {
    return document.querySelector(`#${id}`).value;
}

const checkCheckbox = (id) => {
    return document.querySelector(`#${id}`).checked;
}

const createItem = (productInputs) => {
    return {
        amount: productInputs[0].value,
        description: productInputs[1].value,
        product_id: productInputs[2].value
    }
}






fetch('/gettocken',{method: 'POST', headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
     }, 
    body: 'grant_type=client_credentials',
}).then((res)=>{

    

})


const getUrl = () => {

        fetch('/geturl',{
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({
                intent: getValue('intent'),
                redirect_url : getValue('redirect_url'),
                shop_order_id : getValue('shop_order_id'),
                show_shop_order_id_on_extract :checkCheckbox('shop_order'),
                card_transaction_id : getValue('card_transaction_id'),
                capture_method: getValue('capture_method'),
                locale : getValue('locale'),
                purchase_units: [
                {
                    amount: {
                    currency_code: getValue('currency_code'),
                    value: getValue('amount')
                    }
                }
                ],
                items
            })
        }).then(async (res)=>{
            res.json().then((json) => {
                window.open(json.links[1].href, '_blank').focus();
            });
        })

}



