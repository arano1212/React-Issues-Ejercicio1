import React, { useState, useEffect } from 'react'
import Navbar from './Components/Navbar'
import Issues from './Components/Issues'

const App = () => {
  const [issues, setIssues] = useState([])
  const [filteredIssues, setFilteredIssues] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://api.github.com/repos/facebook/react/issues')
      .then(response => response.json())
      .then(data => {
        setIssues(data)
        setFilteredIssues(data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error Fetch', error)
        setLoading(false)
      })
  }, [])

  return (
    <div>
      <Navbar setFilteredIssues={setFilteredIssues} issues={issues} />
      <Issues filteredIssues={filteredIssues} loading={loading} />
    </div>
  )
}

export default App
