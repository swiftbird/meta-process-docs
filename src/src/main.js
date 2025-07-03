import './style.css'

// Documentation data - dynamically loaded from source files
const documentationData = [
  {
    title: "Web Application Generator",
    description: "Complete web development workflow with requirements discovery, tech stack setup, and deployment strategies.",
    features: ["Port Management", "CLI Verification", "Asset Creation", "Deployment Ready"],
    path: "web_app_generator/web_app_context_generator_v2_lite.md",
    status: "Production Ready"
  },
  {
    title: "Universal Meta-Context Template",
    description: "Domain-agnostic framework that adapts to any workflow type or business process.",
    features: ["Universal Framework", "Tool Integration", "Quality Assurance", "Multi-Domain"],
    path: "universal_templates/universal_meta_context_template_v1.md",
    status: "Stable"
  },
  {
    title: "Video Production Pipeline",
    description: "AI-powered scene production with reality-checked sound design and professional standards.",
    features: ["5-Phase Pipeline", "AI Integration", "Audio Layering", "Quality Standards"],
    path: "domain_specific/video_production/scene_production_context_v3.md",
    status: "Production Tested"
  }
];

// Context generation templates
const contextTemplates = {
  'web-app': {
    phases: [
      "Requirements Discovery & Market Research",
      "Technology Stack Selection & Setup",
      "Asset Creation & Content Pipeline",
      "Development & Testing Workflow",
      "Deployment & Monitoring Strategy"
    ],
    tools: ["CLI Tools", "Build Systems", "Testing Frameworks", "Deployment Platforms"],
    validations: ["Port Management", "Background Execution", "Quality Standards", "Performance Benchmarks"]
  },
  'research': {
    phases: [
      "Research Question Definition",
      "Literature Review & Analysis",
      "Methodology Design",
      "Data Collection & Processing",
      "Analysis & Documentation"
    ],
    tools: ["Research Databases", "Analysis Tools", "Documentation Systems", "Collaboration Platforms"],
    validations: ["Methodology Rigor", "Data Quality", "Analysis Accuracy", "Reproducibility"]
  },
  'creative': {
    phases: [
      "Creative Brief & Vision",
      "Concept Development",
      "Asset Creation & Production",
      "Review & Iteration",
      "Final Delivery & Distribution"
    ],
    tools: ["Design Software", "Media Tools", "Collaboration Platforms", "Asset Management"],
    validations: ["Creative Standards", "Technical Quality", "Brand Consistency", "Delivery Requirements"]
  },
  'business': {
    phases: [
      "Process Discovery & Mapping",
      "Stakeholder Analysis",
      "Workflow Design & Optimization",
      "Implementation Planning",
      "Monitoring & Continuous Improvement"
    ],
    tools: ["Process Management", "Analytics Tools", "Communication Systems", "Monitoring Platforms"],
    validations: ["Process Efficiency", "Stakeholder Satisfaction", "Quality Metrics", "ROI Measurement"]
  }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  populateDocumentationGrid();
  setupEventListeners();
  animateProcessSteps();
}

function populateDocumentationGrid() {
  const docsGrid = document.getElementById('docs-grid');
  if (!docsGrid) return;

  docsGrid.innerHTML = documentationData.map(doc => `
    <div class="doc-card" onclick="viewDocumentation('${doc.path}')">
      <h3>${doc.title}</h3>
      <p>${doc.description}</p>
      <div class="doc-features">
        ${doc.features.map(feature => `<span class="doc-feature">${feature}</span>`).join('')}
      </div>
      <div style="margin-top: 1rem; color: var(--primary-color); font-weight: 500;">
        Status: ${doc.status}
      </div>
    </div>
  `).join('');
}

function setupEventListeners() {
  // Smooth scrolling for navigation links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.getAttribute('href').substring(1);
      scrollToSection(target);
    });
  });

  // Project type change handler
  const projectTypeSelect = document.getElementById('project-type');
  if (projectTypeSelect) {
    projectTypeSelect.addEventListener('change', updateContextPreview);
  }

  // Auto-generate context on description change
  const projectDescription = document.getElementById('project-description');
  if (projectDescription) {
    let timeout;
    projectDescription.addEventListener('input', () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (projectDescription.value.trim()) {
          generateContext();
        }
      }, 1000);
    });
  }
}

