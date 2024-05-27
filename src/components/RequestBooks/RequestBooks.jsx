import { ToastContainer, toast } from "react-toastify";

const RequestBooks = () => {
  const requestSubmitted = () => toast("Request Submitted Successfully");
  const handleSubmit = (e) => {
    requestSubmitted();
    e.preventDefault();
  };
  return (
    <div className="container mx-auto mt-12 font-work-sans">
      <h2 className="text-4xl">Request Books Here</h2>
      <form
        className="border-2 p-5 rounded w-96 mt-12 space-y-2"
        onSubmit={handleSubmit}
      >
        <label className="input input-bordered flex items-center gap-2 text-bold">
          Book Title:
          <input type="text" className="grow" placeholder="Daisy" required />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Book Author:
          <input type="text" className="grow" placeholder="Daisy" required />
        </label>
        <input
          type="submit"
          value="Submit"
          className="btn bg-lime-500 text-white font-bold text-md"
        />
      </form>
      <ToastContainer />
    </div>
  );
};

export default RequestBooks;
