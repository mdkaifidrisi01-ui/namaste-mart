import React, { useState } from "react";
import API from "../api";

export default function AddProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);

    // Live preview
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      setImagePreview("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!category) {
      alert("⚠️ Please select a category!");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("description", description);
      if (imageFile) formData.append("image", imageFile);

      const { data } = await API.post("/products", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("✅ Product added successfully!");

      // Reset form
      setTitle("");
      setPrice("");
      setCategory("");
      setDescription("");
      setImageFile(null);
      setImagePreview("");
    } catch (err) {
      console.error(err);
      alert("❌ Failed to add product. Please try again!");
    }
  };

  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-4 text-primary">
        ➕ Add a New Product
      </h2>

      <form
        onSubmit={handleSubmit}
        className="card shadow-lg p-4 mx-auto border-0"
        style={{ maxWidth: "600px", borderRadius: "15px" }}
        encType="multipart/form-data"
      >
        {/* Product Title */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Product Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter product name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        {/* Price */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Price (₹)</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        {/* Category */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Category</label>
          <select
            className="form-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select category</option>
            <option value="Electronics">📱 Electronics</option>
            <option value="Fashion">👗 Fashion</option>
            <option value="Groceries">🛒 Groceries</option>
            <option value="Home Appliances">🏠 Home Appliances</option>
            <option value="Sports">⚽ Sports</option>
            <option value="Books">📚 Books</option>
            <option value="Other">🧩 Other</option>
          </select>
        </div>

        {/* Image Upload */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Upload Image</label>
          <input
            type="file"
            className="form-control"
            accept="image/*"
            onChange={handleFileChange}
          />
          {imagePreview && (
            <div className="text-center mt-3">
              <img
                src={imagePreview}
                alt="Preview"
                className="img-thumbnail shadow-sm"
                style={{ maxWidth: "150px", borderRadius: "10px" }}
              />
            </div>
          )}
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="form-label fw-semibold">Description</label>
          <textarea
            className="form-control"
            rows="3"
            placeholder="Enter product description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary w-100 fw-semibold">
          Add Product
        </button>
      </form>
    </div>
  );
}
