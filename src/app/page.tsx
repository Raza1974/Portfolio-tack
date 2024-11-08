import Image from "next/image";
import './globals.css';

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
    
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Welcome to My Portfolio</h2>
            <p className="text-gray-700 mb-4">
              I am a passionate software developer specializing in web development, AI, and various programming technologies. My portfolio showcases a range of projects that demonstrate my skills in crafting efficient and scalable solutions for real-world problems.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center items-start">
            <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-lg">
              <Image
                src="/images/profile.jpg" // Path to image without query params
                alt="Profile picture"
                width={256}
                height={256}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
