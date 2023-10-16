import EditRecipeForm from "@/app/components/EditRecipeForm";

const getRecipeById = async (id) => {
  try {
    const res = await fetch(`http://139.177.193.142:3000/api/recipes/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditRecipe({ params }) {
  const { id } = params;
  const { recipe } = await getRecipeById(id);
  const { title, description } = recipe;

  return <EditRecipeForm id={id} title={title} description={description} />;
}
