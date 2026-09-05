import { useAuth } from "@clerk/react";
import { useState, useEffect } from "react";
import { Loader } from 'lucide-react'
import { axiosInstance } from "../lib/axios.ts";
import { useAuthStore } from "../stores/useAuthStore";

const updateApiToken = (token: string | null) => {
  if (token)
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  else delete axiosInstance.defaults.headers.common["Authorization"];
};

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const { getToken, isSignedIn } = useAuth();
  const { checkAdminStatus, reset } = useAuthStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      try {
        const token = await getToken();
        updateApiToken(token);

        if (isSignedIn) {
          await checkAdminStatus();
        } else {
          reset();
        }
      } catch (error) {
        console.log("Error in auth provider", error);
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, [getToken, isSignedIn]);

  if (loading) return (
    <div className="h-screen w-full flex items-center justify-center">
      <Loader className='size-8 text-emerald-500 animate-spin' />
    </div>
  )

  return <div>{children}</div>;
}