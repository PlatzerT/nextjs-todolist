export default function Layout({ children }) {
  return (
    <div className="container max-w-xs sm:max-w-screen-md mx-auto mt-8">
      {children}
    </div>
  );
}
