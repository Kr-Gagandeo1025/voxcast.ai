import Image from "next/image"

const ArtistLogo = () => {
  return (
    <div className="flex flex-col">
        <Image src={"/images/demopodcst.png"} height={100} width={100} alt="artist dp" className="rounded-full min-h-[70px]"/>
        <span>@username</span>
    </div>
  )
}

export default ArtistLogo
