import { useState, useEffect } from "react";
import {useHistory, useParams} from "react-router-dom";


const Edit = () => {
  const { id } = useParams();
  const history = useHistory();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/blogs/${id}`)
      .then((res) => {
        if (res) {
          return res.json();
        }
      })
      .then((data) => {
        if (data) {
          console.log(data);
          setTitle((state) => data.title || state);
          setBody((state) => data.body || state);
          setAuthor((state) => data.author || state);
          setIsPending(false);
        }
      }); 
},[])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    fetch(`http://localhost:3000/blogs/${id}`, {
      method: "PUT",
      headers: { "Content-Type": " application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      history.push(`/blogs/${id}`);
    });
  };

  return (
    <div className="create">
      <div className="row">
        <div className="col">
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
              rows={8}
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
            <label>Blog author:</label>
            <select value={author} onChange={(e) => setAuthor(e.target.value)}>
              <option value="Mari">Mari</option>
              <option value="Lola">Lola</option>
            </select>

            <button disabled={isPending}>
              {(isPending && "Loading...") || "Edit blog"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
