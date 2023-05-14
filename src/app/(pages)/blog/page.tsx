// import { AuthRequiredError } from "@/lib/exceptions";
// import Image from "next/image";

import Link from "next/link";
import { prisma } from "../../../../lib/prisma";
// import PokemonTable from "@/components/PokemonTable";
// import SSRPokemonTable from "@/components/SSRPokemonTable";

// import { store } from "@/store";
// import { setStartupPokemon } from "@/store/searchSlice";

// const session = null;

// async to use prisma in server component within App router
// if it were regular pages router, we need to export getServerSideProps function for props
export default async function Home() {
  const posts = await prisma.post.findMany();
  //   const req = await fetch("http://localhost:3000/api/search");
  //   const data = await req.json();

  // store.dispatch(setStartupPokemon(data));
  // if (!session) throw new Error("Auth is required to access this page");
  // if (!session) throw new AuthRequiredError();
  return (
    <>
      <div className="px-4 bg-slate-200 min-h-screen">
        <div className="flex justify-center">
          <ul className="flex space-x-4">
            {posts &&
              posts.map((post) => (
                <Link href={`/post/${post.id}`} key={post.id}>
                  <li className="outline p-4 mb-4">
                    Title: {post.id}
                    <br /> Content: {post.content}
                  </li>
                </Link>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}

//STUFF I COULD DO

/**
 *  render <BlogPage posts={posts} />
 *
 * -------------------------------------
 *
 * import layout, post, react-hook-form,
 *
 * <BlogPage /> BlogPage.tsx const BlogPage = ({ blogs}) =>
 *
 * <layout>
 *   <h1>Blog</h1>
 *   <form onSubmit={handleSubmit}>
 *     add a post
 *
 *   <ul>
 *     blogs && blogs.map
 *     <li>
 *        <Post post={post} />
 *     posts list
 * </layout>
 */
