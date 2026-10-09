import { useState } from 'react';
import { TaskGoIcon } from './TaskGoLogo';
import { Check, Sparkles } from 'lucide-react';

export default function Integrations() {
  const [selectedTool, setSelectedTool] = useState<string | null>(null);

  const tools = [
    {
      id: 'slack',
      name: 'Slack',
      category: 'Communication',
      color: 'bg-emerald-50 text-emerald-600 border-emerald-200',
      x: '15%',
      y: '50%',
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
        </svg>
      )
    },
    {
      id: 'figma',
      name: 'Figma',
      category: 'Design Systems',
      color: 'bg-indigo-50 text-indigo-600 border-indigo-200',
      x: '75%',
      y: '22%',
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M12 12a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0-12a6 6 0 0 0-6 6 6 6 0 0 0 6 6 6 6 0 0 0 6-6 6 6 0 0 0-6-6zm0 12a6 6 0 0 0-6 6 6 6 0 0 0 6 6 6 6 0 0 0 6-6 6 6 0 0 0-6-6z" />
        </svg>
      )
    },
    {
      id: 'notion',
      name: 'Notion',
      category: 'Knowledge Base',
      color: 'bg-slate-50 text-slate-800 border-slate-200',
      x: '38%',
      y: '32%',
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.093-.373L17.7 1.83a2.11 2.11 0 0 0-1.446-.56L3.06 2.063c-.42 0-.513.28-.327.466zm.886 4.385v12.268c0 .746.373 1.026 1.213.98l14.475-.84c.84-.047 1.026-.513 1.026-1.12V5.794c0-.607-.28-.887-.84-.84l-14.85.886c-.746.047-1.024.42-1.024.753zm13.12 1.353l.094 9.143-2.147.14-.046-6.483-3.452 6.576-2.007.14-3.5-6.623-.047 6.67-2.007.14.047-9.144 2.473-.14 3.78 6.997 3.593-6.81z" />
        </svg>
      )
    },
    {
      id: 'jira',
      name: 'Jira',
      category: 'Issue Tracking',
      color: 'bg-blue-50 text-blue-600 border-blue-200',
      x: '62%',
      y: '32%',
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M11.53 2c0 2.4 1.97 4.35 4.39 4.35h1.74v1.74c0 2.4 1.97 4.35 4.39 4.35V2h-10.52zm-5.76 5.76c0 2.4 1.97 4.35 4.39 4.35h1.74v1.74c0 2.4 1.97 4.35 4.39 4.35V7.76H5.77zM0 13.52c0 2.4 1.97 4.35 4.39 4.35h1.74v1.74c0 2.4 1.97 4.35 4.39 4.35v-10.44H0z" />
        </svg>
      )
    },
    {
      id: 'github',
      name: 'GitHub',
      category: 'Code Repository',
      color: 'bg-amber-50 text-amber-600 border-amber-200',
      x: '25%',
      y: '22%',
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      )
    },
    {
      id: 'zapier',
      name: 'Zapier',
      category: 'Automation',
      color: 'bg-orange-50 text-orange-600 border-orange-200',
      x: '62%',
      y: '68%',
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M12 0a2 2 0 0 0-2 2v6.586L4.586 3.172A2 2 0 0 0 1.757 6l5.415 5.414H2a2 2 0 0 0 0 4h5.172L1.757 20.828a2 2 0 1 0 2.829 2.829L10 18.242V22a2 2 0 1 0 4 0v-3.758l5.414 5.415a2 2 0 1 0 2.829-2.829L16.828 15.414H22a2 2 0 1 0 0-4h-5.172l5.414-5.414A2 2 0 0 0 19.414 3.172L14 8.586V2a2 2 0 0 0-2-2z" />
        </svg>
      )
    },
    {
      id: 'google-drive',
      name: 'Google Drive',
      category: 'Cloud Storage',
      color: 'bg-emerald-50 text-emerald-600 border-emerald-200',
      x: '38%',
      y: '68%',
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M12.01 1.99a1 1 0 0 0-.86.5l-7.79 13.5a1 1 0 0 0 .86 1.5h15.58a1 1 0 0 0 .86-1.5l-7.79-13.5a1 1 0 0 0-.86-.5zm-4.33 13.5L12 7.5l4.32 7.99H7.68z" />
        </svg>
      )
    },
    {
      id: 'asana',
      name: 'Asana',
      category: 'Task Tracking',
      color: 'bg-rose-50 text-rose-600 border-rose-200',
      x: '85%',
      y: '50%',
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <circle cx="12" cy="6.5" r="4.5" />
          <circle cx="5" cy="17.5" r="4.5" />
          <circle cx="19" cy="17.5" r="4.5" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-extrabold tracking-[-0.03em] text-[#111827] leading-[1.15]">
            Effortless Tool Integrations
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-500 font-normal max-w-xl mx-auto">
            Add or remove integrations as your needs grow, without slowing down performance.
          </p>
        </div>

        {/* Interactive Radial Orbital Canvas */}
        <div className="relative max-w-3xl mx-auto h-[440px] sm:h-[480px] flex items-center justify-center">
          
          {/* Outer Orbit Circle */}
          <div className="absolute w-[360px] h-[360px] sm:w-[420px] sm:h-[420px] rounded-full border border-dashed border-slate-200/90 pointer-events-none" />
          
          {/* Middle Orbit Circle */}
          <div className="absolute w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] rounded-full border border-dashed border-slate-200/80 pointer-events-none" />

          {/* Central Beacon: TaskGo */}
          <div className="relative z-20 flex items-center gap-2.5 px-6 py-3 rounded-full bg-white border-2 border-indigo-500/80 shadow-[0_10px_35px_rgba(88,67,224,0.18)]">
            <TaskGoIcon size={24} />
            <span className="text-base font-extrabold tracking-tight text-slate-900">
              Task<span className="text-indigo-600">Go</span>
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          </div>

          {/* Orbiting Tool Nodes */}
          {tools.map((tool) => (
            <div
              key={tool.id}
              onClick={() => setSelectedTool(selectedTool === tool.id ? null : tool.id)}
              style={{ left: tool.x, top: tool.y }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer group"
            >
              <div
                className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-115 group-hover:shadow-xl ${tool.color} ${
                  selectedTool === tool.id ? 'ring-4 ring-indigo-500/30 scale-115' : ''
                }`}
              >
                {tool.icon}
              </div>

              {/* Tooltip / Badge */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2.5 py-1 rounded-md bg-slate-900 text-white text-[10px] font-semibold whitespace-nowrap shadow-lg transition-all duration-150 pointer-events-none ${
                  selectedTool === tool.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100'
                }`}
              >
                <div className="flex items-center gap-1">
                  <span>{tool.name}</span>
                  <span className="text-emerald-400 font-bold">• Connected</span>
                </div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
