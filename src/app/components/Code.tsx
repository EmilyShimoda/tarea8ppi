
export default function Code ( {text}: {text : string} ){
    return (
        <div className="bg-zinc-50 p-3 rounded-2xl shadow-md my-5 text-center courier-prime text-lg">
            <p> { text } </p>
        </div>
    );
}