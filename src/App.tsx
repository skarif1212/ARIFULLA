/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Share2, Copy, Check, Github, Linkedin, Sparkles, MessageSquare, Tag } from 'lucide-react';

export default function App() {
  const [thought, setThought] = useState('');
  const [copied, setCopied] = useState(false);

  const tags = ['L4G', 'GoogleForDevelopers', 'BuildWithAI', 'GoogleAIStudio'];
  
  const generateSocialText = () => {
    const header = "✨ Just finished building with Google AI Studio!\n\n";
    const body = thought ? `"${thought}"\n\n` : "Exploring the future of AI development... 🚀\n\n";
    const footer = tags.map(t => `#${t}`).join(' ') + " @GoogleDevs";
    return header + body + footer;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateSocialText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gallery-white flex flex-col selection:bg-neon-green selection:text-brutal-black">
      {/* Header Marquee */}
      <div className="bg-brutal-black text-gallery-white overflow-hidden py-3 border-b-2 border-brutal-black">
        <div className="flex whitespace-nowrap animate-marquee uppercase font-display text-2xl tracking-widest">
          <span className="mx-8">Build with AI</span>
          <span className="mx-8 text-neon-green">Tag us on LinkedIn</span>
          <span className="mx-8">L4G Community</span>
          <span className="mx-8 text-neon-green">Google For Developers</span>
          <span className="mx-8 text-white flex items-center gap-2"><Sparkles className="w-6 h-6" /> Share Your Thoughts</span>
          {/* Duplicate for seamless loop */}
          <span className="mx-8">Build with AI</span>
          <span className="mx-8 text-neon-green">Tag us on LinkedIn</span>
          <span className="mx-8">L4G Community</span>
          <span className="mx-8 text-neon-green">Google For Developers</span>
          <span className="mx-8 text-white flex items-center gap-2"><Sparkles className="w-6 h-6" /> Share Your Thoughts</span>
        </div>
      </div>

      <main className="flex-1 grid grid-cols-1 lg:grid-cols-12 max-w-7xl mx-auto w-full">
        {/* Left Side: Input */}
        <section className="lg:col-span-7 p-8 lg:p-12 border-r-2 border-brutal-black flex flex-col gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-display text-5xl lg:text-7xl">01</span>
              <h2 className="font-display text-3xl lg:text-5xl uppercase tracking-tighter">Draft your thoughts</h2>
            </div>
            <p className="text-xl text-neutral-600 font-medium max-w-lg">
              What did you learn today? What features surprised you? Share your "Aha!" moment.
            </p>
          </div>

          <div className="relative group flex-1 min-h-[300px]">
            <div className="absolute inset-0 bg-brutal-black translate-x-2 translate-y-2 rounded-xl group-focus-within:translate-x-1 group-focus-within:translate-y-1 transition-transform" />
            <textarea
              value={thought}
              onChange={(e) => setThought(e.target.value)}
              placeholder="Deep diving into Gemini API was a game changer for my workflow..."
              className="absolute inset-0 bg-white border-2 border-brutal-black rounded-xl p-6 text-xl focus:outline-none resize-none z-10 font-mono"
            />
          </div>

          <div className="flex flex-wrap gap-4">
            {tags.map((tag) => (
              <span key={tag} className="flex items-center gap-2 bg-neutral-100 border border-neutral-300 px-3 py-1.5 rounded-full text-sm font-semibold text-neutral-600">
                <Tag className="w-4 h-4" /> #{tag}
              </span>
            ))}
          </div>
        </section>

        {/* Right Side: Preview & Actions */}
        <section className="lg:col-span-5 p-8 lg:p-12 bg-neutral-50 flex flex-col gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-display text-5xl lg:text-7xl">02</span>
              <h2 className="font-display text-3xl lg:text-5xl uppercase tracking-tighter">Social Ready</h2>
            </div>
          </div>

          <motion.div 
            layout
            className="flex-1 bg-white border-2 border-brutal-black rounded-2xl p-6 shadow-[8px_8px_0px_#000000] relative overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-neon-green flex items-center justify-center border-2 border-brutal-black">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold">Post Preview</p>
                <p className="text-xs text-neutral-500 uppercase tracking-widest font-semibold">LinkedIn / Twitter</p>
              </div>
            </div>

            <pre className="whitespace-pre-wrap font-sans text-lg leading-relaxed text-neutral-800 mb-8 border-l-4 border-neon-green pl-4 overflow-auto max-h-[300px]">
              {generateSocialText()}
            </pre>

            <button
              onClick={copyToClipboard}
              className={`w-full py-4 rounded-xl border-2 border-brutal-black font-display text-2xl uppercase transition-all flex items-center justify-center gap-3 shadow-[4px_4px_0px_#000000] active:shadow-none active:translate-x-1 active:translate-y-1 ${
                copied ? 'bg-neon-green' : 'bg-gallery-white hover:bg-neon-green hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_#000000]'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-6 h-6" /> Copied to Clipboard
                </>
              ) : (
                <>
                  <Copy className="w-6 h-6" /> Copy for Socials
                </>
              )}
            </button>
          </motion.div>

          <footer className="space-y-6 pt-4 border-t border-neutral-200">
            <h3 className="uppercase text-xs font-black tracking-widest text-neutral-400">Join the movement</h3>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/sharing/share-offsite" 
                target="_blank" 
                rel="noreferrer"
                className="flex-1 p-4 bg-brutal-black text-white rounded-xl flex items-center justify-center gap-3 hover:opacity-90 transition-opacity"
              >
                <Linkedin className="w-5 h-5" /> Share
              </a>
              <a 
                href="https://github.com/google/generative-ai-js" 
                target="_blank" 
                rel="noreferrer"
                className="flex-1 p-4 border-2 border-brutal-black rounded-xl flex items-center justify-center gap-3 hover:bg-neutral-100 transition-colors font-bold"
              >
                <Github className="w-5 h-5" /> Docs
              </a>
            </div>
            <p className="text-[10px] text-neutral-400 uppercase font-bold tracking-widest text-center leading-relaxed">
              Google For Developers &bull; L4G &bull; AI Studio &bull; {new Date().getFullYear()}
            </p>
          </footer>
        </section>
      </main>
    </div>
  );
}
