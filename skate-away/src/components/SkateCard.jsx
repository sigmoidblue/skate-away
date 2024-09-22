import { useState } from "react"

const SkateCard = ({ imgURL, changeBigSkateImage, bigSkateImg }) => {

    const [isHovered, setIsHovered] = useState(false);

    const handleClick = () => {
        if(bigSkateImg !== imgURL.bigSkate){
            changeBigSkateImage(imgURL.bigSkate)
        }
    }

    const handleMouseEnter = () => {
      setIsHovered(true);
    }

    const handleMouseLeave = () => {
      setIsHovered(false);
    }

  return (
    <div className={`border-2 rounded-xl
       ${bigSkateImg === imgURL.bigSkate
            ? 'border-purple' 
            : 'border-transparent'
          } cursor-pointer max-sm:flex-1 transition-all duration-300
          ${isHovered ? "transform scale-105" : ""}
        `}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >

      <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
        <img
          src={imgURL.thumbnail}
          alt='shoe colletion'
          width={127}
          height={103}
          className='object-contain'
      />
      </div>
    </div>
  )
}

export default SkateCard;
