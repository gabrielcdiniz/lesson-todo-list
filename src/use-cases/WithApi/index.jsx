export function WithApi() {
  return (
    /**
     * abrace o conteúdo de App com o componente TodoProvider que criamos para que o contexto seja compartilhado
     */
    <TodoProvider>
      <main className="App">
        <section className="App__Section">
          {/* <FormWithApi /> */}

          {/* <ListWithApi /> */}
        </section>

        <aside>{/* <ListReadonlyWithApi /> */}</aside>
      </main>
    </TodoProvider>
  );
}
