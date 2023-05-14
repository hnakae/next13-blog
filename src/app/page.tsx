// import { AuthRequiredError } from "@/lib/exceptions";
// import Image from "next/image";

import { prisma } from "../../lib/prisma";

// const session = null;

// async to use prisma in server component within App router
// if it were regular pages router, we need to export getServerSideProps function for props
export default async function Home() {
  const users = await prisma.user.findMany();
  // if (!session) throw new Error("Auth is required to access this page");
  // if (!session) throw new AuthRequiredError();
  return (
    <>
      <div>All users:</div>
      <div>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              name: {user.name} email: {user.email}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
