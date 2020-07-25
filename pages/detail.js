import Link from "next/link";

function Detail() {
  return (
    <div>
      Click{" "}
      <Link href="/add">
        <a>here</a>
      </Link>{" "}
      to read more
    </div>
  );
}

export default Detail;
