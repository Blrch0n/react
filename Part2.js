export const Part2 = () => {
    return (
        <section className="h-fit w-full py-[96px] bg-white">
            <div className="h-fit w-[1280px] m-auto flex flex-col gap-[48px]">
                <span className="w-full h-fit flex justify-center">
                    <button className="h-full w-[105px] bg-gray-200 rounded-[12px] text-[14px] font-[500] Inter text-gray-600">About me</button>
                </span>
                <span className="h-fit w-full flex flex-row gap-[48px] px-[32px]">
                    <div className="w-[584px] h-full">
                        <img src="photo2.png" className="w-[440px] h-[520px]"></img>
                    </div>
                    <div className="w-[584px] h-fit flex flex-col break-word gap-[16px]">
                        <h2 className="text-[30px] font-[600] Inter text-gray-900">Curious about me? Here you have it:</h2>
                        <p className="text-[16px] font-[400]  Inter text-grey-600">I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.</p>
                        <p className="text-[16px] font-[400] text-grey-600 Inter">I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.</p>
                        <p className="text-[16px] font-[400] text-grey-600 Inter">I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.</p>
                        <p className="text-[16px] font-[400] text-grey-600 Inter">When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.</p>
                        <p className="text-[16px] font-[400] text-grey-600 Inter">Finally, some quick bits about me.</p>
                        <ul className="flex flex-row w-full h-full justify-between">
                            <div className="w-full h-fit flex flex-col justify-between gap-[20px] list-disc">
                                <li>
                                    <p className="text-[16px] font-[400] text-grey-600 Inter">
                                        B.E. in Computer Engineering</p>
                                </li>
                                <li>
                                    <p className="text-[16px] font-[400] text-grey-600 Inter">Full time freelancer</p>
                                </li>
                            </div>
                            <div className="w-full h-fit flex flex-col justify-between gap-[20px] list-disc">
                                <li><p className="text-[16px] font-[400] text-grey-600 Inter">Avid learner</p></li>
                                <li><p className="text-[16px] font-[400] text-grey-600 Inter">Aspiring indie hacker</p></li>
                            </div>
                        </ul>
                        <p className="text-[16px] font-[400]  Inter text-grey-600">One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉</p>
                    </div>
                </span>
            </div>
        </section>
    )
}
