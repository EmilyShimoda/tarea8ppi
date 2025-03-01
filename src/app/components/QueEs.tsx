

export default function QueEs(){
    return (
        <div className="py-15 px-10 sm:px-20 lg:px-70 montserrat bg-gray-100">
            <h2 className="text-4xl mb-5 dm-serif-text">¿Qué es Búsqueda Binaria?</h2>
            <p>
                La búsqueda binaria es un algoritmo eficiente para encontrar un elemento en una lista <b>ordenada</b>. Funciona dividiendo repetidamente la lista en dos mitades y comparando el elemento buscado con el valor central
            </p>
            <p>
                Para aplicar este algoritmo es necesario que:
            </p>
            <ul className="list-disc pl-4">
                <li>La estructura debe estar ordenada</li>
                <li>El acceso a cualquiera elemento de la estrcutura debe ser en tiempo lineal</li>
            </ul>
        </div>
    );
}