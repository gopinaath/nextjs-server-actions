"use client";

import { useTransition } from "react";

function AddProductButton(){

    const [isPending, startTransition] = useTransition();

    return(
        <button
            
        >Add Product
        </button>
    )
}

export default AddProductButton