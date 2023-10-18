

function AddProduct() {
  const handleAddProducts = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const type = form.type.value;
    const image = form.image.value;
    const shortDescription = form.shortDescription.value;
    console.log(name, brand, price, rating, type, image, shortDescription, form);
  }


  return (
    <div className="bg-gray-100 p-8">
      <div className="max-w-xl mx-auto bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Add Product</h2>

        <form onSubmit={handleAddProducts}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                Name
              </label>
              <input
                required
                type="text"
                name="name"
                className="w-full p-2 border rounded"
                placeholder="Product Name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="brand">
                Brand Name
              </label>
              <input
                required
                type="text"
                name="brand"
                className="w-full p-2 border rounded"
                placeholder="Brand Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="price">
                Price
              </label>
              <input
                required
                type="number"
                name="price"
                className="w-full p-2 border rounded"
                placeholder="Price"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="rating">
                Rating
              </label>
              <input
                required
                max="5"
                type="number"
                name="rating"
                className="w-full p-2 border rounded"
                placeholder="Rating"
              />
            </div>
            <div className="mb-4 col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type</label>
              <select name="type" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option  defaultValue='Computer'>Computer</option>
                <option defaultValue='Phone'>Phone</option>
                <option defaultValue='Laptop'>Laptop</option>
                <option defaultValue='Google device'>Google devices</option>
                <option defaultValue='Other'>Other</option>
              </select>
            </div>
            <div className="mb-4 col-span-2">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="image">
                Image URL
              </label>
              <input
                required
                type="text"
                name="image"
                className="w-full p-2 border rounded"
                placeholder="Image URL"
              />
            </div>

            <div className="mb-4 col-span-2">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="shortDescription">
                Short Description
              </label>
              <textarea
                name="shortDescription"
                className="w-full p-2 border rounded"
                rows="4"
                placeholder="Short Description"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          </div>
          <div className="text-center">
            <button type="submit" className="bg-blue-500 text-white p-2 px-4 rounded hover:bg-blue-700">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddProduct
