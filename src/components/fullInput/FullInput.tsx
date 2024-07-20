import React, {useState} from 'react';
import {Input} from './Input';
import {Button} from './Button';

type MessageType = {
    message: string
}

export const FullInput = () => {
    let [message, setMessage] = useState<MessageType[]>([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'}
    ])

    let [title, setTitle] = useState('');
    console.log(title);

    const addMessage = (title: string) => {
        console.log(`Прозвонил! : ${title}`)
        let newMessage = {message: title};
        setMessage([newMessage, ...message]);

    }

    const callBackButtonHandler = () => {
        addMessage(title);
        setTitle('');
    }

    return (
        <div>
            {/*<Input addMessage={addMessage} />*/}
            <Input setTitle={setTitle} title={title}/>
            <Button name={'+'} callBack={callBackButtonHandler} />

            {message.map((item, index) => {
                return (
                    <div key={index}>{item.message}</div>
                )
            })}

        </div>
    );
};

