import Header from "./Header";
import Footer from "./Footer";
import { ComponentWithChildrenType } from "@/types";

const MainLayout = ({ children }: ComponentWithChildrenType) => {
  return (
    <main className="p-8 flex flex-col gap-8 md:gap-16">
      <Header />
      {children}
      <Footer />
    </main>
  )
}

export default MainLayout;
