import Image from "next/image"

import profilePicture from '../../../../public/images/person.png'

const Avatar = () => {
  return (
    <div className="relative">
        <div className="realtive inline-block rounded-full overflow-hidden h-9 w-9 md:h-11 md:w-11">
          <Image src={profilePicture} alt="Profile picture" className="rounded-full" />
        </div>
        <span className="absolute block rounded-full bg-green-500 ring-1 ring-white top-0 right-0 h-2 w-2 md:h-3 md:w-3" />
    </div>
  )
}

export default Avatar