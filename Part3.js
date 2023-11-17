export const Part3 = () => {
    return (
        <section className="w-full h-fit px-[80px] py-[96px]">
            <div className="w-[1280px] h-fit px-[32px] flex flex-col gap-[48px] m-auto">
                <div className="w-full h-fit flex flex-col justify-between gap-[16px] text-center">
                    <div className="w-full h-fit">
                    <button className="w-[75px] h-[28px] rounded-[12px] bg-gray-200 text-[14px] font-[500] Inter text-gray-600">Skills</button>
                    </div>
                    <p className="font-[400] text-gray-600 text-[20px] Inter">The skills, tools and technologies I am really good at:</p>
                </div>
                <div className="w-full h-fit flex flex-col gap-[48px] px-[32px]">
                    <img src="./Row@2x.png" ></img>
                    <img src="./Row.png"></img>
                </div>
            </div>
        </section>
    )
}