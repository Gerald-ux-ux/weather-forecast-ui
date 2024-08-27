import Card from "@/components/ui/card";
import SideBar from "@/components/ui/side-bar";
import TopBar from "@/components/ui/top-bar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  items-center justify-between p-12 mx-20 ">
      <div className="flex  p-4 gap-4 items-start w-full">
        <SideBar />
        <div className="flex gap-12 w-full flex-col">
          <TopBar />

          <div className="flex gap-3 w-full justify-evenly items-center  px-12">
            <Card cardHeading="21 May" cardBody="Sunny" cardFooter="11-17" />
            <Card cardHeading="21 May" cardBody="Sunny" cardFooter="11-17" />
            <Card cardHeading="21 May" cardBody="Sunny" cardFooter="11-17" />
          </div>
        </div>
      </div>
    </main>
  );
}
