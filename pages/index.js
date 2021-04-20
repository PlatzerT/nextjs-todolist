import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col space-y-8 text-center">
      <h1 className="text-4xl">Welcome to this Website!</h1>
      <Link href="/todos">
        <button className="self-center px-4 py-2 font-bold text-white transition duration-75 ease-in-out bg-purple-700 border border-transparent rounded-md hover:border-purple-700 hover:bg-white hover:text-black">
          Create Todos
        </button>
      </Link>
    </div>
  );
}
