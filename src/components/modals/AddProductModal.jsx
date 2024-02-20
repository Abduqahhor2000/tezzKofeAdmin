import { IconButton, LinearProgress, Modal } from "@mui/material";
import { useEffect, useState } from "react";
import BaseInput from "../formItems/BaseInput";
import PrimerButton from "../PrimerButton";
import ImageInput from "../formItems/ImageInput";
import SelectInput from "../formItems/SelectInput";
import TextareaInput from "../formItems/TextareaInput";
import { useDispatch, useSelector } from "react-redux";
import { usePost } from "../../api";
import { addProduct } from "../../store/reducer/products";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

function AddProduct() {
  const { menus } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [photo, setPhoto] = useState("");
  const [price, setPrice] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setDescription("");
    setName("");
    setCategory("");
    setPhoto("");
    setPrice("");
  }, [open]);

  function addProductFunc(e) {
    e.preventDefault();
    setLoading(true);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    usePost("/products", {
      category,
      name,
      description,
      photo: photo ? photo : null,
      price,
      oldPrice: price,
      sale: null,
      available: null,
      unit: "ta",
    })
      .then(({ data }) => {
        console.log(data);
        dispatch(addProduct(data));
        setLoading(false);
        setOpen(false);
      })
      .catch((e) => {
        console.log(e.message);
        setLoading(false);
        setError(e.message);
      });
  }

  return (
    <>
      <PrimerButton onClick={() => setOpen(true)}>+ Taom yaratish</PrimerButton>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <div
          style={{ ...style }}
          className="w-[360px] overflow-hidden bg-white rounded-xl"
        >
          <div className="py-6 px-5">
            <div className="flex justify-between mb-6">
              <div className="text-xl font-semibold">Taom yaratish</div>
              <IconButton onClick={() => setOpen(false)} sx={{ p: "5px" }}>
                <img
                  src="/src/assets/x.svg"
                  alt=""
                  className="cursor-pointer"
                />
              </IconButton>
            </div>
            <form onSubmit={addProductFunc}>
              <div className="grid grid-cols-1 gap-4">
                <ImageInput />
                <SelectInput
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  options={menus?.menus?.map((item) => ({
                    value: item._id,
                    label: item.name,
                  }))}
                  required
                  label="Kategoriya"
                />
                <BaseInput
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Ovqat nomi"
                  label="Nomi"
                />
                <BaseInput
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                  placeholder="10 000"
                  label="Narxi"
                  type="number"
                />
                <TextareaInput
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  multiline
                  maxRows={4}
                  placeholder="Tarkibini kiriting"
                  label="Tarkibi"
                />
              </div>
              <div className="pt-6">
                <PrimerButton disabled={loading} type="submit">
                  Yaratish
                </PrimerButton>
              </div>
            </form>
          </div>
          <LinearProgress
            determinate="true"
            size="sm"
            value={25}
            className={loading ? "visible" : "invisible"}
          />
        </div>
      </Modal>
    </>
  );
}

export default AddProduct;
