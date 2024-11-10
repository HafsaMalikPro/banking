// import Sidebar from "@/components/Sidebar";
// import Image from "next/image";

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const loggedIn = {
//     firstname: 'Hafsa'}
//   return (
//    <main className="flex h-screen w-full font-inter"> 
//    <Sidebar user={loggedIn}/>
//    <div className="size-full flex flex-col">
//     <div className="root-layout">
//       <Image src="/icons/logo.svg" alt="menu icon" width={30} height={30}/>
//     </div>

//    </div>
//    {children}
//    </main>
//   );
// }


import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
// import { getLoggedInUser } from "@/lib/actions/user.actions";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {
     firstname: 'Hafsa'}

  if(!loggedIn) redirect('/sign-in')

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />

      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
