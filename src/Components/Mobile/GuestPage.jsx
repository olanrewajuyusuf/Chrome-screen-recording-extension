
const GuestPage = () => {
  return (
    <div className="sm:hidden px-5 pt-10 pb-5">
        <h1 className="font-sora text-3xl font-bold">Show them <br />Don't Just Tell</h1>
        <p className="text-[#120B48] font-work mt-5">Help your friends and loved ones by creating and sending videos on how to get things done on a website.</p>
        <div className="bg-[#f1f1f1] mt-10 border-[#B6B3C6] border-[1px] font-inter text-sm rounded-md px-[10px] flex justify-between items-center py-[10px]">
            <span>Record Camera</span>
            <div className="bg-[#B6B3C6] w-12 rounded-xl py-[2px] pr-[2px]">
                <div className="w-5 h-5 rounded-full bg-white float-right"></div>
            </div>
        </div>
        <div className="bg-[#f1f1f1] mt-5 border-[#B6B3C6] border-[1px] font-inter text-sm rounded-md px-[10px] flex justify-between items-center py-[10px]">
            <span>Record Screen</span>
            <div className="bg-[#120B48] w-12 rounded-xl py-[2px] pr-[2px]">
                <div className="w-5 h-5 rounded-full bg-white float-right"></div>
            </div>
        </div>
        <div className="bg-[#f1f1f1] mt-5 border-[#B6B3C6] border-[1px] font-inter text-sm rounded-md px-[10px] flex justify-between items-center py-[10px]">
            <span>Record Audio</span>
            <div className="bg-[#120B48] w-12 rounded-xl py-[2px] pr-[2px]">
                <div className="w-5 h-5 rounded-full bg-white float-right"></div>
            </div>
        </div>
        <div className="mt-5">
            <p className="font-work text-sm">Who would you like to send recording to?</p>
            <input 
            type="text" 
            placeholder="johnmark@gmail.com" 
            className="border-[#B6B3C6] border-[1px] rounded-md w-full p-[10px] font-work mt-2"
            />
        </div>

        <button className="bg-[#120B48] text-white py-2 px-3 font-work rounded-lg float-right mt-20">Start Recording</button>
    </div>
  )
}

export default GuestPage