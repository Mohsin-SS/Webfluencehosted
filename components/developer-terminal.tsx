"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Terminal, Code2, Play, GitBranch, Shield, Cpu, CheckCircle } from "lucide-react"

type FileTab = "studio.ts" | "scoping.yml" | "deploy.sh"

const STUDIO_CODE = `// Webfluence - Senior Engineering Studio
import { Studio, Project } from "@/lib/studio"

const webfluence = new Studio({
  location: "Lahore, PK",
  setup: "Insider team, no middlemen",
  engineers: "Senior (avg. 8yr tenure)"
})

export async function shipProduct(idea: string) {
  const spec = await webfluence.scope(idea)
  const scaffold = await webfluence.scaffold(spec)
  
  const project = new Project({
    repo: "You own outright",
    pipelines: "Your cloud",
    quality: "Compounding value"
  })

  await project.build(scaffold)
  await project.deploy()
  
  return project.healthStatus() // "100% Retained"
}`

const SCOPING_CODE = `# Discovery Sprint Configuration
sprint:
  duration: 5 working days
  deliverables:
    - written spec document
    - firm commercial quote
    - working code scaffold
    - Loom video walkthrough
  refundPolicy: Full credit towards project fee
  developerCount: 2 Senior Engineers
  designerCount: 1 Product Designer`

const DEPLOY_CODE = `#!/bin/bash
# Deployment pipeline initialization
echo "🚀 Spawning secure environment..."
npm run build --prod

echo "📦 Bundling assets & artifacts..."
git add -A
git commit -m "feat: ship compounding value"

echo "⚡ Deploying to production CDN..."
webfluence cloud deploy --region="eu-west-1"

echo "✓ Verification healthcheck: PASS"
echo "🚀 Webfluence project is LIVE!"`

const TERMINAL_LOGS = [
  "Starting development server...",
  "✓ Turbopack compiler running on port 3000",
  "Analyzing static routes & database schemas...",
  "✓ System ready: 0 errors, 0 warnings",
  "$ git status",
  "On branch main. Your branch is up to date.",
  "Changes not staged for commit:",
  "  (use \"git add <file>...\" to update)",
  "	modified:   components/hero.tsx",
  "$ webfluence ship --prod",
  "✓ Running production bundling...",
  "✓ Assets compiled in 184ms",
  "✓ Code quality inspection: 100/100",
  "🚀 Pushed to client repository.",
  "✓ Infrastructure initialized on AWS Cloudfront",
  "🚀 Studio release v2.4.0 is LIVE at webfluence.studio!"
]

