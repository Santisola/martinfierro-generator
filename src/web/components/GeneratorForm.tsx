import { useEffect, useState } from "react"
import { generate } from "../../lib";
import { useDebounce } from "use-debounce";

export default function GeneratorForm() {
  const [value, setValue] = useState<number | null>();
  const [martinFierro, setMartinFierro] = useState<string | null>();
  const [debouncedMartinFierro] = useDebounce(martinFierro, 500);
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = event;
    const parsedValue = parseInt(value);

    if(parsedValue > 0 && !isNaN(parsedValue)) {
      setValue(parsedValue);
      return;
    }

    setValue(null);
  }

  useEffect(() => {
    if (value) {
      setMartinFierro(generate(value));
      return
    }

    setMartinFierro(null)
  }, [value])
  
  return (
    <>
    <div className="bg-white shadow sm:rounded-lg p-6 mb-4">
      <h2 className="text-2xl font-semibold mb-4">¡Genera tu lorem ipsum argentino!</h2>
      <div className="form-group flex flex-col">
        <label htmlFor="textLength" className="mb-1 font-semibold">Ingresa la cantidad de caracteres</label>
        <input
          type="number"
          id="textLength"
          placeholder="150"
          className="border border-gray-300 rounded-lg w-fit py-[2px] px-2 text-lg"
          defaultValue={value || ''}
          onChange={handleChange}
        />
      </div>
    </div>
    {debouncedMartinFierro &&
    <div className="bg-white shadow sm:rounded-lg p-6 mb-4">
      <p>{debouncedMartinFierro}</p>
    </div>
    }
    </>
  )
}
