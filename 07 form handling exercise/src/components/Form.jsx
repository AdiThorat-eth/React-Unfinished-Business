import React from "react";
import { useForm } from "react-hook-form";

const Form = ({ handleFormSubmitData }) => {
  const { register, handleSubmit, reset } = useForm();

  const handleFormSubmit = (data) => {
    handleFormSubmitData(data);
    reset();
  };

  return (
    <div className="mt-10 flex justify-center">
      <form
        action=""
        className="gap-10 flex"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <input
          {...register("name")}
          className="rounded-md bg-white px-2 py-1 text-[3vh] font-semibold outline-none"
          placeholder="name"
          type="text"
        />
        <input
          {...register("stand")}
          className="rounded-md bg-white px-2 py-1 text-[3vh] font-semibold outline-none"
          placeholder="stand name"
          type="text"
        />
        <input
          {...register("img")}
          className="rounded-md bg-white px-2 py-1 text-[3vh] font-semibold outline-none"
          placeholder="img url"
          type="text"
        />
        <input
          className="rounded-md px-2 py-1 text-[3vh] font-semibold outline-none bg-amber-400"
          type="submit"
        />
      </form>
    </div>
  );
};

export default Form;
