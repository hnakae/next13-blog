import axios from "axios";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const page = async () => {
  await wait(3000);

  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  // throw new Error("This is an error");

  return <div>{JSON.stringify(data)}</div>;
};

export default page;
