export const Pagination = ({ page, setPage, totalPokemon }) => {
  const limit = 30;
  const totalPages = Math.ceil(totalPokemon / limit);
  return (
    <div className="flex justify-center items-center gap-2 m-8 ">
      <button
        className="px-3 py-1 border rounded hover:cursor-pointer border-accent text-accent"
        onClick={() => setPage((p) => Math.max(p - 1, 1))}
        disabled={page === 1}
      >
        {"<"}
      </button>

      <button
        className="px-3 py-1 border rounded hover:cursor-pointer border-accent text-accent"
        onClick={() => setPage(1)}
      >
        1
      </button>

      <span className="px-3 py-1 border-3 border-white rounded  text-accent">
        {page}
      </span>

      <button
        className="px-3 py-1 border rounded hover:cursor-pointer border-accent text-accent"
        onClick={() => setPage(totalPages)}
      >
        {totalPages}
      </button>

      <button
        className="px-3 py-1 border rounded hover:cursor-pointer border-accent text-accent"
        onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
        disabled={page === totalPages}
      >
        {">"}
      </button>
    </div>
  );
};
