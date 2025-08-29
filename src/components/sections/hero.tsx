'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  ArrowRight,
  Play,
  CheckCircle,
  Users,
  FileText,
  BarChart3,
  Shield,
  Zap
} from 'lucide-react'

const stats = [
  { label: 'Documents Signed', value: '2M+' },
  { label: 'Active Users', value: '50K+' },
  { label: 'Enterprise Clients', value: '500+' },
  { label: 'Countries', value: '120+' },
]

const features = [
  { icon: FileText, text: 'Unlimited document templates' },
  { icon: Users, text: 'Multi-party signing workflows' },
  { icon: BarChart3, text: 'Real-time analytics & tracking' },
  { icon: Shield, text: 'Bank-grade security' },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-20 pb-16 sm:pt-24 sm:pb-20">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-bounce-slow"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-bounce-slow" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-bounce-slow" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      <div className="container-responsive">
        <div className="mx-auto max-w-4xl text-center">
          {/* Announcement badge */}
          <div className="mb-8 inline-flex items-center rounded-full bg-primary-50 px-4 py-2 text-sm font-medium text-primary-700 ring-1 ring-inset ring-primary-700/10">
            <Zap className="mr-2 h-4 w-4" />
            New: AI-powered document insights now available
          </div>

          {/* Main headline */}
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl leading-tight">
            Secure Document
            <span className="gradient-text block leading-tight py-2">Signing & Sharing</span>
            Made Simple
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Transform your document workflows with SignTusk. Send, track, and sign documents securely
            with real-time analytics, multi-party workflows, and enterprise-grade security.
          </p>

          {/* Feature highlights */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center justify-center sm:justify-start space-x-3 text-sm text-gray-600 bg-white/50 backdrop-blur-sm rounded-lg p-3 border border-gray-100">
                <feature.icon className="h-5 w-5 text-primary-600 flex-shrink-0" />
                <span className="font-medium">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full max-w-lg mx-auto">
            <Button size="xl" variant="gradient" className="group flex-1 sm:flex-none sm:min-w-[200px] btn-cta" asChild>
              <Link href="/signup" className="btn-cta">
                Start Free Trial
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="xl" variant="outline" className="group flex-1 sm:flex-none sm:min-w-[200px] btn-cta" asChild>
              <Link href="#demo" className="btn-cta text-gray-900">
                <Play className="h-5 w-5" />
                <span>Watch Demo</span>
              </Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 text-center">
            <p className="text-sm font-medium text-gray-500 mb-6">
              Trusted by teams at leading companies worldwide
            </p>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 opacity-60">
              {['Microsoft', 'Google', 'Amazon', 'Salesforce'].map((company) => (
                <div key={company} className="text-lg font-semibold text-gray-400">
                  {company}
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Product preview */}
        <div className="mt-20 relative">
          <div className="mx-auto max-w-5xl">
            <div className="relative rounded-2xl bg-white shadow-2xl ring-1 ring-gray-900/10 overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <div className="ml-4 text-sm text-gray-500">SignTusk Dashboard</div>
                </div>
              </div>
              <div className="aspect-video bg-gradient-to-br from-primary-50 to-blue-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Interactive Product Demo
                  </h3>
                  <p className="text-gray-600 mb-4">
                    See SignTusk in action with our live demo
                  </p>
                  <Button variant="gradient">
                    <Play className="mr-2 h-4 w-4" />
                    Launch Demo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
