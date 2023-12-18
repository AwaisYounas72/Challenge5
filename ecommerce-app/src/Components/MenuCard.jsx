

const MenuCard = () => {
    return (
        <div className="main bg-black py-5 rounded-md mt-14 ">
            <div className=" py-5 flex flex-col gap-8 container mx-auto p-3">
                 <div className="flex flex-row  gap-3 justify-start items-center  ">
                 <div className="text-white text-lg ">
                    We’ve worked with hundreds of amazing people 
                </div>
               <hr className="text-[#979797] w-[60%] hidden md:block" />
                 </div>

                <div className="flex md:flex-col gap-5  ">
                    <div className="flex md:flex-row gap-7 flex-wrap">
                        <div>
                            <img src="/products/cards/imageU1.png" alt="" />
                        </div>
                        <div>
                            <img src="/products/cards/imageU2.png" alt="" />
                        </div>
                        <div>
                            <img src="/products/cards/imageU3.png" alt="" />
                        </div>
                        <div>
                            <img src="/products/cards/imageU4.png" alt="" />
                        </div>
                    </div>
                    <div className="flex md:flex-row gap-7 flex-wrap">
                        <div>
                            <img src="/products/cards/imageD1.png" alt="" />
                        </div>
                        <div>
                            <img src="/products/cards/imageD2.png" alt="" />
                        </div>
                        <div>
                            <img src="/products/cards/imageD3.png" alt="" />
                        </div>
                        <div>
                            <img src="/products/cards/imageD4.png" alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MenuCard
