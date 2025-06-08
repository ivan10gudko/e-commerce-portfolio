import supabase from "./supabase"

export default async function submitOrder(order) {
  const { customer, shippingAddress, paymentMethod, total, products } = order

  const { error } = await supabase
    .from('Orders')
    .insert([
      {
        firstname: customer.firstName,
        lastname: customer.lastName,
        email: customer.email,
        phone: customer.phone,
        country: shippingAddress.country,
        city: shippingAddress.city,
        zip: parseInt(shippingAddress.zip),
        address: shippingAddress.address,
        company: shippingAddress.company,
        paymentMethods: paymentMethod,
        total: total,
        products: products
      }
    ])

 if (error) {
    throw new Error(error.message)
  }

  return { success: true }
}
