import Spline from '@splinetool/react-spline';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const isMobile = useIsMobile();

  return (
    <main className="h-screen w-full">
      {isMobile ? (
        <Spline
          scene="https://prod.spline.design/xFD-6OPw20hmOPHY/scene.splinecode"
        />
      ) : (
        <Spline
          scene="https://prod.spline.design/xFD-6OPw20hmOPHY/scene.splinecode"
        />
      )}
    </main>
  );
};

export default Index;
