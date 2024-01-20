import { Layout } from "@/components/layouts";

export function IndexPage(props: { initN: number }) {
  return (
    <Layout
      head={
        <>
          <title>index</title>
        </>
      }
    >
      <p class={"font-bold"}>Hello, World!</p>
      <p id="counter">{props.initN}</p>
      <div class={"flex flex-row gap-4"}>
        <button
          type="button"
          hx-post="/counter?plus=-1"
          hx-target="#counter"
          hx-swap="innerHTML"
        >
          -
        </button>
        <button
          type="button"
          hx-post="/counter?plus=1"
          hx-target="#counter"
          hx-swap="innerHTML"
        >
          +
        </button>
      </div>
    </Layout>
  );
}