function animateProcessSteps() {
  const steps = document.querySelectorAll('.process-step');
  steps.forEach((step, index) => {
    setTimeout(() => {
      step.style.transform = 'scale(1.05)';
      setTimeout(() => {
        step.style.transform = 'scale(1)';
      }, 200);
    }, index * 500);
  });
}

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    const navHeight = document.querySelector('.navbar').offsetHeight;
    const elementPosition = element.offsetTop - navHeight - 20;
    
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
}

function viewDocumentation(path) {
  // In a real implementation, this would load and display the actual documentation
  alert(`Loading documentation: ${path}\n\nIn a full implementation, this would display the complete meta-process template with interactive discovery questions and generated context examples.`);
}

function updateContextPreview() {
  const projectType = document.getElementById('project-type').value;
  const description = document.getElementById('project-description').value;
  
  if (description.trim()) {
    generateContext();
  }
}

function generateContext() {
  const projectType = document.getElementById('project-type').value;
  const description = document.getElementById('project-description').value.trim();
  const output = document.getElementById('context-output');
  
  if (!description) {
    output.innerHTML = '<p class="placeholder">Please provide a project description to generate context.</p>';
    return;
  }

  // Show loading state
  output.innerHTML = '<div class="loading"></div> Generating context...';

  // Simulate context generation with realistic delay
  setTimeout(() => {
    const template = contextTemplates[projectType];
    const timestamp = new Date().toISOString();
    const workspaceId = `${projectType}_${Date.now()}_${Math.random().toString(36).substr(2, 8)}`;
    
    const context = `# ${capitalizeFirst(projectType.replace('-', ' '))} Development Context

## Project Overview
${description}

## Workspace Information
- **Directory**: /Volumes/BlueDisk/Development/${workspaceId}
- **Created**: ${timestamp}
- **Project Type**: ${capitalizeFirst(projectType.replace('-', ' '))}
- **Assigned Ports**: ${generatePortAssignments()}

## Discovery Questions Completed
✅ Project scope and objectives defined
✅ Technical requirements identified
✅ Resource constraints documented
✅ Quality standards established

## Generated Workflow Phases

${template.phases.map((phase, index) => `### Phase ${index + 1}: ${phase}
- Automated discovery and setup
- Tool-aware execution
- Quality validation checkpoints
- Progress tracking and metrics`).join('\n\n')}

## Tool Integration
${template.tools.map(tool => `- **${tool}**: Context-aware configuration`).join('\n')}

## Quality Validation Framework
${template.validations.map(validation => `- ${validation}: Automated checks and standards`).join('\n')}

## Background Execution Commands
\`\`\`bash
# All services use background execution pattern
(nohup development_server --port 3002 > /dev/null 2>&1 &) && sleep 0.1
(nohup build_watcher --port 3003 > /dev/null 2>&1 &) && sleep 0.1
\`\`\`

## Success Criteria
- [ ] All workflow phases completed successfully
- [ ] Quality standards met or exceeded
- [ ] Tool integrations functioning properly
- [ ] Documentation and deliverables ready

---
*This context was generated by Lapis Labs Meta-Process System v2.0**
*Generated at: ${new Date().toLocaleString()}*`;

    output.innerHTML = `<pre>${context}</pre>`;
  }, 1500);
}

function generatePortAssignments() {
  const ports = [];
  for (let i = 0; i < 3; i++) {
    ports.push(3002 + i);
  }
  return ports.join(', ');
}

function capitalizeFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Global functions for button clicks
window.scrollToSection = scrollToSection;
window.generateContext = generateContext;
window.viewDocumentation = viewDocumentation;

// Add some interactive enhancements
document.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) {
    navbar.style.background = 'rgba(26, 26, 26, 0.98)';
  } else {
    navbar.style.background = 'rgba(26, 26, 26, 0.95)';
  }
});

// Add hover effects to cards
document.addEventListener('mouseover', (e) => {
  if (e.target.classList.contains('doc-card') || e.target.classList.contains('example-card')) {
    e.target.style.transform = 'translateY(-8px) scale(1.02)';
  }
});

document.addEventListener('mouseout', (e) => {
  if (e.target.classList.contains('doc-card') || e.target.classList.contains('example-card')) {
    e.target.style.transform = 'translateY(0) scale(1)';
  }
});

console.log("💎 Lapis Labs Meta-Process Documentation Site Initialized");
console.log('🚀 Ready to demonstrate the power of systematic AI-driven workflows');
