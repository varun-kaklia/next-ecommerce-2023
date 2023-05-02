import React from "react";

const category = [
  {
    name: "Fassion",
    slug: "fassion",
  },
  {
    name: "Electronic",
    slug: "electronic",
  },
  {
    name: "Home Decor",
    slug: "home-decor",
  },
  {
    name: "Medicine",
    slug: "medicine",
  },
  {
    name: "Camera",
    slug: "camerea",
  },
];

const page = () => {
  const categories = category;

  return (
    <div className="">
      {categories.length > 0 &&
        categories?.map((c, index) => (
          <div className="bg-blue-600" key={index}>
            {c.name}
          </div>
        ))}
    </div>
  );
};

export default page;
