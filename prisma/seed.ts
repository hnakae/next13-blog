import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const post1 = await prisma.post.upsert({
    where: { id: 1 },
    update: {},
    create: {
      title: "post1",
      content: "content1",
    },
  });
  const post2 = await prisma.post.upsert({
    where: { id: 2 },
    update: {},
    create: {
      title: "post2",
      content: "content2",
    },
  });
  const post3 = await prisma.post.upsert({
    where: { id: 3 },
    update: {},
    create: {
      title: "post3",
      content: "content3",
    },
  });
  // console.log({ post });
}
main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
