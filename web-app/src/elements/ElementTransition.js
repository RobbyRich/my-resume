import { Transition } from '@headlessui/react';

function ElementTransition(props) {
    let enter = `transition-opacity duration-500`;
    
    if(props.delay)
        enter += ` delay-${props.delay}`;

    const show = props.show;
    return (
        
        <Transition
            appear={true}
            show={show}
            enter={enter}
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"

        >
            {props.children}
        </Transition>
    );
}

export default ElementTransition;