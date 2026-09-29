export default function Home() {
  return (
    <main style={{ fontFamily: 'sans-serif', padding: '40px', textAlign: 'center', backgroundColor: '#fff5f5', minHeight: '100vh' }}>
      <h1 style={{ color: '#e53e3e', fontSize: '3rem', marginBottom: '10px' }}>ร้านปิ้งย่าง Pingarai 🔥</h1>
      <p style={{ fontSize: '1.2rem', color: '#4a5568', marginBottom: '30px' }}>ยินดีต้อนรับสู่ระบบสั่งอาหารปิ้งย่างสุดอร่อย สดใหม่ เดือดทุกเตา!</p>
      <div style={{ background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', display: 'inline-block' }}>
        <h3 style={{ color: '#2d3748' }}>สถานะระบบ: พร้อมให้บริการ 🟢</h3>
        <p style={{ color: '#718096' }}>ฐานข้อมูลเชื่อมต่อเรียบร้อย พร้อมรับออเดอร์แล้วครับ</p>
      </div>
    </main>
  );
}
