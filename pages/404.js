import { useEffect } from "react";
import { useRouter } from "next/router";
const Errorpage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <>
      <div>
        <h1>Error page</h1>
        <a
          onClick={() => {
            router.push("/");
          }}
        >
          back to home page
        </a>
      </div>
    </>
  );
};

export default Errorpage;
