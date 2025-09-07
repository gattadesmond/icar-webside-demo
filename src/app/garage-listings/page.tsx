import Header from "@/components/organisms/Header";

import Footer from "@/components/organisms/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <Header />

      <div className="flex h-[calc(100vh-64px)]">

        <div className="w-1/2">
          <div className="flex h-full">
            <div className="h-full bg-red-500  w-full"></div>
          </div>


        </div>
        <div className="w-1/2">
          <div className="h-full bg-blue-500 w-full"></div>
        </div>
      </div>


      {/* Footer */}
      < Footer />
    </div >
  );
}
