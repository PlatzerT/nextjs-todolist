export default function Layout({ children }) {
  return (
    <div className="max-w-xs sm:max-w-screen-sm md:max-w-screen-5/6 mx-auto mt-8">
      {children}
    </div>
  );
}
