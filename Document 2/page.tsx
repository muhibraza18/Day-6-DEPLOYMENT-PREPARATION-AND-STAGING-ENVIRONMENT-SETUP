import { client } from "@/sanity/lib/client";
import Image from "next/image";
import React from "react";

const products = async () => {
  const query = `*[_type == "products"]{
  price,"imageUrl": image.asset->url,tags,inventory,title,description,_id,category
}`;
  const res = await client.fetch(query);
  console.log(res);
  return (
    <div className="flex justify-center items-center p-3">
      <div>
        <div className="text-5xl font-semibold m-2">Products</div>
        <div className="grid grid-cols-4">
          {res.map((product: any) => (
            <div className="m-2 bg-slate-50 rounded-lg p-2">
              <Image
                key={product._id}
                src={product.imageUrl}
                width={333}
                height={333}
                alt={product.title}
                className="rounded-xl"
              ></Image>
              <div className="text-xl pt-3">{product.title}</div>
              <div className="font-bold text-lg text-end">{product.price}$</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default products;
