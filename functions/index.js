const stripe = require("stripe")(
  "sk_test_51LZwIFSEQchHCmwgw9RsCZzGRJO5mINuFR9xZSWVGzA1cAjXGDxnoSMMZT8lm0bKfBfTe8ql7xEIiy3AZoDG5KpY00Eyjw4fn5"
);

exports.handler = async (event, context) => {
  if (
    event.httpMethod === "POST" &&
    event.path === "/.netlify/functions/index/payments/create"
  ) {
    const total = event.queryStringParameters.total;
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "inr",
      description: "Software development services",
      shipping: {
        name: "Jenny Rosen",
        address: {
          line1: "510 Townsend St",
          postal_code: "98140",
          city: "San Francisco",
          state: "CA",
          country: "US",
        },
      },
      payment_method_types: ["card"],
    });
    return {
      statusCode: 201,
      body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
    };
  } else if (
    event.httpMethod === "GET" &&
    event.path === "/.netlify/functions/index"
  ) {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "working fine" }),
    };
  } else {
    return {
      statusCode: 404,
      body: JSON.stringify({ message: "Not Found" }),
    };
  }
};
