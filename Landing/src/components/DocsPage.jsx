import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BookOpen,
  Code,
  Shield,
  Zap,
  Settings,
  Key,
  Globe,
  ChevronRight,
  Copy,
  CheckCircle,
  Search,
  Menu,
  X,
  ExternalLink,
  AlertTriangle,
  Info,
  CheckSquare,
} from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("getting-started");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [copiedCode, setCopiedCode] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const sections = [
    {
      id: "getting-started",
      title: "Getting Started",
      icon: BookOpen,
      subsections: [
        { id: "introduction", title: "Introduction" },
        { id: "installation", title: "Installation" },
        { id: "quick-start", title: "Quick Start" },
      ],
    },
    {
      id: "authentication",
      title: "Authentication",
      icon: Key,
      subsections: [
        { id: "api-keys", title: "API Keys" },
        { id: "environments", title: "Environments" },
        { id: "rate-limits", title: "Rate Limits" },
      ],
    },
    {
      id: "core-features",
      title: "Core Features",
      icon: Shield,
      subsections: [
        { id: "behavioral-analysis", title: "Behavioral Analysis" },
        { id: "threat-detection", title: "Threat Detection" },
        { id: "risk-scoring", title: "Risk Scoring" },
        { id: "challenges", title: "ZK Challenges" },
      ],
    },
    {
      id: "api-reference",
      title: "API Reference",
      icon: Code,
      subsections: [
        { id: "endpoints", title: "Endpoints" },
        { id: "webhooks", title: "Webhooks" },
        { id: "errors", title: "Error Handling" },
      ],
    },
    {
      id: "integrations",
      title: "Integrations",
      icon: Globe,
      subsections: [
        { id: "react", title: "React" },
        { id: "vue", title: "Vue.js" },
        { id: "web3", title: "Web3.js" },
        { id: "ethers", title: "Ethers.js" },
      ],
    },
    {
      id: "advanced",
      title: "Advanced",
      icon: Settings,
      subsections: [
        { id: "custom-models", title: "Custom Models" },
        { id: "analytics", title: "Analytics" },
        { id: "compliance", title: "Compliance" },
      ],
    },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "getting-started":
        return (
          <div className="space-y-12">
            <div id="introduction">
              <h2 className="text-3xl font-bold text-white mb-6">
                Introduction
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-xl text-gray-300 mb-6">
                  SentinelID is an AI-powered Web3 security platform that
                  protects decentralized applications from bots, wallet
                  drainers, and social engineering attacks using behavioral
                  biometrics and zero-trust challenges.
                </p>

                <div className="bg-gradient-to-r from-cyan-900/20 to-purple-900/20 border border-cyan-500/30 rounded-xl p-6 mb-8">
                  <div className="flex items-start gap-4">
                    <Info className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        Key Benefits
                      </h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-center gap-2">
                          <CheckSquare className="w-4 h-4 text-green-400" />
                          Real-time threat detection with &lt;50ms response time
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckSquare className="w-4 h-4 text-green-400" />
                          Behavioral biometrics analyzing 100+ signals
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckSquare className="w-4 h-4 text-green-400" />
                          Zero-knowledge proof challenges for privacy
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckSquare className="w-4 h-4 text-green-400" />
                          Cross-dApp reputation scoring
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="installation">
              <h2 className="text-3xl font-bold text-white mb-6">
                Installation
              </h2>
              <p className="text-gray-300 mb-6">
                Install the SentinelID SDK using your preferred package manager:
              </p>

              <div className="space-y-4">
                <div className="relative">
                  <pre className="bg-gray-900 border border-gray-700 rounded-lg p-4 text-cyan-400 font-mono text-sm overflow-x-auto">
                    npm install @sentinelid/sdk
                  </pre>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        "npm install @sentinelid/sdk",
                        "npm-install"
                      )
                    }
                    className="absolute top-2 right-2 p-2 text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {copiedCode === "npm-install" ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                <div className="relative">
                  <pre className="bg-gray-900 border border-gray-700 rounded-lg p-4 text-purple-400 font-mono text-sm overflow-x-auto">
                    yarn add @sentinelid/sdk
                  </pre>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        "yarn add @sentinelid/sdk",
                        "yarn-install"
                      )
                    }
                    className="absolute top-2 right-2 p-2 text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {copiedCode === "yarn-install" ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div id="quick-start">
              <h2 className="text-3xl font-bold text-white mb-6">
                Quick Start
              </h2>
              <p className="text-gray-300 mb-6">
                Get up and running with SentinelID in just a few lines of code:
              </p>

              <div className="relative mb-8">
                <pre className="bg-gray-900 border border-gray-700 rounded-lg p-6 text-sm overflow-x-auto">
                  <code className="text-gray-300">{`import { SentinelID } from '@sentinelid/sdk';

// Initialize SentinelID
const sentinel = new SentinelID({
  apiKey: 'your-api-key-here',
  environment: 'sandbox', // or 'production'
  enableBehavioralAnalysis: true,
  riskThreshold: 0.7
});

// Analyze wallet connection
const analyzeConnection = async (walletAddress) => {
  try {
    const result = await sentinel.analyzeWalletConnection({
      address: walletAddress,
      userAgent: navigator.userAgent,
      timestamp: Date.now()
    });
    
    if (result.riskScore > 0.7) {
      // High risk detected - trigger additional verification
      const challenge = await sentinel.createChallenge({
        type: 'behavioral',
        difficulty: 'medium'
      });
      
      return { requiresChallenge: true, challenge };
    }
    
    return { approved: true, riskScore: result.riskScore };
  } catch (error) {
    console.error('SentinelID analysis failed:', error);
    return { error: true };
  }
};`}</code>
                </pre>
                <button
                  onClick={() =>
                    copyToClipboard(
                      `import { SentinelID } from '@sentinelid/sdk';

// Initialize SentinelID
const sentinel = new SentinelID({
  apiKey: 'your-api-key-here',
  environment: 'sandbox', // or 'production'
  enableBehavioralAnalysis: true,
  riskThreshold: 0.7
});

// Analyze wallet connection
const analyzeConnection = async (walletAddress) => {
  try {
    const result = await sentinel.analyzeWalletConnection({
      address: walletAddress,
      userAgent: navigator.userAgent,
      timestamp: Date.now()
    });
    
    if (result.riskScore > 0.7) {
      // High risk detected - trigger additional verification
      const challenge = await sentinel.createChallenge({
        type: 'behavioral',
        difficulty: 'medium'
      });
      
      return { requiresChallenge: true, challenge };
    }
    
    return { approved: true, riskScore: result.riskScore };
  } catch (error) {
    console.error('SentinelID analysis failed:', error);
    return { error: true };
  }
};`,
                      "quick-start"
                    )
                  }
                  className="absolute top-2 right-2 p-2 text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  {copiedCode === "quick-start" ? (
                    <CheckCircle className="w-4 h-4" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          </div>
        );

      // Other cases remain the same...
      default:
        return (
          <div className="text-center py-20">
            <BookOpen className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">
              Section Coming Soon
            </h2>
            <p className="text-gray-400">
              This documentation section is currently being written.
            </p>
          </div>
        );
    }
  };

  const filteredSections = sections.filter(
    (section) =>
      section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      section.subsections.some((sub) =>
        sub.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar showBackButton />

      <div className="pt-20 flex">
        {/* Sidebar */}
        <div
          className={`fixed lg:static inset-y-0 left-0 z-40 w-80 bg-gray-800/50 backdrop-blur-xl border-r border-gray-700 transform transition-transform duration-300 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          }`}
        >
          <div className="p-6 border-b border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-white">Documentation</h2>
              <button
                onClick={() => setSidebarOpen(false)}
                className="lg:hidden p-2 text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search docs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>

          <div className="p-6 overflow-y-auto h-full">
            <nav className="space-y-2">
              {filteredSections.map((section) => (
                <div key={section.id}>
                  <button
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all ${
                      activeSection === section.id
                        ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-400"
                        : "text-gray-300 hover:bg-gray-700/50 hover:text-white"
                    }`}
                  >
                    <section.icon className="w-5 h-5" />
                    <span className="font-medium">{section.title}</span>
                    <ChevronRight
                      className={`w-4 h-4 ml-auto transition-transform ${
                        activeSection === section.id ? "rotate-90" : ""
                      }`}
                    />
                  </button>

                  {activeSection === section.id && (
                    <div className="ml-8 mt-2 space-y-1">
                      {section.subsections.map((subsection) => (
                        <a
                          key={subsection.id}
                          href={`#${subsection.id}`}
                          className="block px-4 py-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                        >
                          {subsection.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>

        {/* Mobile sidebar overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main content */}
        <div className="flex-1 lg:ml-0">
          <div className="max-w-4xl mx-auto px-6 py-12">
            {/* Mobile menu button */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden mb-6 flex items-center gap-2 text-gray-400 hover:text-white"
            >
              <Menu className="w-5 h-5" />
              <span>Menu</span>
            </button>

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
              <button
                onClick={() => navigate("/")}
                className="hover:text-cyan-400"
              >
                Home
              </button>
              <ChevronRight className="w-4 h-4" />
              <span className="text-cyan-400">
                {sections.find((s) => s.id === activeSection)?.title}
              </span>
            </div>

            {/* Content */}
            <div className="prose prose-invert max-w-none">
              {renderContent()}
            </div>

            {/* Navigation footer */}
            <div className="flex justify-between items-center pt-12 mt-12 border-t border-gray-700">
              <div className="text-sm text-gray-400">
                Last updated: {new Date().toLocaleDateString()}
              </div>
              <div className="flex gap-4">
                <a
                  href="https://github.com/sentinelid/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Edit on GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
