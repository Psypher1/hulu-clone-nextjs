import Thumbnail from "./Thumbnail";

export default function Results({ results }) {
  console.log(results);
  return (
    <div className="">
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
      <h1>RESULT</h1>
    </div>
  );
}
