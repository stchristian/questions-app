import { Outlet } from "react-router-dom";

function Root() {
  return (
    <main className="flex items-center justify-center h-full bg-slate-100 font-roboto">
      <div className="flex flex-col w-[400px] h-[612px] border-slate-400 border bg-white p-4 text-center shadow-lg">
        <Outlet />
      </div>
    </main>
  );
}

export default Root;
