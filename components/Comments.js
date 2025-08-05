export default async function Comments() {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  return <div>500 Comments</div>;
}
