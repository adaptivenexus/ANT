"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const NotFountPage = () => {
  const router = useRouter();

  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    const redirectTimer = setTimeout(() => {
      router.back();
    }, 3000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimer);
    };
  }, []);

  return (
    <div className="heading-2 h-[30vh] flex items-center justify-center">
      <p>Page Not Found. Redirecting in {countdown}...</p>
    </div>
  );
};
export default NotFountPage;
