import { Product } from "@/typings";
import { addProductToDatabase } from "@/actions/serverActions";
import AddProductButton from "@/components/AddProductButton";


export default async function Home() {
  const res = await fetch(
    "https://653da89ef52310ee6a9a42ca.mockapi.io/products", 
    {
      cache: "no-cache",
      next: {
        tags: ["products"],
      }
  });

  const products: Product[] = await res.json()

  return (
    <main className="">
      <h1 className="text-3xl font-bold text-center"> Products Warehouse</h1>
      <AddProductButton/>
      <form action={addProductToDatabase} className="flex flex-col gap-5 max-w-xl mx-auto p5">
        <input 
          name = 'product'
          type = "text" 
          placeholder = "Enter Product name ..." 
          className="border border-gray-300 p2 rounded-md" 
        />
        <input 
          name = 'price'
          placeholder = "Enter Price  ..." 
          className="border border-gray-300 p2 rounded-md" 
        />
        <button className="border bg-blue-500 tex-white p2 rounded-md"> Add Product</button>
      </form>

      <h2 className="font-bold p-5">List of Products</h2>
      <div className="flex flex-wrap gap-5">
        {products.map((product)=> (
          <div key={product.id} className="p-5 shadow">
            <p><b>{product.id}</b></p>
            <p>{product.product}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
