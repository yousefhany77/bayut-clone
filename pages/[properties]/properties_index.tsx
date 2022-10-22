import { useRouter } from "next/router";

function PropertiesPage() {
  const router = useRouter();
  return <pre>{JSON.stringify(router.query,null,2)}</pre>;
}

export default PropertiesPage;
