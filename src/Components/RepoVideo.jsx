import { Link } from "react-router-dom"

const RepoVideo = () => {
  return (
    <Link to='/home/1'>
    <div className="px-[100px] py-10">
        <p className="font-work font-semibold text-[#141414BB]">Recent files</p>
        <div className="grid grid-cols-2 justify-center items-center gap-10 mt-4">
            <div className="p-3 border-[1px] border-[#B6B3C6] rounded-3xl">
                <img src="images/frameV.png" alt="frame" className="w-full"/>
                <div className="flex justify-between items-center mt-3">
                    <p className="text-lg text-[#141414] font-semibold font-work">How to create Facebook Ad listing</p>
                    <span className="flex items-center gap-3">
                        <img src="images/link.png" alt="link" />
                        <img src="images/more.png" alt="more" />
                    </span>
                </div>
                <span className="text-[#B6B3C6] font-work">SEPTEMBER 23, 2023</span>
            </div>
        </div>
    </div>
    </Link>
  )
}

export default RepoVideo