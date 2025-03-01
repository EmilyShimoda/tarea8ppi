 
 import Image from "next/image";
 
 export default function Header(){
    return (
        <div>
            <h1 className="text-7xl pt-20 px-10 sm:px-20 md:px-30 dm-serif-text">Búsqueda Binaria</h1>
            <p className="px-33 text-2xl text-zinc-500 pb-20 montserrat">01/03/2025</p>
            <Image className="w-screen" width={1000} height={400} src="/digitization-5194814_1920.jpg" alt="binary image" />
        </div>
    );
 }