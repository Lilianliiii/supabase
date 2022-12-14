import { Link } from 'react-router-dom'
import supabase from "../config/supabaseClient"

// Need to accept the onDelete prop here in order to update local state in home.js
const SmoothieCard = ({ smoothie, onDelete }) => {

  const handleDelete = async () => {
    const { data, error } = await supabase
      // from which table in supabase - smoothies
      .from('smoothies')
      .delete()
      // delete which smoothie - the id associated with the smoothie
      .eq('id', smoothie.id)
      // need .select for version 2 of supabase
      .select()

      if (error) {
        console.log(error)
      }

      if (data) {
        console.log(data)
        // Call the onDelete function but handleDelete from home.js needs an id we pass in the smoothie id we just deleted
        onDelete(smoothie.id)
      }
  }

  return (
    <div className="smoothie-card">
      <h3>{smoothie.title}</h3>
      <div className="method">
        <p>{smoothie.method}</p>
      </div>
      <div className="rating">{smoothie.rating}</div>
      <div className="buttons">
        <Link to={'/' + smoothie.id}>
          <i className="material-icons">edit</i>
        </Link>
          <i className="material-icons" onClick={handleDelete}>delete</i>
      </div>
    </div>
  )
}

export default SmoothieCard
