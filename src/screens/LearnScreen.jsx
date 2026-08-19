import React from 'react';
import { Search, ArrowRight, Book, Library, Play, Monitor, Zap, Wrench, Activity } from 'lucide-react';

export default function LearnScreen() {
  return (
    <div className="p-5 flex-col gap-4">
      <div className="text-h1" style={{ color: 'var(--primary)', lineHeight: 1.2 }}>What do you want<br/>to master today?</div>
      <p className="text-body text-muted mt-2">Explore thousands of live sessions, comprehensive notes, and expert tutors across diverse academic levels.</p>

      {/* Search */}
      <div className="mt-4 flex items-center" style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '4px 4px 4px 16px', boxShadow: 'var(--shadow-sm)' }}>
        <Search size={18} color="var(--text-muted)" />
        <input 
          type="text" 
          placeholder="Search subjects, tutors, or topics..." 
          style={{ border: 'none', outline: 'none', flex: 1, padding: '8px 12px', fontSize: 14 }}
        />
        <button className="btn-primary" style={{ padding: '10px', borderRadius: 'var(--radius-md)', width: 'auto' }}>
          <ArrowRight size={18} />
        </button>
      </div>

      {/* Tags */}
      <div className="mt-4 flex gap-2" style={{ flexWrap: 'wrap' }}>
        <span className="badge badge-light" style={{ padding: '6px 12px', background: 'transparent', border: '1px solid var(--border)', color: 'var(--text-muted)', fontWeight: 500, textTransform: 'none' }}>Advanced Calculus</span>
        <span className="badge badge-light" style={{ padding: '6px 12px', background: 'transparent', border: '1px solid var(--border)', color: 'var(--text-muted)', fontWeight: 500, textTransform: 'none' }}>Data Structures</span>
        <span className="badge badge-light" style={{ padding: '6px 12px', background: 'transparent', border: '1px solid var(--border)', color: 'var(--text-muted)', fontWeight: 500, textTransform: 'none' }}>Quantum Mechanics</span>
      </div>

      {/* Main Feature Cards */}
      <div className="mt-6 responsive-grid-2">
        <div className="card flex items-center justify-between" style={{ cursor: 'pointer', background: 'linear-gradient(135deg, #f0fbff 0%, #ffffff 100%)' }}>
          <div className="flex-col gap-1">
            <div style={{ background: '#bdf1ff', width: 40, height: 40, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 8 }}>
              <Book size={20} color="var(--primary)" />
            </div>
            <div className="text-h3">Study Planner</div>
            <div className="text-sm">Organize your week, set goals, and track your syllabus progress.</div>
          </div>
          <ArrowRight size={20} color="var(--text-muted)" style={{ transform: 'rotate(-45deg)', alignSelf: 'flex-start' }} />
        </div>

        <div className="card flex items-center justify-between" style={{ cursor: 'pointer', background: 'linear-gradient(135deg, #f0ecfc 0%, #ffffff 100%)' }}>
          <div className="flex-col gap-1">
            <div style={{ background: '#e0d4fc', width: 40, height: 40, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 8 }}>
              <Library size={20} color="var(--primary)" />
            </div>
            <div className="text-h3">Notes Library</div>
            <div className="text-sm">Access curated study materials, past papers, and personal notes.</div>
          </div>
          <ArrowRight size={20} color="var(--text-muted)" style={{ transform: 'rotate(-45deg)', alignSelf: 'flex-start' }} />
        </div>
      </div>

      {/* Pick up where you left off */}
      <div className="mt-6">
        <div className="text-sm" style={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12, color: 'var(--success)', display: 'flex', alignItems: 'center', gap: 6 }}>
          <Play size={12} fill="currentColor" /> Pick up where you left off
        </div>
        <div className="card">
          <div className="flex gap-3 items-center">
            <div style={{ width: 60, height: 60, background: '#f0f0f0', borderRadius: 8, overflow: 'hidden' }}>
              <img src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=120&h=120&fit=crop" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Math" />
            </div>
            <div className="flex-col flex-1">
              <div className="text-h3" style={{ fontSize: 15, lineHeight: 1.2 }}>Linear Algebra - Matrix Transformations</div>
              <div className="text-sm mt-1">Prof. Alan Turing</div>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-3">
            <div style={{ height: 4, background: 'var(--border)', flex: 1, borderRadius: 2, overflow: 'hidden' }}>
              <div style={{ width: '60%', height: '100%', background: 'var(--primary)' }}></div>
            </div>
            <div className="text-sm" style={{ fontWeight: 600 }}>60% completed</div>
            <button style={{ color: 'var(--primary)', fontWeight: 700, background: 'none', border: 'none', fontSize: 13, cursor: 'pointer' }}>Resume</button>
          </div>
        </div>
      </div>

      {/* Discover Subjects */}
      <div className="mt-6">
        <div className="text-h2">Discover Subjects</div>
        <p className="text-sm mt-1">Navigate through specialized tracks.</p>

        <div className="mt-4 flex gap-2">
          <button className="btn-primary" style={{ padding: '8px 16px', borderRadius: 20 }}>Engineering (GATE)</button>
          <button className="btn-secondary" style={{ padding: '8px 16px', borderRadius: 20, background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text-muted)' }}>Medical (NEET)</button>
        </div>

        <div className="mt-4 text-xs font-semibold text-muted" style={{ letterSpacing: 1 }}>SELECT BRANCH</div>
        <div className="responsive-grid-4" style={{ marginTop: 12 }}>
          <div className="card flex-col items-center justify-center gap-2" style={{ padding: '16px 8px', border: '2px solid var(--primary)', background: '#f5fbff' }}>
            <Monitor size={24} color="var(--primary)" />
            <div className="text-sm font-semibold" style={{ color: 'var(--primary)', textAlign: 'center' }}>Computer Science</div>
          </div>
          <div className="card flex-col items-center justify-center gap-2" style={{ padding: '16px 8px' }}>
            <Zap size={24} color="var(--text-muted)" />
            <div className="text-sm font-semibold text-center">Electrical Eng.</div>
          </div>
          <div className="card flex-col items-center justify-center gap-2" style={{ padding: '16px 8px' }}>
            <Wrench size={24} color="var(--text-muted)" />
            <div className="text-sm font-semibold text-center">Mechanical Eng.</div>
          </div>
          <div className="card flex-col items-center justify-center gap-2" style={{ padding: '16px 8px' }}>
            <Activity size={24} color="var(--text-muted)" />
            <div className="text-sm font-semibold text-center">Data Analytics</div>
          </div>
        </div>
      </div>
      
      {/* Upcoming Live Sessions */}
      <div className="mt-8 mb-4">
        <div className="flex justify-between items-end">
          <div className="flex-col">
            <div className="text-h2">Upcoming Live Sessions</div>
            <p className="text-sm mt-1">Book your seat for high-demand masterclasses.</p>
          </div>
          <button style={{ background: 'none', border: 'none', color: 'var(--primary)', fontSize: 13, fontWeight: 600, display: 'flex', alignItems: 'center' }}>
            View Schedule <ArrowRight size={14} style={{ marginLeft: 4 }} />
          </button>
        </div>

        <div className="mt-4" style={{ display: 'flex', gap: 16, overflowX: 'auto', paddingBottom: 8, margin: '0 -20px', padding: '0 20px' }}>
          <div className="card" style={{ minWidth: 280, padding: 0, overflow: 'hidden' }}>
            <div style={{ height: 140, background: 'var(--primary)', position: 'relative' }}>
              <img src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=200&fit=crop" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} alt="Code" />
              <div style={{ position: 'absolute', top: 12, left: 12, background: '#e11d48', color: 'white', padding: '4px 8px', borderRadius: 4, fontSize: 10, fontWeight: 700 }}>
                • Live in 2h
              </div>
            </div>
            <div className="p-4">
              <div className="flex gap-2 mb-2">
                <span className="badge badge-light">CS</span>
                <span className="badge badge-light">Algorithms</span>
              </div>
              <div className="text-h3" style={{ fontSize: 16, lineHeight: 1.3 }}>Mastering Dynamic Programming Patterns</div>
              <div className="mt-3 flex items-center gap-2">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=faces" style={{ width: 24, height: 24, borderRadius: 12 }} alt="Tutor" />
                <div className="text-sm font-semibold">Dr. S. Ramanujan</div>
              </div>
              <button className="btn-primary mt-4">Book Seat</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
