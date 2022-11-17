import supabase from "../config/supabaseClient"
import { useEffect, useState } from "react"
import SmoothieCard from "../components/SmoothieCard"

const Home = () => {
  const [fetchError, setFetchError] = useState(null)
  const [smoothies, setSmoothies] = useState(null)
  // Need to update the local state here above inside the Home component when we delete a smoothie to match the database from supabase

  // The handleDelete function's job is to look through the smoothies and update them based on the smoothie we just deleted so needs to take in an id argument and that's the id of the smoothie we want to delete
  const handleDelete = (id) => {
    // Calling setSmoothies to set the new smoothies without the deleted one but we have to use the old smoothies value so we can cycle through and look for the smoothie with the id and delete it then return new value
    // Fire a function inside the function and preSmoothies as an argument (the state before we update without deleted smoothie)
    setSmoothies(prevSmoothies => {
      // Fire a function when using filter method on every smoothie within the prevSmoothies array and we take in that particular smoothie (sm) and if returns true then it stays in the array, if false then we filter it out. We want to return false where the smoothie id == the id argument from handleDelete
      return prevSmoothies.filter(sm => sm.id !== id)
    })
  }

  useEffect(() => {
    const fetchSmoothies = async () => {
      const { data, error } = await supabase
      .from('smoothies')
      .select()

      if (error) {
        setFetchError('Could not fetch the smoothies')
        setSmoothies(null)
        console.log(error)
      }

      if (data) {
        setSmoothies(data)
        setFetchError(null)
      }

    }

    fetchSmoothies()

  }, [])

  return (
    <div className="page home">
      {fetchError && (<p>{fetchError}</p>)}
      {smoothies && (
        <div className="smoothies">
          <div className="smoothie-grid">
            {smoothies.map(smoothie => (
              <SmoothieCard key={smoothie.id} smoothie={smoothie}
              // onDelete prop
              onDelete={handleDelete}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Home
