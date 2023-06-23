import { GoPlus } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { navToOrganization } from "../../store";
import OrganizationItem from "./OrganizationItem";

const OrganizationsList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const path = useSelector((state) => {
    return state.categories.path;
  });

  const organizations = useSelector((state) => {
    return state.categories.all.filter((category) => {
      return !category.parentId;
    });
  });

  const currentOrganization = organizations.find((organization) => {
    return path.length && organization.id === path[0];
  });

  const handleOrganizationClick = (organizationId) => {
    dispatch(navToOrganization(organizationId));
  };

  return (
    <div className="m-3">
      {organizations.map((org) => {
        return (
          <OrganizationItem
            key={org.id}
            organization={org}
            isCurrent={org.id === currentOrganization?.id}
            onClick={handleOrganizationClick}
          />
        );
      })}
      <GoPlus
        onClick={() => {
          navigate("/createcourse");
        }}
        className="h-8 w-full self-end"
        color="primary-green"
      />
    </div>
  );
};

export default OrganizationsList;
