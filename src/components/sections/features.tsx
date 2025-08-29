'use client'

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  FileText, 
  Users, 
  BarChart3, 
  Shield, 
  Zap, 
  Clock,
  Globe,
  Smartphone,
  CheckCircle,
  Eye,
  Download,
  RefreshCw
} from 'lucide-react'

const primaryFeatures = [
  {
    icon: FileText,
    title: 'Smart Document Templates',
    description: 'Create reusable templates with drag-and-drop fields. Auto-populate data and customize for any workflow.',
    features: ['Drag & drop builder', 'Auto-fill capabilities', 'Custom branding', 'Version control']
  },
  {
    icon: Users,
    title: 'Multi-Party Workflows',
    description: 'Orchestrate complex signing processes with multiple signers, approvers, and reviewers in sequence or parallel.',
    features: ['Sequential signing', 'Parallel workflows', 'Role-based access', 'Automated reminders']
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description: 'Track document engagement with detailed analytics. See who viewed, when, and for how long.',
    features: ['View tracking', 'Time analytics', 'Engagement metrics', 'Custom reports']
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption, compliance certifications, and audit trails ensure your documents are always secure.',
    features: ['256-bit encryption', 'SOC 2 compliant', 'Audit trails', 'SSO integration']
  }
]

const secondaryFeatures = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Send documents in seconds, not minutes'
  },
  {
    icon: Clock,
    title: 'Time Tracking',
    description: 'Monitor document lifecycle and completion times'
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Support for 40+ languages and international compliance'
  },
  {
    icon: Smartphone,
    title: 'Mobile Ready',
    description: 'Sign and manage documents on any device'
  },
  {
    icon: Eye,
    title: 'Document Insights',
    description: 'AI-powered insights and recommendations'
  },
  {
    icon: Download,
    title: 'Bulk Operations',
    description: 'Process hundreds of documents simultaneously'
  }
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container-responsive">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to
            <span className="gradient-text block">streamline document workflows</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            From simple signatures to complex multi-party workflows, SignTusk provides 
            all the tools you need to digitize your document processes.
          </p>
        </div>

        {/* Primary features grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 mb-20">
          {primaryFeatures.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-xl group-hover:bg-primary-200 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600 mb-4">
                  {feature.description}
                </CardDescription>
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-success-500 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Secondary features grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {secondaryFeatures.map((feature, index) => (
            <Card key={index} className="group hover:shadow-md transition-all duration-300 text-center border-0 shadow-sm">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-xl mx-auto mb-4 group-hover:bg-primary-200 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary-600" />
                </div>
                <CardTitle className="text-lg mb-2">{feature.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Integration showcase */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Integrates with your favorite tools
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect SignTusk with the tools you already use. Our API and pre-built integrations 
            make it easy to embed document workflows into your existing processes.
          </p>
          
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:grid-cols-6 opacity-60 max-w-4xl mx-auto">
            {[
              'Salesforce', 'HubSpot', 'Slack', 'Microsoft', 'Google', 'Zapier'
            ].map((integration) => (
              <div key={integration} className="flex items-center justify-center">
                <div className="text-lg font-semibold text-gray-400 hover:text-gray-600 transition-colors cursor-pointer">
                  {integration}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA section */}
        <div className="mt-20 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Ready to transform your document workflows?
          </h3>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Join thousands of teams who have streamlined their document processes with SignTusk. 
            Start your free trial today and see the difference.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
              Start Free Trial
            </button>
            <button className="border border-primary-300 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-500 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
