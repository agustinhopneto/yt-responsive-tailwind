/* eslint-disable @next/next/no-img-element */

const data = new Array(30).fill({}).map((item, index) => ({
  id: index + 1,
  name: `Produto de tecnologia ${index + 1}`,
  price: 'R$120,00',
  image:
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
}));

export default function Home() {
  return (
    <main>
      <nav className="w-full p-4">
        <div className="mx-auto flex max-w-screen-lg items-center">
          <span className="color-zinc-800 hidden text-lg font-bold leading-normal sm:block">
            devclub
            <br />
            store.
          </span>

          <div className="ml-auto flex w-full max-w-lg items-center gap-2">
            <input
              placeholder="Digite sua busca..."
              className="placeholder:zinc-400 color-zinc-600 h-11 w-full rounded border border-zinc-300 px-3 outline-0 transition-colors focus:border-cyan-500"
            />
            <button className="h-11 rounded bg-cyan-500 px-4 text-white transition-colors hover:bg-cyan-700">
              Buscar
            </button>
          </div>
        </div>
      </nav>

      <section className="mx-auto max-w-screen-lg p-4">
        <h1 className="mb-6 text-2xl font-bold text-zinc-700">
          Lista de produtos
        </h1>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {data.map((item) => (
            <div key={item.id}>
              <img
                className="w-full rounded"
                src={item.image}
                alt={item.name}
              />
              <p className="mt-2 text-xl font-medium text-zinc-700 lg:text-lg">
                {item.name}
              </p>
              <span className="text-xl font-bold text-cyan-700">
                {item.price}
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
