import React from 'react';
import { Folder, MonitorPlay, Clock, Monitor, MapPin, User, ChevronRight } from 'lucide-react';

export default function OrdersScreen() {
  return (
    <div className="p-5 flex-col gap-4">
      <div className="text-h1" style={{ color: 'var(--primary)', lineHeight: 1.1, fontSize: 32 }}>Orders Hub</div>
      <p className="text-body text-muted mt-2">Manage new requests and access active session materials.</p>

      {/* Top Action Buttons */}
      <div className="mt-4 flex gap-3">
        <button className="card flex-1 flex items-center justify-center gap-2" style={{ padding: '14px', cursor: 'pointer', border: '1px solid var(--border)', background: 'var(--surface)', fontWeight: 600, color: 'var(--text-main)', fontSize: 13 }}>
          <Folder size={18} color="var(--text-muted)" />
          Notes Repository
        </button>
        <button className="flex-1 flex items-center justify-center gap-2" style={{ padding: '14px', cursor: 'pointer', border: 'none', background: 'var(--primary)', borderRadius: 'var(--radius-lg)', fontWeight: 600, color: 'white', fontSize: 13 }}>
          <MonitorPlay size={18} />
          Live Board
        </button>
      </div>

      {/* New Requests Section */}
      <div className="mt-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div style={{ width: 8, height: 8, borderRadius: 4, background: 'var(--success)' }}></div>
          <div className="text-h2">New Requests</div>
        </div>
        <div className="badge badge-light" style={{ background: '#f1f5f9', color: 'var(--text-muted)' }}>2 Pending</div>
      </div>

      {/* Requests Grid */}
      <div className="responsive-grid-2 mt-4">
        {/* Request Card 1 */}
        <div className="card flex-col gap-3">
          <div className="flex justify-between items-start">
            <div className="flex gap-3 items-center">
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=faces" style={{ width: 44, height: 44, borderRadius: 22, objectFit: 'cover' }} alt="Maya" />
              <div className="flex-col">
                <div className="text-h3 font-bold" style={{ fontSize: 15 }}>Maya Patel</div>
                <div className="text-sm font-semibold mt-1" style={{ color: '#0369a1' }}>Advanced Calculus</div>
                <div className="text-xs text-muted mt-1">★ 4.9 (12 sessions)</div>
              </div>
            </div>
            <div className="flex-col items-end">
              <div className="text-h2" style={{ color: 'var(--success)' }}>$45</div>
              <div className="text-xs font-bold text-muted mt-1" style={{ letterSpacing: 0.5 }}>EST. PAYOUT</div>
            </div>
          </div>

          <div className="flex gap-2 mt-2">
            <div className="flex-1 flex items-center gap-2" style={{ padding: '10px 12px', background: 'var(--bg-color)', borderRadius: 8, fontSize: 12, fontWeight: 500 }}>
              <Clock size={14} color="var(--text-muted)" /> Today, 4:00 PM (1 hr)
            </div>
            <div className="flex-1 flex items-center gap-2" style={{ padding: '10px 12px', background: 'var(--bg-color)', borderRadius: 8, fontSize: 12, fontWeight: 500 }}>
              <Monitor size={14} color="var(--text-muted)" /> Online (Zoom)
            </div>
          </div>

          <div className="text-sm mt-2 font-medium" style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>
            "Need help preparing for tomorrow's midterm on integration techniques."
          </div>

          <div className="flex gap-3 mt-3">
            <button className="btn-secondary" style={{ flex: 1, background: '#f1f5f9', color: 'var(--text-main)' }}>Decline</button>
            <button className="btn-primary" style={{ flex: 2 }}>Accept Request</button>
          </div>
        </div>

        {/* Request Card 2 */}
        <div className="card flex-col gap-3">
          <div className="flex justify-between items-start">
            <div className="flex gap-3 items-center">
              <div style={{ width: 44, height: 44, borderRadius: 22, background: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'var(--text-muted)' }}>SJ</div>
              <div className="flex-col">
                <div className="text-h3 font-bold" style={{ fontSize: 15 }}>Sam Jenkins</div>
                <div className="text-sm font-semibold mt-1" style={{ color: '#0369a1' }}>AP Physics</div>
              </div>
            </div>
            <div className="flex-col items-end">
              <div className="text-h2" style={{ color: 'var(--success)' }}>$60</div>
              <div className="text-xs font-bold text-muted mt-1" style={{ letterSpacing: 0.5 }}>EST. PAYOUT</div>
            </div>
          </div>

          <div className="flex gap-2 mt-2">
            <div className="flex-1 flex items-center gap-2" style={{ padding: '10px 12px', background: 'var(--bg-color)', borderRadius: 8, fontSize: 12, fontWeight: 500 }}>
              <Clock size={14} color="var(--text-muted)" /> Tomorrow, 10:00 AM (1.5 hr)
            </div>
            <div className="flex-1 flex items-center gap-2" style={{ padding: '10px 12px', background: 'var(--bg-color)', borderRadius: 8, fontSize: 12, fontWeight: 500 }}>
              <MapPin size={14} color="var(--text-muted)" /> Main Library, Floor 2
            </div>
          </div>

          <div className="flex gap-3 mt-3">
            <button className="btn-secondary" style={{ flex: 1, background: '#f1f5f9', color: 'var(--text-main)' }}>Decline</button>
            <button className="btn-primary" style={{ flex: 2 }}>Accept Request</button>
          </div>
        </div>
      </div>

      <div className="responsive-grid-2 mt-4 mb-4">
        {/* Up Next Today */}
        <div className="card p-0 overflow-hidden" style={{ height: 'fit-content' }}>
          <div className="flex justify-between items-center p-4 pb-2">
            <div className="text-h3 font-bold">Up Next Today</div>
            <div className="text-xs font-semibold text-muted">View Full</div>
          </div>

          <div className="p-4 flex-col gap-0 relative">
            <div style={{ position: 'absolute', left: 24, top: 24, bottom: 24, width: 2, background: 'var(--border)' }}></div>
            
            <div className="flex gap-4 relative z-10 mb-4">
              <div style={{ width: 18, height: 18, borderRadius: 9, background: 'white', border: '4px solid var(--primary)', marginTop: 4 }}></div>
              <div className="flex-1 flex-col pb-4 border-b border-gray-100">
                <div className="text-xs font-bold text-muted mb-1">1:00 PM - 2:00 PM</div>
                <div className="text-sm font-bold mb-1">Data Structures Review</div>
                <div className="flex items-center gap-1 text-xs text-muted"><User size={12} /> David L.</div>
              </div>
            </div>

            <div className="flex gap-4 relative z-10">
              <div style={{ width: 18, height: 18, borderRadius: 9, background: 'white', border: '4px solid var(--success)', marginTop: 4 }}></div>
              <div className="flex-1 flex-col p-3 rounded-lg" style={{ background: '#ecfdf5' }}>
                <div className="flex items-center gap-1 text-xs font-bold mb-1" style={{ color: 'var(--success)' }}>
                  <Clock size={12} /> In 45 mins
                </div>
                <div className="text-sm font-bold mb-1">AP Chemistry</div>
                <div className="flex items-center gap-1 text-xs text-muted mb-3"><User size={12} /> Sarah M.</div>
                <button className="btn-secondary" style={{ background: 'white', border: '1px solid #d1fae5', color: 'var(--success)' }}>Join Session</button>
              </div>
            </div>
          </div>
        </div>

        {/* Weekly Earnings */}
        <div className="p-5 rounded-2xl flex-col gap-2" style={{ background: 'var(--primary)', color: 'white', height: 'fit-content' }}>
          <div className="flex items-center gap-2 text-sm font-semibold opacity-90">
            <div style={{ background: 'rgba(255,255,255,0.2)', padding: 4, borderRadius: 4 }}><MonitorPlay size={14} /></div>
            Weekly Earnings
          </div>
          <div className="text-h1 mt-1" style={{ fontSize: 36 }}>$340.00</div>
          <div className="text-xs font-medium mb-2" style={{ color: '#a5f3fc' }}>↗ +12% from last week</div>
          
          <div className="flex justify-between items-center mt-2 p-3 rounded-lg" style={{ background: 'rgba(255,255,255,0.1)' }}>
            <div className="text-sm font-semibold">Completed Sessions</div>
            <div className="text-sm font-bold bg-white text-primary px-2 py-1 rounded" style={{ color: 'var(--primary)' }}>8</div>
          </div>
        </div>
      </div>
    </div>
  );
}
