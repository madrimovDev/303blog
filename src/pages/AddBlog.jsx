import React from 'react'

export const AddBlog = () => {
  return (
    <form>
      <h1>Add Your Blog</h1>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input id='title' type="text" className="form-input" />
      </div>
      <div className="form-group">
        <label htmlFor="desc">Description</label>
        <input id='desc' type="text" className="form-input" />
      </div>
      <div className="form-group">
        <label htmlFor="author">Author</label>
        <input id='author' type="text" className="form-input" />
      </div>
      <button type="submit">Send</button>
    </form>
  )
}