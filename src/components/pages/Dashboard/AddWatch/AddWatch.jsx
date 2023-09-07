import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";
const imageBB_api = import.meta.env.VITE_imageBB_api;
const AddWatch = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const imageBB_url = `https://api.imgbb.com/1/upload?key=${imageBB_api}`;
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(`${imageBB_url}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        if (imageData.success) {
          const imageURL = imageData.data.display_url;
          const { name, price, category, details } = data;
          const newItem = {
            name,
            price: parseInt(price),
            category,
            details,
            image: imageURL,
          };
          fetch("http://localhost:5000/watchData", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(newItem),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                Swal.fire({
                  position: "top-center",
                  icon: "success",
                  title: `Your item have been added successfully`,
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            });
        }
      });
  };
  return (
    <div className="w-full px-12">
      <Helmet>
        <title>Mobile shop | Add Watch</title>
      </Helmet>
      <SectionTitle heading={"Add a Watch"}></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Watch Name*</span>
          </label>
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder="Type your watch name"
            className="input input-bordered w-full "
          />
          {errors.name && <span>Watch Name is required</span>}
        </div>

        <div className="flex ">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Category Name*</span>
            </label>
            <select
              {...register("category", { required: true })}
              defaultValue="Pick One"
              className="select select-bordered"
            >
              <option disabled>Pick One</option>
              <option>casio</option>
              <option>classic</option>
              <option>modern</option>
              <option>sports</option>
            </select>
            {errors.category && <span>category name is required</span>}
          </div>
          <div className="form-control w-full max-w-xs ml-2">
            <label className="label">
              <span className="label-text">Price*</span>
            </label>
            <input
              type="number"
              {...register("price", { required: true })}
              placeholder="Type product price here..."
              className="input input-bordered w-full max-w-xs"
            />
            {errors.price && <span>Price is required</span>}
          </div>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Watch Details</span>
          </label>
          <textarea
            className="textarea textarea-bordered resize-none h-24"
            {...register("details")}
            placeholder="type watch details here..."
          ></textarea>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Choose a file*</span>
          </label>
          <input
            type="file"
            {...register("image")}
            className="file-input file-input-bordered w-full max-w-xs"
          />
          {errors.image && <span>Watch Image is required</span>}
        </div>
        <input
          className="btn btn-accent mt-2"
          type="submit"
          value="Add Watch"
        />
      </form>
    </div>
  );
};

export default AddWatch;
