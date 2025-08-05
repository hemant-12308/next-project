import Comments from "@/components/Comments";
import Likes from "@/components/Likes";
import Loading from "@/components/Loading";
import Views from "@/components/Views";
import Link from "next/link";
import { Suspense } from "react";

export const metadata = {
  title: "Blogs",
};

export default function Blogs() {
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
        <h1>Welcome to Our Blog</h1>
        <ol className="blog-links">
          <li>
            <Link href="/blogs/1">Blog 1</Link>
          </li>
          <li>
            <Link href="/blogs/2">Blog 2</Link>
          </li>
          <li>
            <Link href="/blogs/3">Blog 3</Link>
          </li>
        </ol>
      </div>
      <div className="blog-links">
        <br />
        <Suspense fallback={<Loading>Views</Loading>}>
          <Views />
        </Suspense>
        <Suspense fallback={<Loading>Likes</Loading>}>
          <Likes />
        </Suspense>
        <Suspense fallback={<Loading>Comments</Loading>}>
          <Comments />
        </Suspense>
      </div>
    </>
  );
}
