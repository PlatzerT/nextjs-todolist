import Link from 'next/link';

export default function Todo({ todo }) {
  const { name, description, id } = todo;
  return (
    <div>
      <Link href={`/todos/${id}`}>
        <div className="border border-gray-100 shadow-sm p-6 hover:border-gray-600 hover:shadow-md transition duration-75 ease-in-out cursor-pointer">
          <h2 className="text-2xl">{name}</h2>
          <p className="text-gray-600 mt-2">{description}</p>
        </div>
      </Link>
    </div>
  );
}
