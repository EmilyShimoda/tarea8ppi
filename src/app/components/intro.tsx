import Code from "./Code";

export default function Intro (){
    return (
    <div className="py-15 px-10 sm:px-20 lg:px-70 montserrat">
        <p>
            Si quisiera buscar el número 8 en el siguiente arreglo:
        </p>
        <Code text="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"/>
        <p>
            Normalmente comparararías todos los elementos del arreglo hasta encontrar el que estas buscando, y en el peor de los casos, llegarías al final del arreglo sin encontrarlo.
        </p>
        <p>
            A esta técnica se le llama Búsqueda lineal y tiene una complejidad de O(n) siendo n el tamaño del arreglo. Una manera mas rápida de hacerlo es utilizando búsqueda binaria.
        </p>
    </div>
    );
}