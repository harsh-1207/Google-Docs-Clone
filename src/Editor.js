import React from 'react'
import { useQuill } from 'react-quilljs'
// import { Quill } from 'quill'
import 'quill/dist/quill.snow.css'
import './Editor.css'

function Editor() {
    // const { quill, quillRef } = useQuill();
    const theme = 'snow';
    // const theme = 'bubble';
  
    const modules = {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],
        [{ align: [] }],
    
        [{ list: 'ordered'}, { list: 'bullet' }],
        [{ indent: '-1'}, { indent: '+1' }],
    
        [{ size: ['small', false, 'large', 'huge'] }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ['link', 'image', 'video'],
        [{ color: [] }, { background: [] }],
    
        ['clean'],
      ],
    };

  
    const placeholder = 'Compose an epic...';
  
    const formats = ['size', 'bold', 'italic', 'underline', 'strike'];
  
    const { quillRef } = useQuill({ theme, modules, formats, placeholder });

  return (
    <div>
        <div className='editorr'>
            <div ref={quillRef}/>
        </div>
    </div>
  )
}

export default Editor
