import React, { useState } from 'react'
//import quill 
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const EditPost = () => {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('Uncategorized')
  const [thumbnail, setThumbnail] = useState('')
  const [description, setDescription] = useState('')

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  }

const  formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image',
]

const POST_CATEGORIES = ['Uncategorized', 'Programming', 'Travel', 'Lifestyle', 'Health', 'Food', 'DIY', 'Culture', 'Business', 'Marketing', 'Photography']


  return (
    <section className="create-post">
      <div className="container">
        <h2>Edit Post</h2>
        <p className="form__error_message">This is an error message</p>
        <form action="" className="form create-post__form">
          <input type="text" placeholder="Title" name='title' value={title} onChange={(e) => setTitle(e.target.value)} autoFocus/>

          <select name="category" id="" value={category} onChange={(e) => setCategory(e.target.value)}>
{
  POST_CATEGORIES.map(category => <option key={category} value={category}>{category}</option>)
}
          </select>

          <ReactQuill theme='snow' value={description} onChange={setDescription} modules={modules} formats={formats} />
          <input type="file"  name='thumbnail'  onChange={(e) => setThumbnail(e.target.files[0])} accept='png,jpg,jpeg'/>
       
          <button type="submit" className='btn primary'>Update</button>
          
        </form>
      </div>
    </section>
  )
}

export default EditPost