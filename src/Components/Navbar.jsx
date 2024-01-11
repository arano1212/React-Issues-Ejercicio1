import React, { useState } from 'react'

const Navbar = ({ setFilteredIssues, issues }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase()
    setSearchTerm(term)

    // Filtrar los issues y pasarlos al componente Issues
    const filteredIssues = issues.filter((issue) =>
      issue.title.toLowerCase().includes(term)
    )
    setFilteredIssues(filteredIssues)
  }

  return (
    <>
      <nav className='navbar navbar-light bg-warning justify-content-between'>
        <a className='navbar-brand'>GitHub Issues</a>
        <form className='form-inline'>
          <input
            className='form-control mr-sm-2'
            type='search'
            placeholder='Search'
            aria-label='Search'
            value={searchTerm}
            onChange={handleSearch}
          />
        </form>
      </nav>
    </>
  )
}

export default Navbar
