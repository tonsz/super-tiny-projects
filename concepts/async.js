let stock = {
    fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holders : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"]
}; 

let is_shop_open = false

// promise for time 
function time (ms) {
    return new Promise((resolve, reject) => {
        if(is_shop_open){   
            setTimeout(resolve, ms)
        } else {
            reject(console.log("shop is closed"))
        }
    })
}
 
// async function 
async function kitchen () {
    try {
        await time(2000)
        console.log("order taken")
        
        await time(0000)
        console.log("production started")
    
        await time(1000)
        console.log("fruits chopped")
        
        await time(3000)
        console.log("ice cream served")
    } catch (error){
        console.log("customer left", error)
    } finally {
        console.log("day ends. shop is closed")
    }
}

// invoke function
kitchen()