export const Part1 = () => {
    return (
        <section className="h-fit w-screen py-[96px]">
            <div className="w-[1280px] h-fit m-auto bg-white px-[32px] flex flex-row justify-between items-center">
                <span className="w-[768px] h-fit flex flex-col gap-[48px] py-[10px]">
                    <div className="w-full h-fit flex flex-col gap-[8px]">
                        <h2 className="text-[60px] text-gray-900 font-[700] Inter">Hi, I’m Sagar 👋</h2>
                        <p className="text-[16px] font-[400] text-gray-600 Inter">I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.</p>
                    </div>
                    <div className="flex flex-col gap-[8px]">
                        <span className="w-full h-fit flex gap-[8px]">
                            <img src="./location.png"></img>
                            <p className="text-[16px] font-[400] Inter text-gray-600">Ahmedabad, India</p>
                        </span>
                        <span className="w-full h-fit flex gap-[8px]">
                            <img src="./dot.png"></img>
                            <p className="text-[16px] font-[400] Inter text-gray-600">Available for new projects</p>
                        </span>
                    </div>
                    <span className="flex row gap-[4px]">
                        <img src="./github.png"></img>
                        <img src="./twitter.png"></img>
                        <img src="./figma.png"></img>
                    </span>
                </span>
                <div className="w-fit h-fit">
                    <img src="photo.png" className="w-[320px] h-[360px]"></img>
                </div>
            </div>
        </section>
    )
}
