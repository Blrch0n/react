export const Part6 = () => {
    return (
        <section className="w-full h-fit px-[80px] py-[96px]">
            <div className="w-full h-fit flex flex-col gap-[48px]">
                <div className="w-full h-fit flex flex-col justify-between gap-[16px] text-center">
                    <div className="w-full h-fit">
                        <button className="w-[122px] h-[28px] rounded-[12px] Inter bg-gray-200 text-gray-600 font-[500] text-[14px] ">Get in touch</button>
                    </div>
                    <p className="font-[400] Inter text-[20px] text-gray-600">What’s next? Feel free to reach out to me if you're looking for
                        <br></br>
                        a developer, have a query, or simply want to connect.</p>
                </div>
                <span className="w-full h-fit flex flex-col gap-[16px] items-center">
                    <div className="flex gap-[20px] items-center">
                        <img src="./icon3.png"></img>
                        <p className="font-[600] text-[36px] Inter text-gray-900">reachsagarshah@gmail.com</p>
                        <img src="./icon1.png"></img>
                    </div>
                    <div className="flex gap-[20px] items-center">
                        <img src="./icon.png"></img>
                        <p className="font-[600] text-[36px] Inter text-gray-900">+91 8980500565</p>
                        <img src="./icon1.png"></img>
                    </div>
                </span>
                <span className="w-full h-fit flex flex-col gap-[8px] items-center">
                    <div>
                        <p className="text-[16px] font-[400] text-gray-600">You may also find me on these platforms!</p>
                    </div>
                    <div className="flex gap-[4px]">
                        <img src="./github.png"></img>
                        <img src="./twitter.png"></img>
                        <img src="./figma.png"></img>
                    </div>

                </span>
            </div>
        </section>
    )
}
