import FilterOrigin from "./filter-origin";

type FiltersControlsCategoryProps = {
 setFiltersOrigin: (origin: string) => void;
}

const FiltersControlCategory = (props: FiltersControlsCategoryProps ) => {
    const { setFiltersOrigin } = props
    return (  
       <div className="sm:w-[350px] sm:mt-5 p-6">
        <FilterOrigin setFiltersOrigin={setFiltersOrigin} />
       </div>
    );
}
 
export default FiltersControlCategory;