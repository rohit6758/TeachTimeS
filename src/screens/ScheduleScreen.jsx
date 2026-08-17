import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Clock, Sun, Sunrise, Monitor, Home } from 'lucide-react';

export default function ScheduleScreen() {
  const [selectedDate, setSelectedDate] = useState('13');
  const [selectedSlot, setSelectedSlot] = useState('11:00 AM');
  const [sessionType, setSessionType] = useState('online'); // online or offline

  return (
    <div className="p-5 flex-col gap-4">
      <div className="badge badge-light" style={{ alignSelf: 'flex-start', background: '#e0f2fe', color: '#0369a1', fontSize: 9 }}>GATE PREPARATION</div>
      
      <div className="mt-2 text-h1" style={{ color: 'var(--primary)', lineHeight: 1.1, fontSize: 32 }}>CS - Data<br/>Structures</div>
      <p className="text-body text-muted mt-2">Prof. Alan Turing • Expert level algorithm analysis</p>

      {/* Pricing Options */}
      <div className="mt-4 flex gap-3">
        <div className="card flex-1 flex-col items-center justify-center gap-1" style={{ padding: '16px 8px' }}>
          <div className="text-xs font-bold text-muted" style={{ letterSpacing: 1 }}>ONLINE</div>
          <div className="text-h2" style={{ color: 'var(--primary)' }}>₹15<span className="text-sm font-normal">/min</span></div>
        </div>
        <div className="card flex-1 flex-col items-center justify-center gap-1" style={{ padding: '16px 8px' }}>
          <div className="text-xs font-bold text-muted" style={{ letterSpacing: 1 }}>OFFLINE</div>
          <div className="text-h2" style={{ color: 'var(--primary)' }}>₹1200<span className="text-sm font-normal">/hr</span></div>
        </div>
      </div>

      {/* Select Date */}
      <div className="mt-6">
        <div className="flex justify-between items-center mb-4">
          <div className="text-h3 font-bold" style={{ color: 'var(--primary)' }}>Select Date</div>
          <div className="flex gap-2">
            <ChevronLeft size={16} color="var(--text-muted)" />
            <ChevronRight size={16} color="var(--primary)" />
          </div>
        </div>
        
        <div className="flex gap-3 overflow-x-auto" style={{ margin: '0 -20px', padding: '0 20px', paddingBottom: 8 }}>
          <div className="card flex-col items-center justify-center gap-1" style={{ minWidth: 80, padding: '16px 8px' }}>
            <div className="text-xs text-muted font-semibold">Mon</div>
            <div className="text-h2" style={{ color: 'var(--primary)' }}>12</div>
            <div className="text-xs font-semibold" style={{ color: 'var(--success)' }}>4 slots</div>
          </div>
          <div className="card flex-col items-center justify-center gap-1" style={{ minWidth: 80, padding: '16px 8px', background: 'var(--primary)', color: 'white' }}>
            <div className="text-xs font-semibold opacity-80">Tue</div>
            <div className="text-h2 text-white">13</div>
            <div className="text-xs font-semibold opacity-80">8 slots</div>
          </div>
          <div className="card flex-col items-center justify-center gap-1" style={{ minWidth: 80, padding: '16px 8px' }}>
            <div className="text-xs text-muted font-semibold">Wed</div>
            <div className="text-h2" style={{ color: 'var(--primary)' }}>14</div>
            <div className="text-xs font-semibold text-muted">0 slots</div>
          </div>
        </div>
      </div>

      {/* Available Slots */}
      <div className="mt-6 card">
        <div className="flex items-center gap-2 mb-4">
          <Clock size={16} color="var(--primary)" />
          <div className="text-h3 font-bold" style={{ color: 'var(--primary)' }}>Available Slots</div>
        </div>

        {/* Morning */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-3 text-sm text-muted font-semibold">
            <Sunrise size={14} /> Morning
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {['09:00 AM', '09:30 AM'].map(time => (
              <div key={time} style={{ padding: '8px 12px', border: '1px solid var(--border)', borderRadius: 8, fontSize: 13, fontWeight: 500 }}>{time}</div>
            ))}
            <div style={{ padding: '8px 12px', background: '#f5f5f5', color: '#a3a3a3', borderRadius: 8, fontSize: 13, fontWeight: 500 }}>10:00 AM</div>
            {['10:30 AM', '11:00 AM'].map(time => (
              <div key={time} style={{ padding: '8px 12px', border: time === selectedSlot ? '2px solid var(--primary)' : '1px solid var(--border)', borderRadius: 8, fontSize: 13, fontWeight: 600, color: time === selectedSlot ? 'var(--primary)' : 'inherit', background: time === selectedSlot ? '#f0fbff' : 'transparent' }}>{time}</div>
            ))}
          </div>
        </div>

        {/* Afternoon */}
        <div>
          <div className="flex items-center gap-2 mb-3 text-sm text-muted font-semibold">
            <Sun size={14} /> Afternoon
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {['01:00 PM', '01:30 PM', '02:00 PM'].map(time => (
              <div key={time} style={{ padding: '8px 12px', border: '1px solid var(--border)', borderRadius: 8, fontSize: 13, fontWeight: 500 }}>{time}</div>
            ))}
          </div>
        </div>
      </div>

      {/* Session Details */}
      <div className="mt-4 card flex-col gap-4">
        <div className="text-h3 font-bold" style={{ color: 'var(--primary)' }}>Session Details</div>
        
        {/* Toggle Online/Offline */}
        <div style={{ display: 'flex', background: 'var(--bg-color)', padding: 4, borderRadius: 10 }}>
          <div 
            className="flex-1 flex justify-center items-center gap-2" 
            style={{ padding: '8px 0', background: sessionType === 'online' ? 'white' : 'transparent', borderRadius: 8, boxShadow: sessionType === 'online' ? 'var(--shadow-sm)' : 'none', fontWeight: 600, fontSize: 13, cursor: 'pointer' }}
            onClick={() => setSessionType('online')}
          >
            <Monitor size={14} /> Online
          </div>
          <div 
            className="flex-1 flex justify-center items-center gap-2 text-muted" 
            style={{ padding: '8px 0', background: sessionType === 'offline' ? 'white' : 'transparent', borderRadius: 8, boxShadow: sessionType === 'offline' ? 'var(--shadow-sm)' : 'none', fontWeight: 600, fontSize: 13, cursor: 'pointer' }}
            onClick={() => setSessionType('offline')}
          >
            <Home size={14} /> Offline
          </div>
        </div>

        {/* Summary */}
        <div className="flex-col gap-3">
          <div className="flex justify-between items-center text-sm">
            <div className="text-muted">Date</div>
            <div className="font-semibold">Tue, Aug 13</div>
          </div>
          <div className="flex justify-between items-center text-sm">
            <div className="text-muted">Time</div>
            <div className="font-semibold">11:00 AM - 12:00 PM</div>
          </div>
          <div className="flex justify-between items-center text-sm">
            <div className="text-muted">Duration</div>
            <div className="font-semibold">60 mins</div>
          </div>
        </div>

        <div style={{ height: 1, background: 'var(--border)' }}></div>

        <div className="flex justify-between items-end">
          <div className="text-sm text-muted font-medium">Estimated Total</div>
          <div className="text-h1" style={{ color: 'var(--primary)' }}>₹900</div>
        </div>

        <button className="btn-primary mt-2">Confirm Booking</button>
      </div>
    </div>
  );
}
