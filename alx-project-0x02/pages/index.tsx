// pages/index.tsx
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen p-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to Next.js Project Setup</h1>
        <p className="text-lg text-gray-600">
          This is the home page of your basic Next.js project.
        </p>
      </main>
    </>
  );
}
