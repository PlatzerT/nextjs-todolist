export default function Layout({ children }) {
  return (
    <div className="max-w-xs mx-auto mt-8 sm:max-w-screen-sm md:max-w-screen-5/6">
      {children}
    </div>
  );
}
