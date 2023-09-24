import RootLayout from "./layout";
import Hero from "./components/home/hero";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <Hero/>
            </div>
        </section>
    </main>
  )
}


