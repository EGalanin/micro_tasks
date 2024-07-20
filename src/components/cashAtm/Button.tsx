import React from 'react';
import {FilterType} from '../../App';

type ButtonType = {
    nameBtn: string
    callBack: (nameBtn: FilterType) => void
    value: FilterType
}

export const Button = (props: ButtonType) => {

    const onclickHandler = () => {
       props.callBack(props.value)
    }


    return (
        <button onClick={onclickHandler}>{props.nameBtn}</button>
    );
};

