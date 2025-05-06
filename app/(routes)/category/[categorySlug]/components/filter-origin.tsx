import { useGetProductFiel } from "@/api/getProductField";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FilterTypes } from "@/types/filters";

type FilterOriginProps = {
  setFiltersOrigin: (origin: string) => void;
 }

const FilterOrigin = (props: FilterOriginProps ) => {

  const { setFiltersOrigin } = props
  const { result, loading }: FilterTypes = useGetProductFiel();

  console.log(result);

  return (
    <div className="my-5">
      <p className="mb-3 font-bold">Origen</p>

      {loading && result === null && <p>Cargando origen...</p>}

            <RadioGroup onValueChange={(value) => setFiltersOrigin(value)}>
                {result != null && result.schema.attributes.origin.enum.map((origin:string) => (
                    <div key={origin} className="flex items-center space-x-2">
                    <RadioGroupItem value={origin} id={origin} />
                    <Label htmlFor={origin}> {origin} </Label>
                    </div>
                ))}
            </RadioGroup> 

    </div>
  );
};

export default FilterOrigin;
