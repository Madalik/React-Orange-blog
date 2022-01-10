import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";
import { Link } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs/" + id);

  const history = useHistory();

  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  // const handleChange = () => {
  //   fetch("http://localhost:8000/blogs" + blog.id, {
  //     method: "PUT",
  //     headers: { "Content-Type": " application/json" },
  //     body: JSON.stringify(blog),
  //   }).then(() => {
  //     console.log("edit blog");
  //   //   history.push("/create");
  //   });
  // };

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>Delete</button>
          <Link to="./edit">
            <button type="button">Edit</button>
          </Link>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
