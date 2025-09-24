import ProductDetail from "@/app/components/productDetail";


export default async function Page({ params }) {
  const { id } = await params; // ✅ unwrap params here
  return <ProductDetail id={id} />;
}
