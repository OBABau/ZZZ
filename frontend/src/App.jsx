import React, {useEffect, useState} from 'react'

export default function App(){
  const [status, setStatus] = useState('loading')

  useEffect(()=>{
    fetch('/api/health/')
      .then(r=>r.json())
      .then(j=> setStatus(j.status || 'unknown'))
      .catch(()=> setStatus('error'))
  },[])

  return (
    <div className="min-h-screen bg-base-200 p-6">
      <div className="container mx-auto">
        <div className="card shadow-lg">
          <div className="card-body">
            <h1 className="text-2xl font-bold">Frontend - DRF + React</h1>
            <p>Estado del backend: <strong>{status}</strong></p>
            <p className="text-sm text-gray-600">Este es un punto de partida. Ajusta CORS y proxy si el backend corre en otro puerto.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
