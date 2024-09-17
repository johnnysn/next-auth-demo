import { getServerSession } from "next-auth";

export default async function ProfilePage() {
  const session = await getServerSession();

  return (
    <div className="text-center">
      Hello, <span className="font-semibold">{session?.user?.name}</span>.{" "}
      <br />
      Your email is{" "}
      <span className="font-semibold">{session?.user?.email}</span>.
    </div>
  );
}
