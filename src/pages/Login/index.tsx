import { Input } from "../../components/Input";
import { CardButton } from "../../components/Products/ProductCard/CardButton";
import { MainTemplate } from "../../templates/MainTemplate";

export function Login() {
  return (
    <MainTemplate>
      <section className="flex items-center p-20 justify-center h-full w-full">
        <div className="flex items-center justify-center h-[800px] w-[1000px] bg-white rounded shadow-md">
          <div className="flex flex-col gap-6 w-100">
            <h1 className="text-[36px] text-center text-sky-950">
              Entre para continuar suas compras
            </h1>
            <form className="mt-15 flex flex-col justify-center items-center gap-6">
              <div className="flex flex-col gap-6 w-full mb-5">
                <Input type="email" placeholder="Seu e-mail" />
                <Input type="password" placeholder="Sua senha" />
                {/* Botão de "Manter-se conectado" */}
              </div>
              <CardButton>Entrar</CardButton>
              <span>ou</span>
              <CardButton>Cadastrar</CardButton>
            </form>
          </div>
        </div>
      </section>
    </MainTemplate>
  );
}
