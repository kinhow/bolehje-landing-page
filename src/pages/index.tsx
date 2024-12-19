import { MainLayout } from "@/layouts";
import { DialogProvider } from "@/context";
import { ToastContainer } from 'react-toastify';
import { BolehJe, WhyBolehJe, Relaje, AnatomyOfBolehJe, MoreFeatures, GooglePlay, GetInTouch } from "@/features";

const HomePage = () => {
  return (
    <DialogProvider>
      <MainLayout>
        <div className="lg:max-w-[1200px] mx-auto flex flex-col gap-8 lg:gap-4">
          <div className="grid gap-8 lg:gap-10 lg:grid-cols-12">
            <div className="flex flex-col gap-10 lg:col-span-5">
              <BolehJe />
            </div>
            <div className="flex flex-col gap-6 lg:col-span-7">
              <WhyBolehJe />
            </div>
          </div>

          <div className="grid gap-8 lg:gap-10 lg:grid-cols-12">
            <div className="flex flex-col gap-10 lg:col-span-5">
              <Relaje />
            </div>
            <div className="flex flex-col gap-6 lg:col-span-7">
              <AnatomyOfBolehJe />
            </div>
          </div>

          <div className="grid gap-8 lg:gap-10 lg:grid-cols-12">
            <div className="lg:flex lg:gap-10 lg:col-span-5">
              <MoreFeatures />
            </div>
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 lg:col-span-7">
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
