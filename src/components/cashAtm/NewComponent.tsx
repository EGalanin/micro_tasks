import React from 'react';
import {FilterType} from '../../App';
import {Button} from './Button';

type stateType = {
    banknots: string
    value: number
    number: string
}

type NewComponent = {
    onclickfilterHandler: (nameBtn: FilterType) => void
    curentMoney: stateType[]

}

export const NewComponent = (props: NewComponent) => {

    return (
        <>
            <ul>
                {props.curentMoney.map((item:stateType, index: number) => {
                        return (
                            <li key={index}>
                                <span>{item.banknots}</span>
                                <span>{item.value}</span>
                                <span>{item.number}</span>
                            </li>
                        )
                    }
                )}
            </ul>
            <div style={{paddingLeft: "40px"}}>
                <Button nameBtn={'All'} callBack={props.onclickfilterHandler} value={'All'}/>
                <Button nameBtn={'Dollars'} callBack={props.onclickfilterHandler} value={'Dollars'}/>
                <Button nameBtn={'RUBLS'} callBack={props.onclickfilterHandler} value={'RUBLS'}/>
            </div>
        </>
    );
};

