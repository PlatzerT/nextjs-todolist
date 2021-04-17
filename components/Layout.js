export default function Layout({ children }) {
  return (
    <div className="container mx-auto w-5/6">
      <p className="text-4xl text-center">TodoList</p>
      {children}
    </div>
  );
}
