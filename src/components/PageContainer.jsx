export default function PageContainer({ children }) {
  return (
    <main className="bg-slate-900 text-slate-100 min-h-screen
      pt-24 md:pt-32 pb-24 md:pb-32 px-6">
      {children}
    </main>
  );
}
