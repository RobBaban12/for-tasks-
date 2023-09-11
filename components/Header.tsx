import Image from 'next/image'


function Header() {
  return (
    <header>
    <p className = "absolute top-20 left-20 w-742 h-96 italic font-semibold font-mono text-24 leading-36 text-neutral-900"> 
    Explore your City, RIde with Ease   It's all about RIDEme</p>  

    <Image 
    src = "Ridemelogo.svg"
    alt="Rideme Logo"
    width={300}
    height={150}
    className=" absolute  right-20"
    />
    
    </header>
    
  )
}




export default Header