function Skill(props) {
    let size = 30;
    let classStyle = 'p-2 sm:w-1/4 w-1/2';
    if(props.class) {
        classStyle = props.class;
    }
    if(props.size) {
        size = props.size;
    }
    return (
        <div class={classStyle}>
        <div class="bg-gray-100 shadow-xl rounded flex p-2 h-full items-center">
        <span class="title-font font-medium pl-2">{props.label}</span>
    </div>
    </div>
);
}

export default Skill;