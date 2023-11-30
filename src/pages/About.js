import React from 'react'
import { Outlet } from 'react-router'

export default function About() {
  return (
    <div>
      <h2>About Page</h2>
      <Outlet></Outlet>
    </div>
  )
}
