import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:3000/blogs/" + id);

  const history = useHistory();

  const backPage = () => history.push("/");

  const handleRedirectToEdit = () => history.push(`/blogs/${id}/edit`);

  const handleClick = () => {
    fetch("http://localhost:3000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="blog-details">
      <div className="row">
        <div className="col-9">
          {isPending && <div>Loading...</div>}
          {error && <div>{error}</div>}
          {blog && (
            <article>
              <h2>{blog.title}</h2>
              <p>Written by {blog.author}</p>
              <div>{blog.body}</div>
              <button onClick={backPage}>Back</button>
              <button onClick={handleRedirectToEdit}>Edit</button>
              <button onClick={handleClick}>Delete</button>
            </article>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
