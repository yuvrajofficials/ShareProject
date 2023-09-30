
import React from "react";

const CategoryForm = ({ handleSubmit, value, setValue ,placeholder }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder={placeholder}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-outline-primary">
          Submit
        </button>

      </form>
    </>
  );
};

export default CategoryForm;