const OrganizationItem = ({ organization, isCurrent, onClick }) => {
  return (
    <div
      className={`mx-2 my-4 p-4 rounded-xl bg-background-primary text-primary text-center border-2 border-primary ${
        isCurrent ? "bg-primary text-background-primary text-white" : "hover:bg-accent hover:text-white"
      }`}
      onClick={() => {
        onClick(organization.id);
      }}
    >
      {organization.name}
    </div>
  );
};

export default OrganizationItem;
