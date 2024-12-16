import { MainLayout } from "@/layouts";
import { DialogProvider } from "@/context";
import { ToastContainer } from 'react-toastify';
import { BolehJe, WhyBolehJe, Relaje, AnatomyOfBolehJe, MoreFeatures, GooglePlay, GetInTouch } from "@/features";

const HomePage = () => {
  return (
    <DialogProvider>
      <MainLayout>
        <div className="max-w-[1200px] mx-auto flex flex-col gap-4">
          <div className="grid gap-10 grid-cols-12">
            <div className="flex flex-col gap-10 col-span-5">
              <BolehJe />
              <Relaje />
            </div>
            <div className="flex flex-col gap-6 col-span-7">
              <WhyBolehJe />
              <AnatomyOfBolehJe />
            </div>
          </div>
          <div className="grid gap-10 grid-cols-12">
            <div className="flex gap-10 col-span-5">
              <MoreFeatures />
            </div>
            <div className="flex gap-10 col-span-7">
              <GooglePlay />
              <GetInTouch />
            </div>
          </div>
        </div>
      </MainLayout>
      <ToastContainer/>
    </DialogProvider>
  );
}

export default HomePage;
