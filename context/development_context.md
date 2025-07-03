# Meta-Process Documentation Site - Development Context

## Project Overview
A modern, interactive static website that documents the power and capabilities of meta-process systems for AI-driven development workflows.

## Workspace Information
- **Directory**: `/Volumes/BlueDisk/Development/meta_process_docs_20250703_141526_317da012`
- **Created**: 2025-07-03T14:15:26
- **Source Documentation**: `/Volumes/BlueDisk/Development/meta_process_contexts`
- **Assigned Ports**:
  - Dev Server: 3002
  - Build Preview: 3003
  - Live Reload: 3004

## Technology Stack
- **Frontend**: Vanilla HTML/CSS/JavaScript with modern features
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Modern CSS with animations and responsive design
- **Deployment**: Static hosting ready (can be deployed anywhere)

## Development Commands

### Project Setup
```bash
# Navigate to workspace
cd /Volumes/BlueDisk/Development/meta_process_docs_20250703_141526_317da012

# Initialize Vite project
npm create vite@latest src -- --template vanilla
cd src && npm install
```

### Development Server (Background Execution)
```bash
# Start development server in background
cd src && (nohup npm run dev -- --port 3002 > /dev/null 2>&1 &) && sleep 0.1

# Check server status
curl -s http://localhost:3002 > /dev/null && echo "Dev server running on port 3002" || echo "Dev server not responding"
```

### Build Commands
```bash
# Build for production
cd src && npm run build

# Preview build locally
cd src && (nohup npm run preview -- --port 3003 > /dev/null 2>&1 &) && sleep 0.1
```

### Service Management
```bash
# Stop all services on our assigned ports
for port in 3002 3003 3004; do
  pid=$(lsof -ti :$port)
  if [ ! -z "$pid" ]; then
    kill $pid && echo "Stopped service on port $port"
  fi
done

# Check port status
for port in 3002 3003 3004; do
  if lsof -i :$port > /dev/null 2>&1; then
    echo "Port $port is in use"
  else
    echo "Port $port is available"
  fi
done
```

## Content Strategy
1. **Landing Page**: Hero section highlighting meta-process power
2. **Documentation Browser**: Interactive exploration of meta-process contexts
3. **Visual Examples**: Before/after comparisons of traditional vs meta-process workflows
4. **Interactive Demos**: Show real-time context generation
5. **Case Studies**: Success stories and use cases

## Development Workflow
1. **Phase 1**: Setup Vite project and basic structure
2. **Phase 2**: Create responsive layout and navigation
3. **Phase 3**: Import and process documentation from source
4. **Phase 4**: Build interactive components and animations
5. **Phase 5**: Optimize for performance and deployment

## Quality Standards
- **Performance**: Lighthouse score > 90
- **Accessibility**: WCAG 2.1 AA compliance
- **Responsive**: Mobile-first design
- **SEO**: Proper meta tags and structured data
- **Modern**: ES6+ JavaScript, CSS Grid/Flexbox

## Validation Checklist
- [ ] All ports verified available before use
- [ ] Development server uses background execution
- [ ] Build process completes successfully
- [ ] Site is responsive across device sizes
- [ ] All documentation is properly imported and displayed
- [ ] Interactive elements work as expected
- [ ] Performance benchmarks met
