import React, {ChangeEvent, useState} from 'react';

// type InputType = {
//     addMessage: (title: string) => void
// }

type InputType = {
    setTitle: (title: string) => void
    title: string
}

export const Input = (props: InputType) => {
    // let [title, setTitle] = useState('');

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        // console.log(event.currentTarget.value);
        // let inputValue = event.currentTarget.value;
        props.setTitle(event.currentTarget.value);
    };

    // const onClickButtonHandler = () => {
    //     props.addMessage(title);
    //     setTitle('');
    //
    // }


    return (
        <>
            <input value={props.title} onChange={onChangeInputHandler}/>
            {/*<button onClick={onClickButtonHandler}>+</button>*/}
        </>
    );
};

