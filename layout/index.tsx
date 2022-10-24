import Head from "next/head";
import MotionBox from "../components/motion/MotionBox";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({
  children,
  title,
  description,
}: {
  children: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <MotionBox maxWidth={"1440px"} mx="auto">
        <Header />
        <MotionBox
          as="main"
          height="calc(100vh - 200px)"
          px={{
            base: 6,
            md: 10,
          }}
        >
          {children}
        </MotionBox>
        <Footer />
      </MotionBox>
    </>
  );
}
