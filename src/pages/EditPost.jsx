import { useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../client";
import "./EditPost.css";

const EditPost = ({ data }) => {
  const { id } = useParams();
  const [post, setPost] = useState({
    id: null,
    title: "",
    author: "",
    description: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  async function updatePost(e) {
    e.preventDefault();
    await supabase
      .from("Posts")
      .update({
        author: post.author,
        description: post.description,
      })
      .eq("title", post.title)
      .select();
    window.location = "/";
  }

  async function deletePost(e) {
    e.preventDefault();
    await supabase.from("Posts").delete().eq("title", post.title);

    window.location = "/";
  }
  return (
    <div>
      <form>
        <label htmlFor="title">Title</label> <br />
        <input
          type="text"
          id="title"
          name="title"
          value={post.title}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="author">Author</label>
        <br />
        <input
          type="text"
          id="author"
          name="author"
          value={post.author}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="description">Description</label>
        <br />
        <textarea
          rows="5"
          cols="50"
          id="description"
          name="description"
          value={post.description}
          onChange={handleChange}
        ></textarea>
        <br />
        <input type="submit" value="Submit" onClick={updatePost} />
        <button className="deleteButton" onClick={deletePost}>
          Delete
        </button>
      </form>
    </div>
  );
};

export default EditPost;
