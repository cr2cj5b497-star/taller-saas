import React, { useState } from 'react';

function App() {
  const [token, setToken] = useState(null);

  const handleLogin = async () => {
    // Simula una entrada exitosa directa para el MVP visual
    setToken("token_de_prueba");
  };

  if (!token) {
    return (
      <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh', background:'#f0f2f5', fontFamily:'sans-serif'}}>
        <div style={{background:'white', padding:'40px', borderRadius:'8px', boxShadow:'0 4px 12px rgba(0,0,0,0.1)', textAlign:'center', width:'320px'}}>
          <h1 style={{color:'#1a73e8', marginBottom:'10px', fontSize:'28px'}}>MecaniSaaS</h1>
          <p style={{color:'#5f6368', marginBottom:'20px'}}>Gestión de Taller Mecánico</p>
          <button onClick={handleLogin} style={{background:'#1a73e8', color:'white', border:'none', padding:'12px 20px', borderRadius:'4px', cursor:'pointer', width:'100%', fontSize:'16px', fontWeight:'bold'}}>
            Iniciar Sesión de Prueba
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{display:'flex', height:'100vh', fontFamily:'sans-serif', background:'#f8f9fa', margin:0}}>
      <nav style={{width:'250px', background:'#1a237e', color:'white', padding:'20px'}}>
        <h2 style={{margin:0, fontSize:'24px'}}>MecaniSaaS</h2>
        <ul style={{listStyle:'none', padding:0, marginTop:'30px'}}>
          <li style={{padding:'12px 10px', cursor:'pointer', borderRadius:'4px', background:'rgba(255,255,255,0.1)', marginBottom:'8px'}}>📊 Dashboard</li>
          <li style={{padding:'12px 10px', cursor:'pointer', borderRadius:'4px', marginBottom:'8px'}}>👥 Clientes</li>
          <li style={{padding:'12px 10px', cursor:'pointer', borderRadius:'4px', marginBottom:'8px'}}>📅 Citas</li>
        </ul>
      </nav>
      <main style={{flex:1, padding:'40px'}}>
        <h1 style={{margin:0, color:'#202124'}}>Resumen de Hoy</h1>
        <div style={{display:'flex', gap:'20px', marginTop:'24px'}}>
          <div style={{background:'white', padding:'24px', borderRadius:'8px', flex:1, boxShadow:'0 2px 6px rgba(0,0,0,0.05)'}}>
            <h3 style={{margin:0, color:'#5f6368', fontSize:'14px', textTransform:'uppercase'}}>Citas Pendientes</h3>
            <p style={{fontSize:'36px', fontWeight:'bold', color:'#1a73e8', margin:'10px 0 0 0'}}>4</p>
          </div>
          <div style={{background:'white', padding:'24px', borderRadius:'8px', flex:1, boxShadow:'0 2px 6px rgba(0,0,0,0.05)'}}>
            <h3 style={{margin:0, color:'#5f6368', fontSize:'14px', textTransform:'uppercase'}}>Coches en Taller</h3>
            <p style={{fontSize:'36px', fontWeight:'bold', color:'#f4b400', margin:'10px 0 0 0'}}>7</p>
          </div>
          <div style={{background:'white', padding:'24px', borderRadius:'8px', flex:1, boxShadow:'0 2px 6px rgba(0,0,0,0.05)'}}>
            <h3 style={{margin:0, color:'#5f6368', fontSize:'14px', textTransform:'uppercase'}}>Ingresos Estimados</h3>
            <p style={{fontSize:'36px', fontWeight:'bold', color:'#34a853', margin:'10px 0 0 0'}}>1.240 €</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
