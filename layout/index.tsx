import MotionBox from "../components/motion/MotionBox";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <MotionBox maxWidth={"1440px"} mx="auto">
      <Header />
      <MotionBox as="main" height="calc(100vh - 200px)" px={10}>
        {children}
      </MotionBox>
      <Footer />
    </MotionBox>
  );
}
