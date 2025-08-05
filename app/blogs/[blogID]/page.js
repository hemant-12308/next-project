import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { blogID } = await params;
  return {
    title: `Blog ${blogID}`,
  };
}

const Blog = async ({ params }) => {
  const { blogID } = await params;
  if (!/^\d+$/.test(blogID)) {
    notFound();
  }
  console.log("blogID:", blogID);
  return (
    <>
      <nav>
        <ul className="navbar">
          <li>
            <Link href="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link href="/blogs" className="nav-link active">
              Blogs
            </Link>
          </li>
          <li>
            <Link href="/about" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link href="/posts" className="nav-link">
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
      <div>
        <h1>Welcome to Our Blog {blogID}</h1>
        <p>This is blog {blogID} page.</p>
      </div>
    </>
  );
};

export default Blog;
