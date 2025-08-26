import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div>
          <div>
            <Header />
          </div>
          <div className=" mx-[auto] sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[1200px] p-4">{children}</div>
        </div>
      </body>
    </html>
  );
}

const Header = () => {
  return (
    <>
      <header className="p-4 bg-amber-300">
        <nav className="flex justify-between ">
          <div>
            <button>
              <Link href={"/"}>DotDotGo</Link>
            </button>
          </div>
          <div>
            <button>
              <Link href={"/user"}>User</Link>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};
