import { useState } from 'react';
import * as C from './styles';

type Props = {
    onEnter: (taskName: string) => void
}

export const AddArea = ({onEnter}: Props)=>{

    const [inputText, setInputText] = useState('');

    const handleKeyUp = (e: KeyboardEvent)=>{
        if(e.code === 'Enter' && inputText !== ''){
            
        }
    }



    return(
        <C.Container>
            <div className='image'>➕</div>
            <input 
              type="text"
              placeholder='Adicione uma tardefa'
              value = {inputText}
              onChange={e => setInputText(e.target.value)}   
              onKeyUp = {handleKeyUp}  
            />
        </C.Container>
    )

}