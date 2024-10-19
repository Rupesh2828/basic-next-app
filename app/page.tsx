import axios from "axios"

const fetchDataTodo = async() => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
  return response.data

}


export default async function Home() {
 const todoDetails = await fetchDataTodo()

  return (
    <div>
      Hii there

    </div>
  )
}
