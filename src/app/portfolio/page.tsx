import Link from 'next/link';
import Image from 'next/image';

export default function Portfolio() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0 lg:space-x-4 p-4">
      {/* Container 1 */}
      <div className="container1 flex items-center justify-center bg-gradient-to-r from-blue-700 to-yellow-500 text-white p-4 rounded-lg shadow-md">
        <Link href="/" className="logo" style={{ position: 'relative', width: '300px', height: '100px' }}>
          <Image
            src="/images/portfolio 2.jpg"
            alt="Portfolio Logo"
            fill
            className="rounded"
          />
        </Link>
      </div>
      {/* Main Title */}
      <div className="title themed-heading text-center lg:text-left w-full lg:w-auto text-3xl font-bold">
        Syed Mohammad Raza Rizvi
        <div>
          {/* Container 2 */}
          <div className="container2 flex items-center justify-center bg-gradient-to-r from-blue-700 to-yellow-500 text-white p-4 rounded-lg shadow-md">
            <Link href="/" className="logo" style={{ position: 'relative', width: '300px', height: '100px' }}>
              <Image
                src="/images/portfolio 2.jpg"
                alt="Portfolio Logo"
                fill
                className="rounded"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )}