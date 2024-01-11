import React from 'react'

const Issues = ({ filteredIssues, loading }) => {
  return (
    <>
      {loading
        ? (
          <p>Cargando...</p>
          )
        : (
          <div>
            <h1>Ejercicio 1: React Issues</h1>
            <ul>
              {filteredIssues.map(issue => (
                <li key={issue.id}>
                  <div>
                    <strong>{issue.title}</strong>
                    <p>Issue ID: {issue.id}</p>
                    <p>Opened by: {issue.user.login}</p>
                    <p>
                      Labels:{' '}
                      {issue.labels.map(label => (
                        <span key={label.id}>{label.name}</span>
                      ))}
                    </p>
                    <a href={issue.html_url} target='_blank' rel='noopener noreferrer'>
                      View on GitHub
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          )}
    </>
  )
}

export default Issues
