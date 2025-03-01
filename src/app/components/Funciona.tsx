import Image from "next/image";

export default function Funciona(){
    return(
        <div className="py-15 px-10 sm:px-20 lg:px-70 montserrat">
            <h2 className="text-4xl mb-5 dm-serif-text">
                ¿Cómo funciona?
            </h2>
            <p>
                Como ya se mencionó anteriormente, primero dividimos nuestra estructura en dos partes, encontrando un índice en el centro, o &quot;mid&quot;
            </p>
            <p>
                Comparamos ese elemento con lo que estamos buscando, en caso de que sea menor ahora hacemos lo mismo para la mitad izquierda de la estructura, si es mayor lo repetimos en la mitad derecha, y si es igual, lo retornamos.
            </p>
            <p>
                ¿Qué pasa si no lo encuentra? Retornará un indice inválido, o en este caso, -1
            </p>
            <p>
                Este algoritmo tiene una complejidad de O(log n)
            </p>
            <div className="flex justify-center">
                <Image className="mt-5" width={600} height={500} src="/Screenshot 2025-03-01 at 4.15.53 p.m..png" alt="code"/>
            </div>
        </div>
    );
}