export function DeveloperTerminal() {
  const [activeTab, setActiveTab] = useState<FileTab>("studio.ts")
  const terminalEndRef = useRef<HTMLDivElement>(null)

  const visibleCode = activeTab === "studio.ts" 
    ? STUDIO_CODE 
    : activeTab === "scoping.yml" 
    ? SCOPING_CODE 
    : DEPLOY_CODE

  // Auto scroll terminal to bottom on mount
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [])

  // Highlight syntax tokens manually for visual appeal
  const renderHighlightedCode = (codeText: string) => {
    return codeText.split("\n").map((line, i) => {
      // Comments
      if (line.trim().startsWith("//") || line.trim().startsWith("#")) {
        return (
          <div key={i} className="text-muted-foreground/60 italic">
            {line}
          </div>
        )
      }
      
      // Keywords/Syntax highlighted replacements
      const styledLine = line
        .replace(/\b(const|let|var|import|from|export|async|function|await|new|return)\b/g, '<span class="text-brand-amber font-semibold">$1</span>')
        .replace(/\b(Studio|Project)\b/g, '<span class="text-brand-teal font-semibold">$1</span>')
        .replace(/("[^"]*")/g, '<span class="text-emerald-600/90 dark:text-emerald-400/80 font-medium">$1</span>')
        .replace(/(\b\d+\b)/g, '<span class="text-cyan-500">$1</span>')

      return (
        <div key={i} className="min-h-[1.2rem]" dangerouslySetInnerHTML={{ __html: styledLine }} />
      )
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="glass relative w-full overflow-hidden rounded-2xl border border-border bg-card/60 shadow-2xl backdrop-blur-md"
    >
      {/* Top Titlebar */}
      <div className="flex items-center justify-between border-b border-border bg-muted/30 px-4 py-3">
        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-rose-500/80 shadow-inner" />
          <div className="h-3 w-3 rounded-full bg-amber-500/80 shadow-inner" />
          <div className="h-3 w-3 rounded-full bg-emerald-500/80 shadow-inner" />
        </div>
        <div className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground tracking-tight select-none">
          <Code2 className="h-3.5 w-3.5 text-brand-teal" />
          <span>~/webfluence/{activeTab}</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-brand-teal animate-pulse" />
          <span className="text-[10px] uppercase font-bold text-brand-teal/80 tracking-wider">compiler online</span>
        </div>
      </div>

      {/* Editor Layout Split (Sidebar + Editor Pane) */}
      <div className="grid grid-cols-[110px_1fr] border-b border-border h-[260px] text-xs font-mono md:grid-cols-[140px_1fr]">
        {/* Left Sidebar */}
        <div className="border-r border-border bg-muted/10 p-3 select-none flex flex-col gap-4 text-muted-foreground/80">
          <div>
            <div className="text-[10px] uppercase font-bold text-muted-foreground/40 tracking-wider mb-2">Workspace</div>
            <div className="flex flex-col gap-1.5">
              {(["studio.ts", "scoping.yml", "deploy.sh"] as FileTab[]).map(t => (
                <button
                  key={t}
                  onClick={() => setActiveTab(t)}
                  className={`flex items-center gap-1.5 px-2 py-1 rounded text-left transition-all hover:bg-secondary/40 ${
                    activeTab === t 
                      ? "text-brand-amber bg-secondary/60 font-semibold" 
                      : "hover:text-foreground"
                  }`}
                >
                  <Code2 className="h-3.5 w-3.5 shrink-0" />
                  <span className="truncate">{t}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="mt-auto border-t border-border/40 pt-2 flex flex-col gap-1 text-[10px] text-muted-foreground/50">
            <div className="flex items-center gap-1">
              <GitBranch className="h-3 w-3 text-brand-teal" />
              <span>branch: main</span>
            </div>
            <div className="flex items-center gap-1">
              <Shield className="h-3 w-3 text-brand-amber" />
              <span>secure cloud</span>
            </div>
          </div>
        </div>

        {/* Editor Code Pane */}
        <div className="relative p-4 overflow-y-auto text-foreground/90 bg-card/10 select-text scrollbar-thin scrollbar-thumb-border">
          <div className="absolute top-2 right-4 text-[10px] uppercase font-semibold text-muted-foreground/30 select-none">
            TypeScript Editor
          </div>
          <pre className="space-y-0.5 leading-relaxed antialiased">
            {renderHighlightedCode(visibleCode)}
          </pre>
        </div>
      </div>

      {/* Embedded Terminal Pane */}
      <div className="h-[140px] bg-[#0c0c0e]/95 text-[11px] font-mono p-4 flex flex-col text-green-400 border-t border-border select-text">
        <div className="flex items-center gap-2 border-b border-white/5 pb-2 mb-2 text-white/50 select-none uppercase tracking-wider text-[9px] font-bold">
          <Terminal className="h-3.5 w-3.5" />
          <span>Interactive Shell (Zsh)</span>
          <span className="ml-auto flex items-center gap-1 text-emerald-400/80">
            <CheckCircle className="h-3 w-3" />
            <span>Success</span>
          </span>
        </div>
        <div className="flex-1 overflow-y-auto space-y-1.5 pr-2 scrollbar-thin scrollbar-thumb-white/10">
          {TERMINAL_LOGS.map((log, index) => {
            const isCommand = log.startsWith("$");
            const isSuccess = log.startsWith("✓");
            const isInfo = log.startsWith("🚀");
            
            let colorClass = "text-muted-foreground/80";
            if (isCommand) colorClass = "text-sky-300 font-semibold";
            else if (isSuccess) colorClass = "text-emerald-400";
            else if (isInfo) colorClass = "text-amber-300";

            return (
              <div
                key={index}
                className={`leading-relaxed ${colorClass}`}
              >
                {log}
              </div>
            );
          })}
          <div ref={terminalEndRef} />
        </div>
      </div>
    </motion.div>
  )
}
