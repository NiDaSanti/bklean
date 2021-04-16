require("dotenv").config();
const cors = require("cors");
const express = require("express");
const stripe = require("stripe")(process.env.STRIPE_SEC_KEY);
const { v4: uuidv4 } = require("uuid"); 

const app = express();

//middleware
app.use(express.json());
app.use(cors());

//routes
app.get("/", (req, res) => {
	res.send("its on");
});

app.post("/payment", (req, res) => {
	const {product, token} = req.body;
	console.log("PRODUCT");
	console.log("PRICE", product.price);
	const idempontencyKey = uuidv4();
	return stripe.customers.create({
		email: token.email,
		source: token.id
	}).then(customer => {
		stripe.charges.create({
			amount: product.price * 100,
			currency: "usd",
			customer: customer.id,
			receipt_email: token.email,
			description: `purchase of product.name`,
			shipping: {
				name: token.card.name,
				address: {
					country: token.card.address_country
				}
			}
		}, {idempontencyKey})
	}).then(result => res.status(200).json(result))
	.catch(err => console.log(err))
});
//listen

app.listen(8282, () => console.log("LISTENING AT PORT 8282"));
