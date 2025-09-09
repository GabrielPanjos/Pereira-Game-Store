import { MainTemplate } from "../../templates/MainTemplate";

export function NotFound() {
  return (
    <div className="h-full w-full bg-slate-100 flex flex-col items-center">
      <MainTemplate>
        <h1 className="h-100 flex justify-center items-center font-bold text-[32px]">
          Página não encontrada...
        </h1>
      </MainTemplate>
    </div>
  );
}
