import { useRouter } from 'next/router';
import Button from '../components/Button'; 
import { IoArrowBack } from "react-icons/io5";

export default function ErrorPage() {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center text-center h-96 flex-col">
      <h1 className="font-bold mb-4 text-5xl">
        Error 404: This page does not exist.
      </h1>

      <Button onClick={router.back} className="mt-4">
        <IoArrowBack />
        Go back
      </Button>
    </div>
  );
}
