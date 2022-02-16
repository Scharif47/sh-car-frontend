import { useRouter } from "next/router";

function CarPage() {
  const router = useRouter();

  return (
    <div>
      <h1>Car Page</h1>
      <h2>{router.query.slug}</h2>
    </div>
  );
}

export default CarPage;
