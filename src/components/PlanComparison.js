import React from 'react';
import '../styles/PlanComparison.css';

function PlanComparison() {
  return (
    <div className="comparison-container">
      <h2>Plans Comparison</h2>
      <p className="subheading">Pick the plan that fits your needs.</p>
      <table className="pricing-table">
        <thead>
          <tr>
            <th></th>
            <th>Basic</th>
            <th className="highlight">Professional</th>
            <th>Business</th>
          </tr>
        </thead>
        <tbody>
          <tr className="feature-category">
            <td>Basics</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Testimonial Generation</td>
            <td className="check">✓</td>
            <td className="check">✓</td>
            <td className="check">✓</td>
          </tr>
          <tr>
            <td>Text Customization</td>
            <td className="check">✓</td>
            <td className="check">✓</td>
            <td className="check">✓</td>
          </tr>
          <tr>
            <td>Testimonial Templates</td>
            <td className="check">✓</td>
            <td className="check">✓</td>
            <td className="check">✓</td>
          </tr>
          <tr>
            <td>Multi-language Support</td>
            <td>50,000</td>
            <td className="check">✓</td>
            <td className="check">✓</td>
          </tr>
          <tr>
            <td>Basic Analytics</td>
            <td>25</td>
            <td>Unlimited</td>
            <td>Unlimited</td>
          </tr>
          
          <tr className="feature-category">
            <td>Advanced</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Sentiment Analysis</td>
            <td className="coming-soon">Coming soon</td>
            <td className="check">✓</td>
            <td className="check">✓</td>
          </tr>
          <tr>
            <td>A/B Testing</td>
            <td className="coming-soon">Coming soon</td>
            <td className="check">✓</td>
            <td className="check">✓</td>
          </tr>
          <tr>
            <td>Integration with CRM</td>
            <td className="coming-soon">Coming soon</td>
            <td className="check">✓</td>
            <td className="check">✓</td>
          </tr>
          <tr>
            <td>Advanced Customization</td>
            <td className="coming-soon">Coming soon</td>
            <td className="check">✓</td>
            <td className="check">✓</td>
          </tr>
          <tr>
            <td>API Access</td>
            <td className="coming-soon">Coming soon</td>
            <td className="check">✓</td>
            <td className="check">✓</td>
          </tr>

          <tr className="feature-category">
            <td>Collaboration</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Team Workspaces</td>
            <td className="check">✓</td>
            <td>10</td>
            <td>100</td>
          </tr>
          <tr>
            <td>User Roles & Permissions</td>
            <td>5</td>
            <td>25</td>
            <td>Unlimited</td>
          </tr>
          <tr>
            <td>Shared Templates</td>
            <td>2</td>
            <td>10</td>
            <td>100</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PlanComparison;