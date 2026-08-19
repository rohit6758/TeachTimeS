import React from 'react';
import { GraduationCap, Book, FileText, CheckCircle2, Circle, CheckSquare, Square, Plus } from 'lucide-react';

export default function ProfileScreen() {
  return (
    <div className="p-5 flex-col gap-4">
      {/* Profile Header Card */}
      <div className="card p-0 overflow-hidden relative">
        <div style={{ height: 100, background: 'linear-gradient(to right, #003366, #60a5fa)' }}></div>
        <div style={{ padding: '0 20px 20px 20px', position: 'relative' }}>
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=faces" 
            alt="Alex Johnson" 
            style={{ width: 80, height: 80, borderRadius: 40, border: '4px solid white', marginTop: -40, background: 'white', objectFit: 'cover' }}
          />
          <div className="text-h1 mt-3" style={{ fontSize: 24, lineHeight: 1.1 }}>Alex Johnson</div>
          <div className="text-sm font-medium mt-1">Computer Science Engineering |<br/>GATE Aspirant 2025</div>
          <div className="text-xs text-muted mt-1">NIT Surathkal, Karnataka</div>
          
          <div className="flex gap-3 mt-4">
            <button className="btn-primary" style={{ padding: '8px 24px', flex: 0 }}>Connect</button>
            <button className="btn-secondary" style={{ padding: '8px 24px', flex: 0, background: 'var(--bg-color)', color: 'var(--text-main)', border: '1px solid var(--border)' }}>Message</button>
          </div>
        </div>
      </div>

      <div className="responsive-grid-2 mt-2">
        <div className="flex-col gap-4">
          {/* Current Education */}
          <div className="card">
            <div className="text-h3 font-bold mb-4">Current Education</div>
            <div className="flex gap-3">
              <div style={{ width: 40, height: 40, borderRadius: 8, background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <GraduationCap size={20} color="var(--primary)" />
              </div>
              <div className="flex-col">
                <div className="text-sm font-bold">National Institute of Technology, Surathkal</div>
                <div className="text-xs font-semibold text-muted mt-1">B.Tech in Computer Science and Engineering</div>
                <div className="text-xs text-muted">2021 - 2025</div>
                
                <ul className="mt-3 pl-4 text-xs flex-col gap-2" style={{ color: 'var(--text-main)' }}>
                  <li>Current CGPA: 8.5/10</li>
                  <li>Core member of Web Enthusiasts' Club</li>
                  <li>Focusing on Data Structures, Algorithms, and Machine Learning</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Skills Verified */}
          <div className="card">
            <div className="text-h3 font-bold mb-3">Skills Verified</div>
            <div className="flex flex-wrap gap-2">
              {['C++', 'Data Structures', 'Python', 'Operating Systems'].map(skill => (
                <div key={skill} className="flex items-center gap-1 border border-gray-200 rounded-full px-3 py-1 bg-gray-50 text-xs font-semibold">
                  {skill}
                  <CheckCircle2 size={12} color="var(--success)" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-col gap-4">
          {/* Learning Library */}
          <div className="card p-0 overflow-hidden">
            <div className="flex justify-between items-center p-4 pb-2">
              <div className="text-h3 font-bold">Learning Library</div>
              <div className="text-xs font-semibold text-muted">View All</div>
            </div>
            <div className="p-4 flex-col gap-3 pt-2">
              <div className="flex items-center gap-3 border border-gray-200 rounded-lg p-3">
                <div style={{ padding: 8, background: '#fee2e2', borderRadius: 6 }}><FileText size={16} color="#ef4444" /></div>
                <div className="flex-col flex-1">
                  <div className="text-sm font-bold">GATE 2023 CS Previous ...</div>
                  <div className="text-xs text-muted mt-1">Downloaded 3 days ago</div>
                </div>
              </div>
              <div className="flex items-center gap-3 border border-gray-200 rounded-lg p-3">
                <div style={{ padding: 8, background: '#e0e7ff', borderRadius: 6 }}><Book size={16} color="#4f46e5" /></div>
                <div className="flex-col flex-1">
                  <div className="text-sm font-bold">Advanced Algorithms No...</div>
                  <div className="text-xs text-muted mt-1">Prof. Sharma • 45 pages</div>
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Goals */}
          <div className="card flex-col gap-3">
            <div className="text-h3 font-bold mb-2">Upcoming Goals</div>
            
            <div className="flex gap-3 items-start">
              <Square size={18} color="var(--border)" className="mt-0.5" />
              <div className="flex-col">
                <div className="text-sm font-semibold">Complete Mock Test #4</div>
                <div className="text-xs font-semibold mt-1" style={{ color: '#ea580c' }}>Due Today</div>
              </div>
            </div>
            
            <div className="flex gap-3 items-start mt-2">
              <Square size={18} color="var(--border)" className="mt-0.5" />
              <div className="flex-col">
                <div className="text-sm font-semibold">Review Automata Theory Notes</div>
                <div className="text-xs font-semibold text-muted mt-1">Due Tomorrow</div>
              </div>
            </div>

            <div className="flex gap-3 items-start mt-2 opacity-50">
              <CheckSquare size={18} color="var(--primary)" className="mt-0.5" />
              <div className="flex-col">
                <div className="text-sm font-semibold" style={{ textDecoration: 'line-through' }}>Schedule 1:1 with tutor</div>
              </div>
            </div>

            <button className="flex items-center justify-center gap-2 mt-4 text-sm font-bold" style={{ color: 'var(--primary)', padding: '12px', border: '1px solid var(--border)', borderRadius: 8, background: 'var(--bg-color)' }}>
              <Plus size={16} /> Add New Task
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
