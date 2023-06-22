import CategoriesList from "./CategoriesList";
import OrganizationsList from "./OrganizationsList";

const CategoriesSidebar = () => {
  return (
    <div className="flex flex-row h-full">
      <OrganizationsList />
      <CategoriesList />
    </div>
  );
};

export default CategoriesSidebar;
