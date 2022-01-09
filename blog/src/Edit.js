import { useState } from "react";

const Edit = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    console.log(blog);

    fetch("http://localhost:8000/blogs" + blog.id, {
      method: "PUT",
      headers: { "Content-Type": " application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("edit blog");
     
    });

    return (
      <div className="create">
        <h2>Edit Blog</h2>
        <form onSubmit={handleSubmit}>
          <label>Blog title:</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Blog body:</label>
          <textarea
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <label>Blog author:</label>
          <select value={author} onChange={(e) => setAuthor(e.target.value)}>
            <option value="mario">mario</option>
            <option value="yoshi">yoshi</option>
          </select>
        </form>
      </div>
    );
  };
};

export default Edit;
