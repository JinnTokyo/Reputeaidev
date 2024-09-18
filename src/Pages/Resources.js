import React, { useState } from 'react';

const Resources = () => {
  // State for search input
  const [searchTerm, setSearchTerm] = useState('');

  // Sample data for resource categories and resources
  const resourceCategories = [
    { title: 'Documentation', description: 'Explore our detailed documentation' },
    { title: 'Tutorials', description: 'Step-by-step guides and tutorials' },
    { title: 'Case Studies', description: 'Learn from our customers\' success stories' },
    { title: 'FAQs', description: 'Find answers to common questions' },
    { title: 'Community', description: 'Join discussions with other users' }
  ];

  const featuredResources = [
    { title: 'Getting Started Guide', description: 'Everything you need to get up and running.' },
    { title: 'API Documentation', description: 'Detailed API references and examples.' }
  ];

  const allResources = [
    { title: 'Installation Guide', description: 'A step-by-step guide to installing our platform.' },
    { title: 'Advanced Configuration', description: 'Learn how to configure advanced features.' },
    { title: 'User Management Tutorial', description: 'Manage users effectively within the platform.' }
  ];

  // Function to filter resources based on search input
  const filterResources = (resources) => {
    return resources.filter(resource => 
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <div className="resources-page">
      {/* Header Section */}
      <header className="resources-header">
        <h1>Resources</h1>
        <p>Your guide to mastering our platform</p>
        <input
          type="text"
          id="resource-search"
          placeholder="Search for resources..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </header>

      {/* Resource Categories Section */}
      <section className="resource-categories">
        <h2>Categories</h2>
        {resourceCategories.map((category, index) => (
          <div key={index} className="category-card">
            <h3>{category.title}</h3>
            <p>{category.description}</p>
          </div>
        ))}
      </section>

      {/* Featured Resources Section */}
      <section className="featured-resources">
        <h2>Featured Resources</h2>
        {featuredResources.map((resource, index) => (
          <div key={index} className="featured-card">
            <h3>{resource.title}</h3>
            <p>{resource.description}</p>
          </div>
        ))}
      </section>

      {/* All Resources Section */}
      <section className="resource-list">
        <h2>All Resources</h2>
        {filterResources(allResources).map((resource, index) => (
          <div key={index} className="resource-card">
            <h3>{resource.title}</h3>
            <p>{resource.description}</p>
          </div>
        ))}
      </section>

      {/* Footer Section */}
      <footer className="resources-footer">
        <p>Need more help? <a href="#">Contact Support</a></p>
      </footer>
    </div>
  );
};

export default Resources;
