import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'; 




 function TextEditor(){
const UpClick=()=>{
    let newText = Text.toLocaleUpperCase()
    setText(newText)

}
const loClick=()=>{
    let newText = Text.toLocaleLowerCase()
    setText(newText)

}
const handleOnChang = (event)=>{
    setText(event.target.value)
} 

const px=(event)=>{
    let newText = Text.fontsize + "px"
    setText(newText)

}

const [Text, setText]= useState('')
    return(
        <>
        <Container className='mt-3 ' >
      <Form.Control value={Text} onChange={handleOnChang} as="textarea"style={{ height: '150px' }}
       placeholder='Text Here' />

 <button onClick={UpClick} className='mt-3' >Upper Case</button>
 <button onClick={loClick} className='mt-3 mx-1' >Lower Case</button>
 <input type="number" min="1" max="100" value={16} onClick={px}  />




        </Container>
        
        
        
        
        
        
        
        
        </>
    )
 }

 export default TextEditor 