import CategoryList from "../components/CategoryList"

const CategoriesPage = () => {
  return (
    <div className="p-4">
        <h1 className="text-2xl font-bold">Categories</h1>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <CategoryList />
        </div>
    </div>
  )
}

export default CategoriesPage