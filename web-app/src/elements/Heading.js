
function Heading(props) {

    let width = 64;

    if(props.width) {
        width = props.width;
    }

    return (
        <div>
            <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                {props.label}
        </h1>
            <div class="w-full mb-4">
                <div class={`h-1 mx-auto gradient w-${width} opacity-25 my-0 py-0 rounded-t`}></div>
            </div>

        </div>
    );
}

export default Heading;