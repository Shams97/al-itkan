import React from "react";

export default function Employment() {
  return (
    <div>
      employment
      <div className="flex justify-around flex-row mt-8">
        <Link to="/training">
          <Button value="Previous" />
        </Link>
        <Link to="/">
          <Button value="Next" />
        </Link>
      </div>
    </div>
  );
}

export const Additional_info = () => {
  return (
    <div>
      Additional_info
      <div className="flex justify-around flex-row mt-8">
        <Link to="/sales_skills">
          <Button value="Previous" />
        </Link>
        <Link to="/sales_skills">
          <Button value="Next" />
        </Link>
      </div>
    </div>
  );
};




export const Refrence = () => {
    return (
      <div>
        Refrence
        <div className="flex justify-around flex-row mt-8">
          <Link to="/sales_skills">
            <Button value="Previous" />
          </Link>
          <Link to="/sales_skills">
            <Button value="Next" />
          </Link>
        </div>
      </div>
    );
  };