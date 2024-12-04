import { FormWithContext } from "./components/Form";
import { ListWithContext } from "./components/List";
import { ListReadonlyWithContext } from "./components/ListReadonly";
import { TodoProvider } from "./contexts/TodoContext";

import "./WithContext.css";

export function WithContext() {
  return (
    /**
     * abrace o conteúdo com o componente TodoProvider que criamos para que o contexto seja compartilhado
     */
    <TodoProvider>
      <FormWithContext />

      <main className="WithContext">
        <section className="WithContext__Section">
          <ListWithContext />
        </section>

        <aside className="WithContext__Section">
          <ListReadonlyWithContext />
        </aside>
      </main>
    </TodoProvider>
  );
}
