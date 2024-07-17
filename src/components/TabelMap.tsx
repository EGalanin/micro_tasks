import React from 'react';

type TabelMapType = {
    manufacturer: string
    model: string
}

type TopCarType = {
    topCars: Array<TabelMapType>
}

export const TabelMap = (props: TopCarType) => {
    return (
        <>
            {props.topCars.map((item, index) => {
                return (
                    <>
                        <table>
                            <tr>
                                <th>{item.manufacturer}</th>
                                <th>{item.model}</th>
                            </tr>
                        </table>
                    </>
                )
            })}
        </>
    )
};

