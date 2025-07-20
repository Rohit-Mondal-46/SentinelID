import { useState } from 'react'
import { 
  Code, 
  Terminal, 
  CheckCircle, 
  Copy, 
  ExternalLink,
  Package,
  Settings,
  Zap,
  Shield,
  BookOpen,
  Github
} from 'lucide-react'

export default function IntegrationGuide({ onBack }) {
  const [copiedCode, setCopiedCode] = useState(null)
  const [activeTab, setActiveTab] = useState('npm')

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const installCommands = {
    npm: 'npm install @sentinelid/sdk',
    yarn: 'yarn add @sentinelid/sdk',
    pnpm: 'pnpm add @sentinelid/sdk'
  }

  const codeExample = `import { SentinelID } from '@sentinelid/sdk';

// Initialize SentinelID
const sentinel = new SentinelID({
  apiKey: 'your-api-key',
  environment: 'production', // or 'sandbox'
  enableBehavioralAnalysis: true,
  riskThreshold: 0.7
});`

  const steps = [
    {
      icon: Package,
      title: 'Install the SDK',
      description: 'Add SentinelID to your project using your preferred package manager',
      content: (
        <div className="space-y-4">
          <div className="flex gap-2 mb-4">
            {Object.keys(installCommands).map((manager) => (
              <button
                key={manager}
                onClick={() => setActiveTab(manager)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  activeTab === manager
                    ? 'bg-cyan-500 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {manager}
              </button>
            ))}
          </div>
          <div className="relative">
            <pre className="bg-gray-900 border border-gray-700 rounded-lg p-4 text-cyan-400 font-mono text-sm overflow-x-auto">
              {installCommands[activeTab]}
            </pre>
            <button
              onClick={() => copyToClipboard(installCommands[activeTab], 'install')}
              className="absolute top-2 right-2 p-2 text-gray-400 hover:text-cyan-400 transition-colors"
            >
              {copiedCode === 'install' ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>
      )
    },
    // Other steps...
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header and content from the download page */}
    </div>
  )
}