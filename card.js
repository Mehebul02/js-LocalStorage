const addProduct = () => {
  const productNameField = document.getElementById("product-name");
  const productQuantityField =
    document.getElementById("product-quantity");
  const product = productNameField.value;
  const quantity = productQuantityField.value;
  productNameField.value=''
  productQuantityField.value=''
  console.log(product,quantity)
};
