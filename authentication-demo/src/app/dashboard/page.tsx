import { auth, currentUser } from "@clerk/nextjs/server";

export default async function Dashboard() {
  const authObject = await auth();
  const userObject = await currentUser();

  console.log({ authObject, userObject });
  return <h1>Dashboard</h1>;
}
