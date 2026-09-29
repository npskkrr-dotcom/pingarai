export default function Home() {
  return (
    <main style={{ fontFamily: 'sans-serif', padding: '20px', maxWidth: '600px', margin: '0 auto', textAlign: 'center', backgroundColor: '#fffaf0', minHeight: '100vh' }}>
      <h1 style={{ color: '#dd6b20', fontSize: '2.5rem', marginBottom: '10px' }}>🍞 ขนมปังปิ้ง & หม่าล่าแซ่บ 🌶️</h1>
      <p style={{ color: '#4a5568', fontSize: '1.1rem', marginBottom: '30px' }}>ปังปิ้งไส้ทะลักกรอบนอกนุ่มใน กับหม่าล่าปิ้งย่างเผ็ดชาสะใจ!</p>

      <div style={{ background: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', marginBottom: '20px', textAlign: 'left' }}>
        <h3 style={{ color: '#2d3748', borderBottom: '2px solid #feebc8', paddingBottom: '8px' }}>🔥 เมนูปั้นยอดฮิต</h3>
        <ul style={{ listStyle: 'none', padding: 0, color: '#4a5568', lineHeight: '2' }}>
          <li>🍞 ขนมปังปิ้งเนยนมข้นหวาน - 25 บาท</li>
          <li>🍞 ขนมปังปิ้งไส้สังขยาใบเตย - 30 บาท</li>
          <li>🍢 หม่าล่าปิ้งย่าง (ไม้ละ) - 15 บาท</li>
          <li>🌶️ เซ็ตหม่าล่ารวมมิตร (10 ไม้แถม 1) - 150 บาท</li>
        </ul>
      </div>

      <button 
        onClick={() => alert('🎉 สั่งขนมปังและหม่าล่าสำเร็จ! รอรับความอร่อยได้เลยครับ')}
        style={{ backgroundColor: '#dd6b20', color: 'white', border: 'none', padding: '12px 24px', fontSize: '1.2rem', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', boxShadow: '0 4px 14px rgba(221, 107, 32, 0.4)' }}
      >
        สั่งเมนูเด็ดเลย 🛒
      </button>
    </main>
  );
}
