import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

const getRecipes = async () => {
  try {
    const res = await fetch("http://139.177.193.142:3000/api/recipes", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch recipes");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading recipes: ", error);
  }
};

export default async function RecipeList() {
  const { recipes } = await getRecipes();

  return (
    <>
      {recipes.map((r) => (
        <div
          key={r._id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <h2 className="font-bold text-2xl">{r.title}</h2>
            <div>{r.description}</div>
          </div>

          <div className="flex gap-2">
            <RemoveBtn id={r._id} />
            <Link href={`/editRecipe/${r._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}