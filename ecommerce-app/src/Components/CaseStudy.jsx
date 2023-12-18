

const CaseStudy = () => {
    return (
        <div className="mt-14 flex md:flex-row gap-5 flex-col">
            <div className="  w-full bg-white border border-[#DCDCDC] p-6 rounded-lg shadow-md flex flex-col gap-3">

                {/* <!-- Logo --> */}
                <div className="">
                    <img src="/products/CaseStudy/Case1.png" alt="Logo" className="" />
                </div>
                <div className="text-lg">
                    <span className="font-semibold">2023 /</span>Case study
                </div>
                {/* <!-- Heading --> */}
                <h2 className="text-2xl font-semibold ">
                    Skip the bank, borrow from those you trust
                </h2>

                {/* <!-- Body --> */}
                <p className="text-[#515151]">FamilyFund is a crowdfunding platform for friends and family.
                    Allowing users to take personal loans from their network without a traditional financial institution.</p>

            </div>

            {/* second card */}
            <div className="  w-full bg-white border border-[#DCDCDC] p-6 rounded-lg shadow-md flex flex-col gap-3">

                {/* <!-- Logo --> */}
                <div className="">
                    <img src="/products/CaseStudy/Frame.png" alt="Logo" className="" />
                </div>
                <div className="text-lg">
                    <span className="font-semibold">2022 /</span>Case study
                </div>
                {/* <!-- Heading --> */}
                <h2 className="text-2xl font-semibold  ">
                Get a hodl of your health
                </h2>

                {/* <!-- Body --> */}
                <p className="text-[#515151]">Unseal is the first NFT platform where users can mint and trade NFTs of their own personal health records, allowing them to take control of their data.</p>

            </div>
            {/* third card */}
            <div className="  w-full bg-white border border-[#DCDCDC] p-6 rounded-lg shadow-md flex flex-col gap-3">

                {/* <!-- Logo --> */}
                <div className="">
                    <img src="/products/CaseStudy/Case1.png" alt="Logo" className="" />
                </div>
                <div className="text-lg">
                    <span className="font-semibold">2023 /</span>Case study
                </div>
                {/* <!-- Heading --> */}
                <h2 className="text-2xl font-semibold ">
                Overcome your fears,<br/> find your match
                </h2>

                {/* <!-- Body --> */}
                <p className="text-[#515151]">Find love in the face of fear — Phobia is a dating app that matches users based on their mutual phobias so they can be scared together.</p>

            </div>
        </div>
    )
}

export default CaseStudy
