export const Header = () => {
    return (
            <header className='w-full h-fit py-[16px] bg-white'>
                <div className='w-[1280px] h-[36px] px-[32px] m-auto bg-white flex items-center justify-between'>
                    <h1 className='text-[30px]'>SS</h1>
                    <div className="w-[554px] h-[30px] flex items-center justify-between">
                        <span className="flex items-center gap-[24px] w-fit h-full">
                            <p>About</p>
                            <p>Work</p>
                            <p>Testimonials</p>
                            <p>Contact</p>
                        </span>
                        <span className="w-full h-full flex items-center gap-[16px] justify-end">
                            <img src="./sun.png"></img>
                            <button className="w-[136px] h-full bg-gray-900 rounded-[12px] text-gray-50 font-[500] text-[16px] Inter">Download CV</button>
                        </span>
                        
                    </div>
                </div>
            </header>
    )
}
