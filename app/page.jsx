'use client';
import { useState } from 'react';

export default function Home() {
  const [cart, setCart] = useState([]);
  const [ordered, setOrdered] = useState(false);

  const menuItems = [
    { id: 1, name: 'ขนมปังปิ้งเนยนมข้นหวาน', price: 25 },
    { id: 2, name: 'ขนมปังปิ้งไส้สังขยาใบเตย', price: 30 },
    { id: 3, name: 'หม่าล่าปิ้งย่าง (ไม้ละ)', price: 15 },
    { id: 4, name: 'เซ็ตหม่าล่ารวมมิตร (10 ไม้)', price: 150 }
  ];

  const addToCart = (item) => {
    setCart([...cart, item]);
    setOrdered(false);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <main style={{ fontFamily: 'sans-serif', padding: '20px', maxWidth: '600px', margin: '0 auto', backgroundColor: '#fffaf0', minHeight: '100vh' }}>
      <h1 style={{ color: '#dd6b20', textAlign: 'center', fontSize: '2rem' }}>🍞 ขนมปังปิ้ง & หม่าล่าแซ่บ 🌶️</h1>
      <p style={{ color: '#4a5568', textAlign: 'center', marginBottom: '20px' }}>เลือกเมนูอร่อยแล้วกดสั่งได้เลยครับ!</p>

      <div style={{ background: 'white', padding: '15px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', marginBottom: '20px' }}>
        <h3>📜 เมนูทั้งหมด</h3>
        {menuItems.map(item => (
          <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid #eee' }}>
            <span>{item.name} - {item.price} บาท</span>
            <button onClick={() => addToCart(item)} style={{ backgroundColor: '#dd6b20', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer' }}>
              + เลือก
            </button>
          </div>
        ))}
      </div>

      <div style={{ background: 'white', padding: '15px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        <h3>🛒 ตะกร้าของคุณ</h3>
        {cart.length === 0 ? (
          <p style={{ color: '#718096' }}>ยังไม่มีเมนูในตะกร้า</p>
        ) : (
          <div>
            {cart.map((item, index) => (
              <div key={index} style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0', fontSize: '0.95rem' }}>
                <span>{item.name}</span>
                <span>{item.price} บาท</span>
              </div>
            ))}
            <hr style={{ margin: '10px 0' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '1.1rem' }}>
              <span>ยอดรวมทั้งหมด:</span>
              <span style={{ color: '#e53e3e' }}>{total} บาท</span>
            </div>
            <button 
              onClick={() => { setOrdered(true); setCart([]); }}
              style={{ width: '100%', marginTop: '15px', backgroundColor: '#38a169', color: 'white', border: 'none', padding: '12px', fontSize: '1.1rem', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
            >
              ยืนยันการสั่งซื้อ 🚀
            </button>
          </div>
        )}
        {ordered && (
          <p style={{ color: '#38a169', fontWeight: 'bold', textAlign: 'center', marginTop: '15px' }}>
            🎉 สั่งอาหารสำเร็จ! เตรียมรอรับความอร่อยได้เลยครับ
          </p>
        )}
      </div>
    </main>
  );
}
