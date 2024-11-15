import { useEffect, useState } from "react"
import { generate } from "../../lib";
import { useDebounce } from "use-debounce";
import CopyIcon from "./CopyIcon";
import CheckIcon from "./CheckIcon";
import { ThemeToggle } from "./ThemeToggle";

export default function GeneratorForm() {
  const [value, setValue] = useState<number | null>();
  const [copied, setCopied] = useState<boolean>(false);
  const [copyText, setCopyText] = useState<string>('Copiar');
  const [martinFierro, setMartinFierro] = useState<string | null>();
  const [debouncedMartinFierro] = useDebounce(martinFierro, 500);
  
  useEffect(() => {
    if (value) {
      setMartinFierro(generate(value));
      return
    }

    setMartinFierro(null)
  }, [value])
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = event;
    const parsedValue = parseInt(value);

    if(parsedValue > 0 && !isNaN(parsedValue)) {
      setValue(parsedValue);
      setCopied(false);
      setCopyText('Copiar');
      return;
    }

    setValue(null);
    setCopied(false);
    setCopyText('Copiar');
  }

  const handleCopy = async () => {
    if(debouncedMartinFierro) {
      await navigator.clipboard.writeText(debouncedMartinFierro);
      setCopied(true);
      setCopyText('¡Copiado!');
      setTimeout(() => {
        setCopied(false);
        setCopyText('Copiar');
      }, 3000);
    }
  }
  
  return (
    <>
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 mb-4 relative">
      <ThemeToggle />
      <h2 className="text-2xl font-semibold dark:text-gray-100 mb-4 input-container-title">¡Genera tu lorem ipsum argentino!</h2>
      <div className="form-group flex flex-col">
        <label htmlFor="textLength" className="mb-1 font-semibold dark:text-gray-100">Ingresa la cantidad de caracteres</label>
        <input
          type="number"
          id="textLength"
          placeholder="150"
          className="border border-gray-300 rounded-lg w-fit py-[2px] px-2 text-lg max-w-full"
          defaultValue={value || ''}
          onChange={handleChange}
        />
      </div>
    </div>
    {debouncedMartinFierro &&
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 mb-4">
      <p className="prose dark:prose-invert">{debouncedMartinFierro}</p>
      <button
        onClick={handleCopy}
        className="flex gap-1 font-semibold items-center py-2 px-4 pl-3 mt-4 rounded-lg bg-blue-400 text-gray-100 hover:bg-blue-500 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-all"
      >
        {copied ? <CheckIcon width={24} heigth={24} /> : <CopyIcon width={24} heigth={24} />}
        {copyText}
      </button>
    </div>
    }
    </>
  )
}
