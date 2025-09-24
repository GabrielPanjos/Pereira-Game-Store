import { Input } from "../../components/Input";
import { CardButton } from "../../components/Products/ProductCard/CardButton";
import { MainTemplate } from "../../templates/MainTemplate";

export function Login() {
  return (
    <MainTemplate>
      <section className="flex items-center p-20 justify-center h-full w-full">
        <div className="flex items-center justify-center h-[800px] w-[1000px] bg-white rounded shadow-md">
          <div className="flex flex-col gap-6 w-100">
            <h1></h1>
            <form className="flex flex-col gap-6">
              <Input placeholder="Seu e-mail" />
              <Input placeholder="Sua senha" />
              <CardButton>Entrar</CardButton>
            </form>
          </div>
        </div>
      </section>
    </MainTemplate>
  );
}
