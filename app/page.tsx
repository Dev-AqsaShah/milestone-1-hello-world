import Hello from '@/Components/Home'; // Adjust the path as needed

export default function Home() { // Rename the export function to Home
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Hello /> {/* Render the Hello component */}
    </div>
  );
}
