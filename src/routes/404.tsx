import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/404")({
  component: App,
});

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl">Page Not Found</p>
    </div>
  );
}
