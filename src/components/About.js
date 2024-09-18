import React from 'react';

function About() {
  return (
    <div className="bg-eerie-black text-mint-green min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">About Repute.ai</h2>
        <div className="max-w-3xl mx-auto">
          <p className="mb-6">
            Repute.ai is an innovative AI-powered platform designed to revolutionize 
            the way businesses generate and manage testimonials. Our mission is to help 
            companies build trust and credibility through authentic, engaging customer stories. 
          </p>
          <p className="mb-6">
            Founded in 2023, Repute.ai combines cutting-edge natural language processing 
            technology with a deep understanding of marketing psychology to create 
            testimonials that resonate with your target audience.
          </p>
          <p className="mb-6">
            Our team of AI experts, marketers, and customer experience professionals 
            are dedicated to providing you with a tool that not only saves time but 
            also enhances your brand's reputation in the digital marketplace.
          </p>
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-4">Our Values</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Innovation in AI and marketing technology</li>
              <li>Commitment to authenticity and ethical practices</li>
              <li>Customer-centric approach to product development</li>
              <li>Continuous improvement and learning</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;