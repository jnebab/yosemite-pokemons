import { useEffect } from "react";
import { useHydratedAtom } from "../atoms";

export default function useIsMounted() {
  const [hasMounted, setHasMounted] = useHydratedAtom();
  useEffect(() => {
    setHasMounted(true);
  }, []);

  return hasMounted;
}
