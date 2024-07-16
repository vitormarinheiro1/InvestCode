import { FaGithub } from "react-icons/fa";
import TextField from "@mui/material/TextField";
import { Button, InputAdornment } from "@mui/material";

export default function App() {
  return (
    <>
      <header>
        <nav className="flex justify-around items-center p-4">
          <p className="text-3xl">InvestCode</p>
          <a
            href="https://github.com/vitormarinheiro1/InvestCode"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} />
          </a>
        </nav>
        <div className="w-full h-px bg-zinc-800" />
      </header>
      <main className="flex justify-center items-center flex-col h-80">
        <h1 className="font-semibold text-2xl">Simulador de <span className="text-lime-500">Juros</span> compostos</h1>
        <form className="flex flex-col">
          <div>
            <TextField
              label="Valor inicial"
              placeholder="00,00"
              id="outlined-start-adornment"
              sx={{ m: 1, width: "25ch" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">R$</InputAdornment>
                ),
              }}
            />
            <TextField
              label="Valor mensal"
              placeholder="00,00"
              id="outlined-start-adornment"
              sx={{ m: 1, width: "25ch" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">R$</InputAdornment>
                ),
              }}
            />
          </div>
          <div>
            <TextField
              label="Taxa de juros anual"
              id="outlined-start-adornment"
              sx={{ m: 1, width: "25ch" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">%</InputAdornment>
                ),
              }}
            />
            <TextField
              label="Período"
              id="outlined-start-adornment"
              sx={{ m: 1, width: "25ch" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">mes(es)</InputAdornment>
                ),
              }}
            />
          </div>
        </form>
        <div className="flex gap-80">
          <Button variant="contained" color="primary">
            Calcular
          </Button>
          <Button variant="contained" color="primary">
            Limpar
          </Button>
        </div>
      </main>
    </>
  );
}
