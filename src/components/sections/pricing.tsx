'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Star, Zap, Crown, Building } from 'lucide-react'
import { cn } from '@/lib/utils'

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for individuals and small teams',
    price: { monthly: 15, yearly: 12 },
    icon: Zap,
    features: [
      '5 documents per month',
      '3 templates',
      'Basic analytics',
      'Email support',
      'Mobile app access',
      'Standard security'
    ],
    cta: 'Start Free Trial',
    popular: false
  },
  {
    name: 'Professional',
    description: 'Best for growing businesses',
    price: { monthly: 45, yearly: 36 },
    icon: Star,
    features: [
      'Unlimited documents',
      'Unlimited templates',
      'Advanced analytics',
      'Priority support',
      'API access',
      'Custom branding',
      'Team collaboration',
      'Bulk operations'
    ],
    cta: 'Start Free Trial',
    popular: true
  },
  {
    name: 'Enterprise',
    description: 'For large organizations',
    price: { monthly: 'Custom', yearly: 'Custom' },
    icon: Building,
    features: [
      'Everything in Professional',
      'SSO integration',
      'Advanced security',
      'Dedicated support',
      'Custom integrations',
      'SLA guarantee',
      'Audit logs',
      'White-label solution'
    ],
    cta: 'Contact Sales',
    popular: false
  }
]

const faqs = [
  {
    question: 'Can I change plans anytime?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.'
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes, we offer a 14-day free trial for all paid plans. No credit card required.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and bank transfers for enterprise customers.'
  },
  {
    question: 'Is my data secure?',
    answer: 'Absolutely. We use bank-grade encryption and are SOC 2 Type II certified.'
  }
]

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container-responsive">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simple, transparent
            <span className="gradient-text block">pricing for everyone</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose the plan that fits your needs. All plans include our core features
            with no hidden fees or surprise charges.
          </p>
        </div>

        {/* Billing toggle */}
        <div className="flex items-center justify-center mb-12">
          <div className="bg-white rounded-lg p-1 shadow-sm border border-gray-200">
            <button
              className={cn(
                "px-4 py-2 rounded-md text-sm font-medium transition-all relative z-10",
                !isYearly ? "bg-primary-600 text-white shadow-sm" : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              )}
              onClick={() => setIsYearly(false)}
            >
              <span className="relative z-10">Monthly</span>
            </button>
            <button
              className={cn(
                "px-4 py-2 rounded-md text-sm font-medium transition-all relative z-10",
                isYearly ? "bg-primary-600 text-white shadow-sm" : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              )}
              onClick={() => setIsYearly(true)}
            >
              <span className="relative z-10">Yearly</span>
              <span className="ml-1 text-xs bg-success-100 text-success-700 px-1.5 py-0.5 rounded relative z-10">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card
                className={cn(
                  "relative transition-all duration-300 hover:shadow-lg h-full",
                  plan.popular
                    ? "border-primary-500 shadow-lg scale-105 ring-2 ring-primary-500 ring-opacity-20"
                    : "border-gray-200 hover:border-gray-300"
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-xl mx-auto mb-4">
                    <plan.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {plan.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="text-center">
                  <div className="mb-6">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-gray-900">
                        {typeof plan.price.monthly === 'number' ? '$' : ''}
                        {isYearly ? plan.price.yearly : plan.price.monthly}
                      </span>
                      {typeof plan.price.monthly === 'number' && (
                        <span className="text-gray-600 ml-1">/month</span>
                      )}
                    </div>
                    {isYearly && typeof plan.price.monthly === 'number' && typeof plan.price.yearly === 'number' && (
                      <div className="text-sm text-gray-500 mt-1">
                        Billed annually (${plan.price.yearly * 12}/year)
                      </div>
                    )}
                  </div>

                  <Button
                    className={cn(
                      "w-full mb-6",
                      plan.popular ? "variant-gradient" : ""
                    )}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.cta}
                  </Button>

                  <ul className="space-y-3 text-left">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Enterprise features */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
          <div className="text-center mb-8">
            <Crown className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Enterprise Features
            </h3>
            <p className="text-gray-600">
              Additional capabilities for large organizations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Single Sign-On (SSO)',
              'Advanced Analytics',
              'Custom Integrations',
              'Dedicated Support',
              'SLA Guarantees',
              'Audit Logs',
              'White-label Solution',
              'On-premise Deployment'
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-success-500 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Frequently Asked Questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index}>
                <h4 className="font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h4>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Money back guarantee */}
        <div className="mt-16 text-center bg-success-50 rounded-2xl p-8">
          <div className="flex items-center justify-center w-16 h-16 bg-success-100 rounded-full mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-success-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            30-Day Money-Back Guarantee
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Try SignTusk risk-free. If you're not completely satisfied within 30 days,
            we'll refund your money, no questions asked.
          </p>
        </div>
      </div>
    </section>
  )
}
