// lets say we want to create a order with items in the cart 
// once the order has been placed proceed to paymment
// once the payment is done showOrderDetails
// then update the wallet balance
cart=["shoes","slippers"];
const createOrder=(cart,function(orderid){
    proceedTopayment(orderid,function(){
        updateWalletBalance(paymentInfo,function(){
            showOrderDetails(orderId)
        })
    })
})
// problems with callback function
// 1.we can't have control on the callback function because we are passing it into the finction
// 2. callback function can be executed multiple times
// code looks uglier with increasing callback
// callback gets execute no matter what 

// with promises
// here we are attaching the callback to a function 
// callback gets executed only if the response is sucessfull
// here we can control the promises
const createOrders=fetch("",cart)
createOrders.then(data,function(){
    return processPayment(data)
}).then(paymentinfo,function(paymentInfo){

    return updateBalance(paymentInfo)
}).then(walletInfo,function(orderid){
    showOrder(walletInfo)
})

// using arrow functions
const createorder=fetch("",cart)
.then((orderId)=>proceedtopayment(orderId))
.then((paymentInfo)=>updatewalletbalance(paymentInfo))
.then((walletInfo)=>showOrder(walletInfo))

