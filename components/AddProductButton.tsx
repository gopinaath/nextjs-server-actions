"use client";

import { addProductToDatabase } from "@/actions/serverActions";
import { useTransition } from "react";

function AddProductButton(){

    const formData = new FormData();
    formData.append("product", "Macbook Pro");
    formData.append("price", "1299.00");

    return(
        <button
          onClick={ ()=> addProductToDatabase(formData)}
          className="fixed bottom-10 right-10 border bg-green-500 text-white p2 rounded-md w-48"
        >
            Add 
        </button>
    )
}

export default AddProductButton