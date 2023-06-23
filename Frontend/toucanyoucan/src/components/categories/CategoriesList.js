import { useDispatch, useSelector } from "react-redux";
import { navReturn, navToCategory } from "../../store";
import CategoriesTopBar from "./CategoriesTopBar";

// add an icon to show and hide the component

const CategoriesList = () => {
  const dispatch = useDispatch();

  const previousCategory = useSelector(({ categories: { all, path } }) => {
    return all.find((category) => path.length && category.id === path.at(-1));
  });

  const categoriesToDisplay = useSelector(({ categories: { all, path } }) => {
    return all.filter(
      (category) => category.parentId && category.parentId === path.at(-1)
    );
  });

  const handleNavigateTo = (categoryId) => {
    dispatch(navToCategory(categoryId));
  };

  const handleNavigateBack = () => {
    dispatch(navReturn());
  };

  return (
    <div>
      <CategoriesTopBar
        categoryName={previousCategory?.name}
        onClick={handleNavigateBack}
      />
      {categoriesToDisplay.length ? (
        categoriesToDisplay?.map((category) => {
          console.log(category.name);
          return (
            <div
              className="w-64 p-3 mb-3 text-xl border-2 rounded-xl border-primary hover:bg-accent hover:text-white"
              onClick={() => {
                handleNavigateTo(category.id);
              }}
              key={category.name}
            >
              {category.name}
            </div>
          );
        })
      ) : (
        <div className="text-primary p-3 w-64">No Elements found</div>
      )}
    </div>
  );
};

export default CategoriesList;
