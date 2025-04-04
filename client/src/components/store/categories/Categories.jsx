import { useNavigate, useParams } from "react-router";
import UseFetchProducts from "../../../hooks/UseFetchProducts";
import { ProductCard, ProductCardSkeleton } from "../global/ProductCard";
import { useEffect } from "react";

export default function Category() {
   const navigate = useNavigate();

  const { category } = useParams();

  const { products, refetch } = UseFetchProducts(`/api/products/store/category/${category}`)

  if(products === "Invalid Category"){
   navigate('/')
  }

  useEffect(() => {
   if(products) refetch();
   window.scrollTo(0, 0)
  }, [category])

  return (
    <section className="min-h-screen">
      <div className="px-golden-lg pt-golden-md">
      {products &&
      <>
         <h2 className="text-md font-bold">{category === "spel" || category === "konsoller" || category === "pc" || category === "tv-ljud-and-bild" || category === "hobby" ? products[0].supercategory : products[0].category}</h2>
         <p className="font-semibold">{products.length} {products.length === 1 ? "produkt" : "produkter"}</p>
      </>
         }
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 *:px-golden-lg *:py-golden-xl *:border-b-[1px] *:border-border last:border-none">
         {products ? 
            products.map((product) => (
               <div key={product.id}>
                  <ProductCard product={product}/>
               </div>
            ))
         :
         <>
         <div>
            <ProductCardSkeleton/>
         </div>
         <div>
            <ProductCardSkeleton/>
         </div>
         <div>
            <ProductCardSkeleton/>
         </div>
         <div>
            <ProductCardSkeleton/>
         </div>
         <div>
            <ProductCardSkeleton/>
         </div>
         <div>
            <ProductCardSkeleton/>
         </div>       
         <div>
            <ProductCardSkeleton/>
         </div>       
         <div>
            <ProductCardSkeleton/>
         </div>       
         <div>
            <ProductCardSkeleton/>
         </div>       
         <div>
            <ProductCardSkeleton/>
         </div>       
         <div>
            <ProductCardSkeleton/>
         </div>       
         <div>
            <ProductCardSkeleton/>
         </div>       
         </>
         }
      </div>
    </section>
  );
}
