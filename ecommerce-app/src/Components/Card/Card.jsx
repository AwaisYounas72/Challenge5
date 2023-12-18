/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import Button from "../Button";
import useCartStore from "../../Store/CartStore";


const Card = ({ item }) => {
    const { addToCart } = useCartStore((state) => ({
        addToCart: state.addToCart
    }))

    const [imageUrl, setImageUrl] = useState(item.images[0] || '/public/Products/device-mockups-gray 1-3.png');

    const handleImageError = () => {
        setImageUrl('/public/Products/device-mockups-gray 1-3.png');
    };


    return (
        <div className="border rounded-xl p-3">
            <div className="w-64 h-64 ">
                <img src={imageUrl} alt="" className="rounded-md" onError={handleImageError} />
            </div>
            <Button text="Add to Cart" position={"justify-end mx-3"} className={"bg-black hover:bg-black/90"} onClick={() => addToCart(item)} />
        </div>
    )
}

export default Card