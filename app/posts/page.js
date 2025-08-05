import Link from "next/link";

export const metadata = {
  title: "Posts",
};

const Posts = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=50"
  );
  const posts = await response.json();
  console.log(posts);

  return (
    <>
      <nav>
        <ul className="navbar">
          <li>
            <Link href="/" className="nav-link ">
              Home
            </Link>
          </li>
          <li>
            <Link href="/blogs" className="nav-link">
              Blogs
            </Link>
          </li>
          <li>
            <Link href="/about" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link href="/posts" className="nav-link active">
              Posts
            </Link>
          </li>
          <li>
            <Link href="/services" className="nav-link">
              Services
            </Link>
          </li>
        </ul>
      </nav>
      <h1>Posts</h1>
      <div className="posts-container">
        {posts.map(({ id, title, body }) => (
          <div className="post-card" key={id}>
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Posts;
