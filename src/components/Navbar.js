import React from "react"
import { Link } from "gatsby"

export default function Navbar() {
  return (
    <nav>
      <h1>Website Name</h1>
      <div className="link">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
      </div>
    </nav>
  )
}
