import { todo } from "./Todo";

type SchoolInfoProps = {
  school: todo;
};

export const SchoolInfo: React.FC<SchoolInfoProps> = ({ school }) => {
  return (
    <div className="SchoolInfo">
      <h1 className="SchoolName">
        {school.schoolName === "" ? "School" : school.schoolName}
      </h1>
      <div className="ContactInputsContainer">
        <div className="ContactInput" id="Name">
          {school.contactName === "" ? "Name" : school.contactName}
        </div>
        <div className="ContactInput" id="Email">
          {school.contactEmail === "" ? "Email" : school.contactEmail}
        </div>
        <div className="ContactInput" id="Phone">
          {school.contactPhone === "" ? "Phone" : school.contactPhone}
        </div>
      </div>
    </div>
  );
};
