import React, { useEffect, useState } from "react";
import { getBlogs,deleteBlog } from "../../services/blogService";
import { Link } from "react-router-dom";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch blogs
  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const res = await getBlogs();
      setBlogs(res.data.blogs || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Delete blog
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;

    try {
      await deleteBlog(id);
      fetchBlogs();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
     
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Category</th>
                <th>Author</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {blogs.length > 0 ? (
                blogs.map((blog) => (
                  <tr key={blog._id}>
                    <td>
                      <img
                        src={blog.featuredImage}
                        alt={blog.title}
                        width="60"
                        height="60"
                        style={{ objectFit: "cover" }}
                      />
                    </td>

                    <td>{blog.title}</td>

                    <td>{blog.category}</td>

                    <td>{blog.author?.name}</td>

                    <td>
                      {blog.isPublished ? (
                        <span className="badge bg-success">Published</span>
                      ) : (
                        <span className="badge bg-warning">Draft</span>
                      )}
                    </td>

                    <td>
                      <Link
                        to={`/blog/edit/${blog._id}`}
                        className="btn btn-sm btn-info me-2"
                      >
                        Edit
                      </Link>

                      <button
                        onClick={() => handleDelete(blog._id)}
                        className="btn btn-sm btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center">
                    No Blogs Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default BlogList;