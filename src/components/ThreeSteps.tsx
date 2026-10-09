import { useState } from 'react';
import { 
  Inbox, 
  HardDrive, 
  Bell, 
  BarChart3, 
  Users, 
  LayoutGrid, 
  Coins, 
  Search, 
  Plus, 
  Check, 
  ArrowRight,
  Sparkles 
} from 'lucide-react';
import { TaskGoIcon } from './TaskGoLogo';

export default function ThreeSteps() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'Simple and Fast Setup',
      description: 'Sales teams powered by AI for top-notch decision-making',
    },
    {
      number: '02',
      title: 'Work Together Effortlessly',
      description: 'Sales teams enhanced by AI for superior decision-making',
    },
    {
      number: '03',
      title: 'Monitor Your Progress',
      description: 'AI-enhanced sales teams for exceptional decision-making',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FAFAFC] border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-extrabold tracking-[-0.03em] text-[#111827] leading-[1.15]">
            Get Started in Just 3 Easy Steps
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-500 font-normal">
            Get started in just 3 easy steps with a guided onboarding experience designed for speed and simplicity.
          </p>
        </div>

        {/* Floating Perspective Mockup Card */}
        <div className="relative max-w-4xl mx-auto mb-16">
          {/* Subtle purple aura */}
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 via-purple-400/10 to-transparent rounded-3xl blur-2xl transform -rotate-1 scale-105 pointer-events-none" />

          {/* Perspective Container */}
          <div className="relative rounded-2xl md:rounded-3xl border border-slate-200/90 bg-white shadow-2xl overflow-hidden">
            {/* Top Browser Bar */}
            <div className="px-4 py-2.5 bg-slate-50 border-b border-slate-100 flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              </div>
              <div className="mx-auto w-1/3 py-0.5 px-3 bg-white rounded-md border border-slate-200/60 text-[10px] text-slate-400 text-center font-mono">
                app.taskgo.com/workspaces/onboarding
              </div>
            </div>

            {/* Mockup Inside Split: Sidebar + Board */}
            <div className="flex flex-col md:flex-row min-h-[360px]">
              
              {/* Left Sidebar */}
              <div className="w-full md:w-56 p-4 border-r border-slate-100 bg-slate-50/60 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <TaskGoIcon size={20} />
                    <span className="font-bold text-xs text-slate-800">TaskGo</span>
                  </div>

                  <div className="space-y-1 text-xs">
                    <div className="px-2.5 py-1.5 rounded-lg bg-indigo-50/80 text-indigo-600 font-bold flex items-center gap-2">
                      <Inbox size={14} />
                      <span>Inbox</span>
                      <span className="ml-auto text-[10px] px-1.5 py-0.2 bg-indigo-600 text-white rounded-full">3</span>
                    </div>
                    <div className="px-2.5 py-1.5 rounded-lg text-slate-600 hover:bg-slate-100/70 font-medium flex items-center gap-2">
                      <HardDrive size={14} />
                      <span>Drive files</span>
                    </div>
                    <div className="px-2.5 py-1.5 rounded-lg text-slate-600 hover:bg-slate-100/70 font-medium flex items-center gap-2">
                      <Bell size={14} />
                      <span>Updates</span>
                    </div>
                    <div className="px-2.5 py-1.5 rounded-lg text-slate-600 hover:bg-slate-100/70 font-medium flex items-center gap-2">
                      <BarChart3 size={14} />
                      <span>Analytics</span>
                    </div>
                    <div className="px-2.5 py-1.5 rounded-lg text-slate-600 hover:bg-slate-100/70 font-medium flex items-center gap-2">
                      <Users size={14} />
                      <span>CRM Dashboard</span>
                    </div>
                    <div className="px-2.5 py-1.5 rounded-lg text-slate-600 hover:bg-slate-100/70 font-medium flex items-center gap-2">
                      <LayoutGrid size={14} />
                      <span>Boards</span>
                    </div>
                    <div className="px-2.5 py-1.5 rounded-lg text-slate-600 hover:bg-slate-100/70 font-medium flex items-center gap-2">
                      <Coins size={14} />
                      <span>Cryptocurrency</span>
                    </div>
                  </div>
                </div>

                {/* Profile snippet */}
                <div className="pt-3 border-t border-slate-200/60 flex items-center gap-2">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                    alt="User"
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <div className="text-[11px] leading-tight">
                    <p className="font-bold text-slate-800">Sarah Jenkins</p>
                    <p className="text-[9px] text-slate-400">Workspace Owner</p>
                  </div>
                </div>
              </div>

              {/* Main Content Area: Task Boards */}
              <div className="flex-1 p-5 md:p-6 bg-white flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                    <div>
                      <h4 className="text-base font-bold text-slate-900">Task Boards</h4>
                      <p className="text-xs text-slate-400">Manage team sprint cycle 14</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="relative">
                        <Search size={12} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          type="text"
                          placeholder="Search..."
                          className="pl-7 pr-2 py-1 rounded-md bg-slate-50 border border-slate-200 text-xs w-28 sm:w-36 focus:outline-none"
                          readOnly
                        />
                      </div>
                      <button className="px-2.5 py-1 rounded-md bg-indigo-600 text-white text-xs font-semibold flex items-center gap-1 shadow-xs">
                        <Plus size={12} />
                        <span>Add</span>
                      </button>
                    </div>
                  </div>

                  {/* Sample Task Cards in Board view */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl border border-slate-200/80 bg-slate-50/50 shadow-xs">
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 border border-blue-100">
                          In Review
                        </span>
                        <span className="text-[10px] text-slate-400">2h left</span>
                      </div>
                      <p className="text-xs font-bold text-slate-800">API Documentation Sync</p>
                      <div className="mt-3 flex items-center justify-between">
                        <span className="text-[10px] text-slate-400">Backend Team</span>
                        <div className="flex -space-x-1">
                          <img className="w-5 h-5 rounded-full ring-1 ring-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" alt="Avatar" />
                          <img className="w-5 h-5 rounded-full ring-1 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80" alt="Avatar" />
                        </div>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl border border-indigo-200/90 bg-indigo-50/30 shadow-xs">
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100">
                          Automated
                        </span>
                        <span className="text-[10px] text-slate-400">Rule 04</span>
                      </div>
                      <p className="text-xs font-bold text-slate-800">Customer Feedback Routing</p>
                      <div className="mt-3 flex items-center justify-between">
                        <span className="text-[10px] text-indigo-600 font-medium">Auto-trigger on</span>
                        <div className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[10px]">
                          <Sparkles size={10} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                  <span>Showing 12 active boards</span>
                  <span className="text-indigo-600 font-semibold flex items-center gap-1 cursor-pointer">
                    View all <ArrowRight size={12} />
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* 3 Step Cards */}
        <div className="max-w-2xl mx-auto space-y-4">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              onClick={() => setActiveStep(idx)}
              className={`p-5 rounded-2xl border transition-all duration-200 flex items-start gap-4 cursor-pointer ${
                activeStep === idx
                  ? 'bg-white border-indigo-300 shadow-md ring-1 ring-indigo-500/20'
                  : 'bg-white border-slate-200/80 shadow-xs hover:border-slate-300'
              }`}
            >
              {/* Number Badge */}
              <div className="w-9 h-9 rounded-full bg-indigo-50 border border-indigo-100 text-[#5843E0] font-extrabold text-sm flex items-center justify-center shrink-0">
                {step.number}
              </div>

              {/* Text */}
              <div className="flex-1">
                <h3 className="text-base font-bold text-slate-900 tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              {/* Status check if active */}
              {activeStep === idx && (
                <div className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center shrink-0">
                  <Check size={14} />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
