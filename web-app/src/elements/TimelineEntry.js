function TimelineEntry(props) {
    const year = props.year;
    const title = props.title;
    const company = props.company;

    return (
        <div class="flex relative pb-12">
            <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10 font-bold">
                {year}
            </div>
            <div class="flex-grow pl-4 pt-2">
                <div class="flex flex-row justify-between">
                    <h2 class="font-semibold title-font text-md text-gray-800 mb-1 tracking-wider">{title}</h2>
                    <h2 class="font-medium title-font text-md text-gray-800 mb-1 tracking-wider pr-10">{company}</h2>
                </div>
                {props.children}
            </div>
        </div>
    );
}

export default TimelineEntry;