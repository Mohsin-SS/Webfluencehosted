import React, { useState, useEffect, useRef } from 'react';

const FILES = [
  {
    name: 'App.tsx',
    code: `
<span class="text-pink-400">import</span> <span class="text-blue-300">React</span>, { <span class="text-blue-300">useState</span> } <span class="text-pink-400">from</span> <span class="text-green-300">'react'</span>;
<span class="text-pink-400">import</span> { <span class="text-blue-300">Hero</span> } <span class="text-pink-400">from</span> <span class="text-green-300">'./components/Hero'</span>;

<span class="text-pink-400">export default function</span> <span class="text-yellow-200">App</span>() {
  <span class="text-pink-400">const</span> [<span class="text-blue-200">isReady</span>, <span class="text-blue-200">setReady</span>] = <span class="text-yellow-200">useState</span>(<span class="text-purple-300">false</span>);

  <span class="text-pink-400">return</span> (
    <span class="text-slate-400">&lt;</span><span class="text-blue-400">div</span> <span class="text-blue-200">className</span><span class="text-slate-400">=</span><span class="text-green-300">"min-h-screen bg-slate-900 text-white"</span><span class="text-slate-400">&gt;</span>
      <span class="text-slate-400">&lt;</span><span class="text-blue-400">Hero</span> 
        <span class="text-blue-200">title</span><span class="text-slate-400">=</span><span class="text-green-300">"Webfluence"</span>
        <span class="text-blue-200">subtitle</span><span class="text-slate-400">=</span><span class="text-green-300">"Your Digital Growth Partner"</span>
        <span class="text-blue-200">onInit</span><span class="text-slate-400">=</span>{() <span class="text-pink-400">=&gt;</span> <span class="text-yellow-200">setReady</span>(<span class="text-purple-300">true</span>)}
      <span class="text-slate-400">/&gt;</span>
      {<span class="text-blue-200">isReady</span> <span class="text-pink-400">&&</span> <span class="text-slate-400">&lt;</span><span class="text-blue-400">p</span><span class="text-slate-400">&gt;</span>Systems online and ready to scale.<span class="text-slate-400">&lt;/</span><span class="text-blue-400">p</span><span class="text-slate-400">&gt;</span>}
    <span class="text-slate-400">&lt;/</span><span class="text-blue-400">div</span><span class="text-slate-400">&gt;</span>
  );
}
`
  },
  {
    name: 'Hero.tsx',
    code: `
<span class="text-pink-400">import</span> <span class="text-blue-300">React</span> <span class="text-pink-400">from</span> <span class="text-green-300">'react'</span>;

<span class="text-pink-400">export const</span> <span class="text-yellow-200">Hero</span> = ({ <span class="text-blue-200">title</span>, <span class="text-blue-200">subtitle</span>, <span class="text-blue-200">onInit</span> }) <span class="text-pink-400">=&gt;</span> (
  <span class="text-slate-400">&lt;</span><span class="text-blue-400">section</span> <span class="text-blue-200">className</span><span class="text-slate-400">=</span><span class="text-green-300">"flex flex-col items-center justify-center p-20"</span><span class="text-slate-400">&gt;</span>
    <span class="text-slate-400">&lt;</span><span class="text-blue-400">h1</span> <span class="text-blue-200">className</span><span class="text-slate-400">=</span><span class="text-green-300">"text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r"</span><span class="text-slate-400">&gt;</span>
      {<span class="text-blue-200">title</span>}
    <span class="text-slate-400">&lt;/</span><span class="text-blue-400">h1</span><span class="text-slate-400">&gt;</span>
    <span class="text-slate-400">&lt;</span><span class="text-blue-400">p</span> <span class="text-blue-200">className</span><span class="text-slate-400">=</span><span class="text-green-300">"text-xl text-slate-400 mt-4"</span><span class="text-slate-400">&gt;</span>{<span class="text-blue-200">subtitle</span>}<span class="text-slate-400">&lt;/</span><span class="text-blue-400">p</span><span class="text-slate-400">&gt;</span>
    <span class="text-slate-400">&lt;</span><span class="text-blue-400">button</span> 
      <span class="text-blue-200">onClick</span><span class="text-slate-400">=</span>{<span class="text-blue-200">onInit</span>}
      <span class="text-blue-200">className</span><span class="text-slate-400">=</span><span class="text-green-300">"mt-8 px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-500 transition"</span>
    <span class="text-slate-400">&gt;</span>
      Initialize Growth
    <span class="text-slate-400">&lt;/</span><span class="text-blue-400">button</span><span class="text-slate-400">&gt;</span>
  <span class="text-slate-400">&lt;/</span><span class="text-blue-400">section</span><span class="text-slate-400">&gt;</span>
);
`
  },
  {
    name: 'api.ts',
    code: `
<span class="text-pink-400">export const</span> <span class="text-yellow-200">fetchMetrics</span> = <span class="text-pink-400">async</span> () <span class="text-pink-400">=&gt;</span> {
  <span class="text-pink-400">const</span> <span class="text-blue-200">response</span> = <span class="text-pink-400">await</span> <span class="text-yellow-200">fetch</span>(<span class="text-green-300">'/api/v1/metrics'</span>);
  <span class="text-pink-400">if</span> (!<span class="text-blue-200">response</span>.<span class="text-blue-200">ok</span>) {
    <span class="text-pink-400">throw new</span> <span class="text-blue-300">Error</span>(<span class="text-green-300">'Failed to fetch performance data'</span>);
  }
  <span class="text-pink-400">const</span> <span class="text-blue-200">data</span> = <span class="text-pink-400">await</span> <span class="text-blue-200">response</span>.<span class="text-yellow-200">json</span>();
  
  <span class="text-pink-400">return</span> {
    <span class="text-blue-200">traffic</span>: <span class="text-blue-200">data</span>.<span class="text-blue-200">traffic</span>,
    <span class="text-blue-200">conversionRate</span>: <span class="text-blue-200">data</span>.<span class="text-blue-200">conversionRate</span>,
    <span class="text-blue-200">status</span>: <span class="text-green-300">'OPTIMIZED'</span>
  };
};
`
  }
];

