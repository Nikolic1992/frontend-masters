export default async function getPastOrders(page) {
  const reponse = await fetch(`/api/past-orders?page=${page}`);
  const data = await reponse.json();
  return data;
}
