import { Link } from "react-router-dom";
// import ShowMore from "react-show-more-button";
import ReactReadMoreReadLess from "react-read-more-read-less";

const BlogList = (props) => {
  const blogs = props.blogs;
  const title = props.title;
  const body = props.body;

  return (
    <div className="blog-list">
      <div className="row">
        <div className="col-8">
          <h2>{title}</h2>
          {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
              <Link to={`/blogs/${blog.id}`}>
                <h2>{blog.title}</h2>
                <ReactReadMoreReadLess
                  charLimit={180}
                  readMoreText={"Read more ▼"}
                  readLessText={"Read less ▲"}
                >
                  {blog.body}
                </ReactReadMoreReadLess>

                {/* <ShowMore maxHeight={100}>
                  <p>{blog.body}</p>
                </ShowMore> */}
                {/* <p>Written by {blog.author}</p> */}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
