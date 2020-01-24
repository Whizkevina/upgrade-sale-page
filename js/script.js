let itemDetail = document.getElementById("item_detail");
let productAmount = document.getElementById("amount");
let paymentMethod = document.getElementById("payment_method");
let warranty = document.getElementById("warranty");
let IGHandle = document.getElementById("IGHandle");
let Whatsapp = document.getElementById("whatsapp");
let displayAmount = document.getElementById("total_amount");
let displayAmount2 = document.getElementById("total_amount2");
let displayFinalAmount = document.getElementById("final_amount");
let displayProduct = document.getElementById("display_product");
let displayPaymentMethod = document.getElementById("display_payment_method");
let displayWarrantyPeriod = document.getElementById("display_warranty_period");
let displayIGHandle = document.getElementById("display_IG_handle");
let displayWhatsapp = document.getElementById("display_whatsapp");


let formElement = document.querySelector("form.container");


formElement.addEventListener('submit', 

		function(e) {
			e.preventDefault();


			displayAmount.textContent = `N${productAmount.value}`;
			displayProduct.textContent = itemDetail.value;
			displayPaymentMethod.textContent = paymentMethod.value;
			displayWarrantyPeriod.textContent = warranty.value;
			displayAmount2.textContent = productAmount.value;
			displayFinalAmount = `N${productAmount.value}`;
			displayIGHandle.textContent = IGHandle.value;
			displayWhatsapp.textContent = Whatsapp.value;

			// console.log(`

			// 	${itemDetail.value},
			// 	${productAmount.value},
			// 	${paymentMethod.value},
			// 	${warranty.value},
			// 	${IGHandle.value},
			// 	${Whatsapp.value}
			// 	`)
		}

	)

// console.log(itemDetail.value);