const DEPLOY_LOGS = [
  "Running pre-deployment checks...",
  "Building optimized production bundle...",
  "Analyzing dependencies...",
  "✓ Build completed successfully (142ms)",
  "Pushing to edge network...",
  "Propagating CDN nodes [||||||||||] 100%",
  "✓ Deployment live!"
];

export default function InteractiveEditor() {
  const [activeFile, setActiveFile] = useState(0);
  const [isDeploying, setIsDeploying] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const terminalRef = useRef<HTMLDivElement>(null);

  const startDeploy = () => {
    if (isDeploying) return;
    setIsDeploying(true);
    setLogs([]);
    
    let currentLog = 0;
    const interval = setInterval(() => {
      setLogs((prev) => [...prev, DEPLOY_LOGS[currentLog]]);
      currentLog++;
      
      if (terminalRef.current) {
        terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
      }

      if (currentLog >= DEPLOY_LOGS.length) {
        clearInterval(interval);
        setTimeout(() => setIsDeploying(false), 2000);
      }
    }, 400);
  };

  return (
    <div className="w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl bg-slate-900 border border-slate-700 font-mono text-sm">
      {/* Window Chrome */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-800 border-b border-slate-700">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-slate-400 text-xs text-center absolute left-0 right-0 pointer-events-none">
          Webfluence Studio - {FILES[activeFile].name}
        </div>
        <button 
          onClick={startDeploy}
          disabled={isDeploying}
          className="flex items-center gap-2 px-3 py-1 bg-blue-600 hover:bg-blue-500 text-white rounded text-xs transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isDeploying ? (
            <span className="flex items-center gap-1">
              <span className="animate-spin inline-block w-3 h-3 border-2 border-current border-t-transparent text-white rounded-full"></span>
              Deploying...
            </span>
          ) : (
            <span className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              Deploy
            </span>
          )}
        </button>
      </div>

      {/* Editor Body */}
      <div className="flex flex-col sm:flex-row h-[400px]">
        {/* Sidebar */}
        <div className="w-full sm:w-48 bg-slate-800/50 border-r border-slate-700 sm:flex flex-col hidden">
          <div className="px-4 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Explorer
          </div>
          <div className="flex flex-col mt-1">
            {FILES.map((file, index) => (
              <button
                key={file.name}
                onClick={() => setActiveFile(index)}
                className={`flex items-center gap-2 px-4 py-1.5 text-left transition ${activeFile === index ? 'bg-blue-500/10 text-blue-400 border-l-2 border-blue-500' : 'text-slate-400 hover:bg-slate-700 hover:text-slate-200 border-l-2 border-transparent'}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                {file.name}
              </button>
            ))}
          </div>
        </div>

        {/* Main View */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Tabs (Mobile) */}
          <div className="flex overflow-x-auto bg-slate-800 sm:hidden border-b border-slate-700">
            {FILES.map((file, index) => (
              <button
                key={file.name}
                onClick={() => setActiveFile(index)}
                className={`px-4 py-2 whitespace-nowrap border-b-2 transition ${activeFile === index ? 'border-blue-500 text-blue-400 bg-slate-800' : 'border-transparent text-slate-400 bg-slate-800/50'}`}
              >
                {file.name}
              </button>
            ))}
          </div>

          {/* Code Area */}
          <div className="flex-1 overflow-auto p-4 bg-[#0d1117] relative">
            {/* Line numbers and Code */}
            <div className="flex">
              <div className="flex flex-col text-slate-600 text-right pr-4 select-none mr-2">
                {FILES[activeFile].code.trim().split('\n').map((_, i) => (
                  <span key={i}>{i + 1}</span>
                ))}
              </div>
              <pre className="text-slate-300 flex-1 overflow-x-auto whitespace-pre">
                <code dangerouslySetInnerHTML={{ __html: FILES[activeFile].code.trim() }} />
              </pre>
            </div>
          </div>
          
          {/* Terminal */}
          <div className={`border-t border-slate-700 bg-slate-900 transition-all duration-300 ease-in-out flex flex-col ${logs.length > 0 ? 'h-32' : 'h-0 border-transparent overflow-hidden'}`}>
            <div className="px-4 py-1 text-xs font-semibold text-slate-400 bg-slate-800/80 uppercase tracking-wider flex justify-between items-center">
              <span>Terminal</span>
              <button onClick={() => setLogs([])} className="hover:text-slate-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>
            <div ref={terminalRef} className="flex-1 overflow-y-auto p-3 text-xs text-slate-300 font-mono space-y-1">
              {logs.map((log, i) => (
                <div key={i} className={log.startsWith('✓') ? 'text-green-400' : ''}>
                  <span className="text-slate-500 mr-2">$</span>
                  {log}
                </div>
              ))}
              {isDeploying && (
                <div className="animate-pulse">
                  <span className="text-slate-500 mr-2">$</span>_
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
