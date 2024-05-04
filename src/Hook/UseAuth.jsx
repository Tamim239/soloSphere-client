import { useContext } from "react"
import { AuthContext } from "../Provider/AuthProvider"

export const UseAuth = () => {
    const all = useContext(AuthContext)
  return all
}
