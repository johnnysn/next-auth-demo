import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();

  return (
    <div className="w-full flex flex-col items-center">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Next Auth Demo</h1>
        <p>Next Auth integration with Spring Auth Server</p>
      </div>

      {session ? (
        <a
          href="/api/auth/signout"
          className="rounded bg-cyan-600 text-white hover:bg-cyan-500 px-12 py-4"
        >
          Sign Out
        </a>
      ) : (
        <a
          href="/api/auth/signin"
          className="rounded bg-cyan-600 text-white hover:bg-cyan-500 px-12 py-4"
        >
          Sign In
        </a>
      )}
    </div>
  );
}
