import AddRecipeBtn from './components/AddRecipeBtn'
import Avatar from './components/Avatar'
import RecipeList from './components/recipes/RecipeList'

export default function Home() {
  return (
    <div className='w-full mx-auto md:w-[768px] lg:w-[1024px]'>
      <Avatar />
      <AddRecipeBtn />
      <RecipeList />
    </div>
  )
}
