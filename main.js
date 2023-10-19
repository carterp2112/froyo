//Setting flavor list
const flavors = ['chocolate', 'vanilla', 'strawberry', 'coffee'];

//Making order array
let order = {contents: [], total: 0, choc: 0, vanil: 0, straw: 0, coff: 0};

function getOrder() {
    let rawOrder = prompt(`Hello and welcome to our froyo shop. Our menu includes: ${flavors.toString()}. Please separate values with commas.`);

    order.contents = rawOrder.split(',').map(value => value.trim());

    for(let x in order.contents) {
        if(order.contents[x] === flavors[0]) {
            order.choc++;
        } else if(order.contents[x] === flavors[1]) {
            order.vanil++;
        } else if(order.contents[x] === flavors[2]) {
            order.straw++;
        } else if(order.contents[x] === flavors[3]) {
            order.coff++;
        }
    }

    order.total = (order.choc + order.vanil + order.straw + order.coff);
    return order;
}


console.log(getOrder());