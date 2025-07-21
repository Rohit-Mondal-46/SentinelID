import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
import Navbar from '../components/Navbar'

export default function DownloadPage() {
  const navigate = useNavigate()
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
});

// Protect wallet connections
const protectWalletConnection = async (walletAddress) => {
  const riskScore = await sentinel.analyzeWalletConnection({
    address: walletAddress,
    userAgent: navigator.userAgent,
    timestamp: Date.now()
  });
  
  if (riskScore.threat_level > 0.7) {
    // Trigger additional verification
    const challenge = await sentinel.createChallenge({
      type: 'behavioral',
      difficulty: 'medium'
    });
    
    return challenge;
  }
  
  return { approved: true };
};

// Monitor transactions
sentinel.onTransactionAttempt((transaction) => {
  // Real-time threat detection
  console.log('Transaction risk score:', transaction.riskScore);
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
    {
      icon: Settings,
      title: 'Get API Keys',
      description: 'Sign up for SentinelID and get your API credentials',
      content: (
        <div className="space-y-4">
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <h4 className="font-semibold text-white mb-3">Quick Setup</h4>
            <ol className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <div className="w-6 h-6 bg-cyan-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                Visit the SentinelID Dashboard
              </li>
              <li className="flex items-center gap-2">
                <div className="w-6 h-6 bg-cyan-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                Create a new project
              </li>
              <li className="flex items-center gap-2">
                <div className="w-6 h-6 bg-cyan-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                Copy your API key and secret
              </li>
            </ol>
            <button className="mt-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-cyan-400 hover:to-purple-500 transition-all flex items-center gap-2">
              Open Dashboard
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      )
    },
    {
      icon: Code,
      title: 'Initialize & Configure',
      description: 'Set up SentinelID in your application with behavioral analysis',
      content: (
        <div className="space-y-4">
          <div className="relative">
            <pre className="bg-gray-900 border border-gray-700 rounded-lg p-4 text-sm overflow-x-auto">
              <code className="text-gray-300">{codeExample}</code>
            </pre>
            <button
              onClick={() => copyToClipboard(codeExample, 'code')}
              className="absolute top-2 right-2 p-2 text-gray-400 hover:text-cyan-400 transition-colors"
            >
              {copiedCode === 'code' ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>
      )
    },
    {
      icon: Zap,
      title: 'Test & Deploy',
      description: 'Verify your integration and go live with AI-powered protection',
      content: (
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                Test Mode
              </h4>
              <p className="text-gray-300 text-sm mb-3">
                Use sandbox environment to test threat detection without affecting real users.
              </p>
              <code className="text-xs bg-gray-900 px-2 py-1 rounded text-cyan-400">
                environment: 'sandbox'
              </code>
            </div>
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-400" />
                Production
              </h4>
              <p className="text-gray-300 text-sm mb-3">
                Deploy with real-time protection for your users and transactions.
              </p>
              <code className="text-xs bg-gray-900 px-2 py-1 rounded text-green-400">
                environment: 'production'
              </code>
            </div>
          </div>
        </div>
      )
    }
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar 
        showBackButton={true}
        onBackClick={() => navigate(-1)}
        onIntegrationClick={() => navigate('/integrate')}
        onDocsClick={() => navigate('/docs')}
      />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Download & Integrate SentinelID
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get started with our SDK and add powerful security features to your Web3 application.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2">
              <BookOpen className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-gray-300">5 min setup</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2">
              <Github className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-gray-300">Open source SDK</span>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Steps */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-sm font-medium text-cyan-400">
                        Step {index + 1}
                      </div>
                    </div>
                    <div className="lg:w-64">
                      <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-300">{step.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex-1 bg-gray-800/50 border border-gray-700 rounded-2xl p-6">
                    {step.content}
                  </div>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-6 top-16 w-px h-16 bg-gradient-to-b from-cyan-500 to-purple-600"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 bg-gray-800/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Need Help?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team is here to help you integrate SentinelID successfully
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <a href="#" className="group bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all">
              <BookOpen className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="font-semibold text-white mb-2">Documentation</h3>
              <p className="text-gray-300 text-sm">Complete API reference and guides</p>
            </a>
            
            <a href="#" className="group bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-all">
              <Github className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h3 className="font-semibold text-white mb-2">GitHub</h3>
              <p className="text-gray-300 text-sm">Examples and community support</p>
            </a>
            
            <a href="#" className="group bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-green-500/50 transition-all">
              <Terminal className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <h3 className="font-semibold text-white mb-2">Discord</h3>
              <p className="text-gray-300 text-sm">Chat with developers and get help</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}