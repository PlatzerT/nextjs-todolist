import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col space-y-8 text-center">
      <h1 className="text-4xl">Welcome to this Website!</h1>
      <Link href="/todos">
        <button className="font-bold self-center border border-transparent bg-purple-700 text-white py-2 px-4 rounded-md hover:border-purple-700 hover:bg-white hover:text-black transition duration-75 ease-in-out">
          Create Todos
        </button>
      </Link>
    </div>
  );
}
