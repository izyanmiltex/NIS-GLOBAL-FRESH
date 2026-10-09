import { useState } from 'react';
import { 
  Check, 
  Paperclip, 
  Send, 
  FileText, 
  ArrowDown, 
  Plus, 
  CheckCircle2, 
  Clock, 
  Layers, 
  Sparkles 
} from 'lucide-react';

export default function FeaturesBento() {
  const [commentInput, setCommentInput] = useState('');
  const [comments, setComments] = useState([
    {
      id: 1,
      author: 'Henry Mason',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
      text: 'Attached the updated design system files. Please take a look!',
      attachment: 'design-tokens-v2.pdf',
      time: '10:24 AM'
    },
    {
      id: 2,
      author: 'Mark Ray',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
      text: 'Looks great! Leaving comments on frame 3.',
      time: '10:45 AM'
    },
    {
      id: 3,
      author: 'Liam Parker',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80',
      text: 'Final QA checklist is approved.',
      time: '11:12 AM'
    },
    {
      id: 4,
      author: 'Emma Collins',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
      text: 'Pushing changes to staging server now.',
      time: '11:30 AM'
    }
  ]);

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentInput.trim()) return;
    setComments([
      ...comments,
      {
        id: Date.now(),
        author: 'You',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
        text: commentInput.trim(),
        time: 'Just now'
      }
    ]);
    setCommentInput('');
  };

  return (
    <section id="features" className="py-20 md:py-28 bg-[#FAFAFC] border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-extrabold tracking-[-0.03em] text-[#111827] leading-[1.15]">
            Unlock Premium Benefits With
            <span className="block mt-1">Our Advanced Features.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-500 font-normal">
            Unlock premium benefits with advanced features designed to scale.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Smart Task Organization */}
          <div className="bg-white rounded-2xl md:rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between hover:shadow-lg transition-all duration-200">
            <div>
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">Smart Task Organization</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed">
                Create, categorize, and prioritize tasks with ease using flexible lists, boards, and timelines.
              </p>
            </div>

            {/* Mockup: Task Summary & Breakdown */}
            <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200/70">
                <span className="text-xs font-bold text-slate-900">105 Tasks</span>
                <span className="text-[11px] font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">
                  Updated Live
                </span>
              </div>

              {/* Status List with Progress Bars */}
              <div className="space-y-2.5 mt-3 text-xs">
                <div>
                  <div className="flex justify-between text-[11px] text-slate-500 mb-1">
                    <span className="flex items-center gap-1.5 font-medium">
                      <span className="w-2 h-2 rounded-full bg-slate-400" /> Not Started
                    </span>
                    <span className="font-semibold text-slate-700">24</span>
                  </div>
                  <div className="w-full bg-slate-200/80 rounded-full h-1.5">
                    <div className="bg-slate-400 h-1.5 rounded-full" style={{ width: '23%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] text-slate-500 mb-1">
                    <span className="flex items-center gap-1.5 font-medium">
                      <span className="w-2 h-2 rounded-full bg-blue-500" /> On Progress
                    </span>
                    <span className="font-semibold text-slate-700">48</span>
                  </div>
                  <div className="w-full bg-slate-200/80 rounded-full h-1.5">
                    <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '46%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] text-slate-500 mb-1">
                    <span className="flex items-center gap-1.5 font-medium">
                      <span className="w-2 h-2 rounded-full bg-amber-500" /> In Review
                    </span>
                    <span className="font-semibold text-slate-700">18</span>
                  </div>
                  <div className="w-full bg-slate-200/80 rounded-full h-1.5">
                    <div className="bg-amber-500 h-1.5 rounded-full" style={{ width: '17%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] text-slate-500 mb-1">
                    <span className="flex items-center gap-1.5 font-medium">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" /> Completed
                    </span>
                    <span className="font-semibold text-slate-700">15</span>
                  </div>
                  <div className="w-full bg-slate-200/80 rounded-full h-1.5">
                    <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: '14%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Automated Workflows */}
          <div className="bg-white rounded-2xl md:rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between hover:shadow-lg transition-all duration-200">
            <div>
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">Automated Workflows</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed">
                Streamline your workflow with automation for tasks, updates, and assignments.
              </p>
            </div>

            {/* Visual Workflow Flow */}
            <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-center">
              <div className="w-full flex items-center justify-between text-[11px] font-bold text-slate-700 mb-3">
                <span>Assignments</span>
                <span className="text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                  Active Rule
                </span>
              </div>

              {/* Node 1 */}
              <div className="w-full p-2.5 bg-white rounded-lg border border-slate-200 shadow-xs flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-md bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                  <Layers size={14} />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-bold text-slate-800 truncate">User Journey Mapping & Design</p>
                  <p className="text-[10px] text-slate-400">Trigger: On card creation</p>
                </div>
              </div>

              {/* Arrow */}
              <div className="my-1.5 flex items-center justify-center text-slate-400">
                <ArrowDown size={14} />
              </div>

              {/* Node 2 */}
              <div className="w-full p-2.5 bg-white rounded-lg border border-indigo-200 shadow-xs flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Sparkles size={14} />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-bold text-slate-800 truncate">Assign to: Lead Product Designer</p>
                  <p className="text-[10px] text-slate-400">Auto-sync with Slack channel</p>
                </div>
              </div>

              {/* Add rule button */}
              <button className="mt-3 text-[11px] font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1">
                <Plus size={12} />
                <span>Add new assignment</span>
              </button>
            </div>
          </div>

          {/* Card 3 (Right Column, spans 2 rows on large screens): File & Comment Management */}
          <div className="bg-white rounded-2xl md:rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] lg:row-span-2 flex flex-col justify-between hover:shadow-lg transition-all duration-200">
            <div>
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">File & Comment Management</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed">
                Centralize everything with task comments, file attachments, and feedback threads.
              </p>
            </div>

            {/* Chat Mockup */}
            <div className="mt-6 flex-1 flex flex-col justify-between rounded-xl bg-slate-50 border border-slate-100 p-4 min-h-[360px]">
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200/70">
                  <span className="text-xs font-bold text-slate-900">New Messages</span>
                  <span className="w-5 h-5 rounded-full bg-indigo-600 text-white text-[10px] font-bold flex items-center justify-center">
                    {comments.length}
                  </span>
                </div>

                <div className="space-y-3.5 max-h-[320px] overflow-y-auto pr-1">
                  {comments.map((msg) => (
                    <div key={msg.id} className="flex items-start gap-2.5">
                      <img
                        src={msg.avatar}
                        alt={msg.author}
                        className="w-7 h-7 rounded-full object-cover shrink-0 mt-0.5"
                      />
                      <div className="flex-1 min-w-0 bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-xs">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[11px] font-bold text-slate-900">{msg.author}</span>
                          <span className="text-[10px] text-slate-400">{msg.time}</span>
                        </div>
                        <p className="text-xs text-slate-600 leading-snug">{msg.text}</p>
                        
                        {msg.attachment && (
                          <div className="mt-2 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-indigo-50/70 border border-indigo-100 text-[10px] font-semibold text-indigo-700">
                            <FileText size={12} />
                            <span className="truncate">{msg.attachment}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reply Input Form */}
              <form onSubmit={handleAddComment} className="mt-4 pt-3 border-t border-slate-200/70">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    placeholder="Write a comment..."
                    value={commentInput}
                    onChange={(e) => setCommentInput(e.target.value)}
                    className="w-full pl-3 pr-16 py-2 rounded-full bg-white border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 shadow-xs"
                  />
                  <div className="absolute right-1 flex items-center gap-1">
                    <button
                      type="button"
                      className="p-1 text-slate-400 hover:text-slate-600 rounded-full"
                      aria-label="Attach file"
                    >
                      <Paperclip size={13} />
                    </button>
                    <button
                      type="submit"
                      className="p-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full transition-colors shadow-xs"
                      aria-label="Send message"
                    >
                      <Send size={11} />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Card 4: Real-Time Progress Tracking (spans col 1 & 2 on large screens) */}
          <div className="bg-white rounded-2xl md:rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] md:col-span-2 lg:col-span-2 flex flex-col justify-between hover:shadow-lg transition-all duration-200">
            <div>
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">Real-Time Progress Tracking</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed">
                Track deadlines, milestones, and performance with live status updates and visual indicators.
              </p>
            </div>

            {/* Table Mockup */}
            <div className="mt-6 rounded-xl bg-slate-50 border border-slate-100 p-4 overflow-x-auto">
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-200/70 text-xs font-bold text-slate-800">
                <span>Project Overview</span>
                <span className="text-[11px] text-slate-400 font-normal">Q4 Deliverables</span>
              </div>

              <table className="w-full text-left text-xs min-w-[420px]">
                <thead>
                  <tr className="text-slate-400 text-[10px] uppercase font-semibold border-b border-slate-100">
                    <th className="py-2 font-medium">Project Name</th>
                    <th className="py-2 font-medium">Team</th>
                    <th className="py-2 font-medium">Status</th>
                    <th className="py-2 font-medium text-right">Progress</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium">
                  <tr>
                    <td className="py-2.5 font-bold text-slate-800">Support Platform</td>
                    <td className="py-2.5">
                      <div className="flex -space-x-1.5">
                        <img className="w-5 h-5 rounded-full ring-1 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Team member" />
                        <img className="w-5 h-5 rounded-full ring-1 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" alt="Team member" />
                      </div>
                    </td>
                    <td className="py-2.5">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-600 border border-emerald-200">
                        Completed
                      </span>
                    </td>
                    <td className="py-2.5 text-right font-bold text-slate-700">100%</td>
                  </tr>

                  <tr>
                    <td className="py-2.5 font-bold text-slate-800">Marketing Campaign</td>
                    <td className="py-2.5">
                      <div className="flex -space-x-1.5">
                        <img className="w-5 h-5 rounded-full ring-1 ring-white object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80" alt="Team member" />
                        <img className="w-5 h-5 rounded-full ring-1 ring-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80" alt="Team member" />
                        <img className="w-5 h-5 rounded-full ring-1 ring-white object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80" alt="Team member" />
                      </div>
                    </td>
                    <td className="py-2.5">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-blue-50 text-blue-600 border border-blue-200">
                        In Progress
                      </span>
                    </td>
                    <td className="py-2.5 text-right font-bold text-slate-700">75%</td>
                  </tr>

                  <tr>
                    <td className="py-2.5 font-bold text-slate-800">Cortex iOS Development</td>
                    <td className="py-2.5">
                      <div className="flex -space-x-1.5">
                        <img className="w-5 h-5 rounded-full ring-1 ring-white object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80" alt="Team member" />
                        <img className="w-5 h-5 rounded-full ring-1 ring-white object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=80" alt="Team member" />
                      </div>
                    </td>
                    <td className="py-2.5">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-indigo-50 text-indigo-600 border border-indigo-200">
                        On Track
                      </span>
                    </td>
                    <td className="py-2.5 text-right font-bold text-slate-700">88%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
