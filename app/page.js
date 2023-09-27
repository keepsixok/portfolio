import Avatar from './components/Avatar'
import RecipeCard from './components/recipes/RecipeCard'
import AddRecipeBTN from './components/recipes/AddRecipeBTN'

export default function Home() {
  return (
    <div className='w-full mx-auto md:w-[768px] lg:w-[1024px]'>
      <Avatar />
      <AddRecipeBTN />
      <RecipeCard />
    </div>
  )
}
