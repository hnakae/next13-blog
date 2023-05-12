import { NextRequest } from "next/server";

export const runtime = "edge";
//faster but things like prisma that are rust under the hood aren't compatible in edge runtime.

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const mysearchparam = searchParams.get("mysearchparam");
  console.log(mysearchparam);
  //   console.log("GET REQUEST");
  return new Response(JSON.stringify({ message: "Hello World" }), {
    headers: {
      "content-type": "application/json",
    },
  });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log("POST REQUEST", body);
  return new Response("OK");
}
